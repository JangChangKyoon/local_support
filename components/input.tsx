import { cls } from "@/libs/client/utils";

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
    <div className="flex flex-col">
      <label className=" text-sm font-medium text-gray-700" htmlFor={id}>
        {type}
      </label>
      <div className="flex flex-col">
        <input
          {...register}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          className={cls(
            Boolean(message) ? " border-red-500" : "",
            " appearance-none px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
          )}
        />
        <div className=" text-red-500 ">{message}</div>
      </div>
    </div>
  );
}
