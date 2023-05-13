import { cls } from "@/libs/client/utils";

interface ButtonProps {
  type: string;
  onClick: any;
  value: string;
  account?: boolean;
  method: string;
  classname: any;
}

export default function Button({
  type,
  onClick,
  value,
  method,
  account,
  classname,
}: ButtonProps) {
  return (
    <>
      {method ? (
        <input
          type={type}
          onClick={onClick}
          value={value}
          className={cls(classname)}
        />
      ) : null}
    </>
  );
}
