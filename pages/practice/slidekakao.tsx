import { useState } from "react";

const $ = (...classnames: any[]) => {
  return classnames.filter((v) => !!v).join(" ");
};

const isTouchScreen =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none) and (pointer: coarse)").matches;

function registDragEvent({
  onDragChange,
  onDragEnd,
  stopPropagation,
}: {
  onDragChange?: (deltaX: number, deltaY: number) => void;
  onDragEnd?: (deltaX: number, deltaY: number) => void;
  stopPropagation?: boolean;
}) {
  if (isTouchScreen) {
    return {
      onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => {
        if (stopPropagation) touchEvent.stopPropagation();

        const touchMoveHandler = (moveEvent: TouchEvent) => {
          if (moveEvent.cancelable) moveEvent.preventDefault();

          const deltaX =
            moveEvent.touches[0].pageX - touchEvent.touches[0].pageX;
          const deltaY =
            moveEvent.touches[0].pageY - touchEvent.touches[0].pageY;
          onDragChange?.(deltaX, deltaY);
        };

        const touchEndHandler = (moveEvent: TouchEvent) => {
          const deltaX =
            moveEvent.changedTouches[0].pageX -
            touchEvent.changedTouches[0].pageX;
          const deltaY =
            moveEvent.changedTouches[0].pageY -
            touchEvent.changedTouches[0].pageY;
          onDragEnd?.(deltaX, deltaY);
          document.removeEventListener("touchmove", touchMoveHandler);
        };

        document.addEventListener("touchmove", touchMoveHandler, {
          passive: false,
        });
        document.addEventListener("touchend", touchEndHandler, { once: true });
      },
    };
  }

  return {
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      if (stopPropagation) clickEvent.stopPropagation();

      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        const deltaY = moveEvent.pageY - clickEvent.pageY;
        onDragChange?.(deltaX, deltaY);
      };

      const mouseUpHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        const deltaY = moveEvent.pageY - clickEvent.pageY;
        onDragEnd?.(deltaX, deltaY);
        document.removeEventListener("mousemove", mouseMoveHandler);
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
  };
}

const inrange = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

const imageList = [
  "https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg",
  "https://blog.kakaocdn.net/dn/BGT7X/btqUzvTqi5h/flp39GdJH0GU6mo7cTbbhk/img.jpg",
  "https://blog.kakaocdn.net/dn/bWnmfv/btqUBwqZvwA/3CiXGt3SR0TXoOveRJxV91/img.jpg",
  "https://blog.kakaocdn.net/dn/XsLCO/btqUL8PQLwp/NZWCU2jAYKkKSXwcohBKTK/img.jpg",
  "https://blog.kakaocdn.net/dn/bG3iVL/btqUvCZPaRL/ofIjkNWJP1mj2bOG9fie51/img.jpg",
];

const SLIDER_WIDTH = 400;
const SLIDER_HEIGHT = 400;

export default function CarouselInfiniteExample() {
  const slideList = [imageList.at(-1), ...imageList, imageList.at(0)];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transX, setTransX] = useState(0);
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <div
        className="overflow-hidden"
        style={{
          width: SLIDER_WIDTH,
          height: SLIDER_HEIGHT,
        }}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(${-currentIndex * SLIDER_WIDTH + transX}px)`,
            transition: `transform ${animate ? 300 : 0}ms ease-in-out 0s`,
          }}
          {...registDragEvent({
            onDragChange: (deltaX) => {
              setTransX(inrange(deltaX, -SLIDER_WIDTH + 10, SLIDER_WIDTH - 10));
            },
            onDragEnd: (deltaX) => {
              const maxIndex = slideList.length - 1;

              if (deltaX < -100)
                setCurrentIndex(inrange(currentIndex + 1, 0, maxIndex));
              if (deltaX > 100)
                setCurrentIndex(inrange(currentIndex - 1, 0, maxIndex));

              setAnimate(true);
              setTransX(0);
            },
          })}
          onTransitionEnd={() => {
            setAnimate(false);

            if (currentIndex === 0) {
              setCurrentIndex(slideList.length - 2);
            } else if (currentIndex === slideList.length - 1) {
              setCurrentIndex(1);
            }
          }}
        >
          {slideList.map((url, i) => (
            <div key={i} className="flex-shrink-0">
              <img src={url} alt="img" width={SLIDER_WIDTH} draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
