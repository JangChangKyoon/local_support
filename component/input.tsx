interface InputProps {
  register: any;
  placeholder: string;
  type: string;
  name: string;
  id: string;
  message?: string;
}

// email 로그인 input
export default function Input({
  register,
  placeholder,
  type,
  name,
  id,
  message,
}: InputProps) {
  return (
    <div>
      <div>
        <label htmlFor={id}>{type}</label>
        {name === "phone" ? <span>+82</span> : null}
        <input
          {...register}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
        />
        <p className="text-red-500">{message}</p>
      </div>
    </div>
  );
}
