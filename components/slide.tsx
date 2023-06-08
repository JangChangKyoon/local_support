import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slide() {
  const slides = [
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    "https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg",
    "https://blog.kakaocdn.net/dn/BGT7X/btqUzvTqi5h/flp39GdJH0GU6mo7cTbbhk/img.jpg",
    "https://blog.kakaocdn.net/dn/bWnmfv/btqUBwqZvwA/3CiXGt3SR0TXoOveRJxV91/img.jpg",
    "https://blog.kakaocdn.net/dn/XsLCO/btqUL8PQLwp/NZWCU2jAYKkKSXwcohBKTK/img.jpg",
    "https://blog.kakaocdn.net/dn/bG3iVL/btqUvCZPaRL/ofIjkNWJP1mj2bOG9fie51/img.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전 사진 보기
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    // 현재 인덱스가 첫번째 페이지(0)이냐 아니냐로 boolean 판정
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    // 현재 페이지가 첫번째 페이지이면 마지막 페이지를 보여주고 아니면 현재 페이지에서 -1
    setCurrentIndex(newIndex);
  };

  // 다음 사진 보기
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    // 현재 페이지 숫자와와 전체 슬라이드 길이 숫자가 같으면 처음 페이지로(0)
    setCurrentIndex(newIndex);
  };

  // 점버튼 클릭하여 사진 보기
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    // 슬라이드 전체틀
    <div className="max-w-[1200px] max-h-[1000px] h-screen w-screen m-auto py-16 px-4 relative group">
      <div
        // 슬라이드에 삽입할 사진
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        {/* hidden group-hover:block 숨겼다가 호버링할 때 나타남 */}
        {/* absolute top-[50%] translate-y-[-50%] : 화면 중간에 배치하다가 아래 점버튼으로 다시 한번 조정 */}
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%]  translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* 사진 직접 선택 점버튼 */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide;
