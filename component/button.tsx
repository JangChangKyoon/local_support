interface ButtonProps {
  type: string;
  onClick: any;
  value: string;
  method: string;
}

export default function Button({ type, onClick, value, method }: ButtonProps) {
  return (
    <>{method ? <input type={type} onClick={onClick} value={value} /> : null}</>
  );
}
