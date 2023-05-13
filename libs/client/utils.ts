export function cls(...classnames: string[]) {
  // ...classnames : 리스트 내부 요소를 가르킴
  return classnames.join(" ");
  // 리스트 요소들을 " "로 묶어서 한줄로 반환함
}

// className={cls(
//     " pb-4 font-medium text-sm border-b-2",
//     method.method === "email"
//       ? " border-green-500 text-green-400"
//       : " border-transparent hover:text-gray-400 text-gray-500"
//   )}
