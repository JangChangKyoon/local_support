module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    // css를 적용할 page 설정
    // pages폴더/모든다이렉토리/모든파일/확장자

    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
// 어느 컴포넌트(혹은 page)에 tailwind를 사용할 것인지 설정
