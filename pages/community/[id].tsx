const CommunityPostDetail = () => {
  return (
    <div>
      {/* 질문분류 */}
      <span className="inline-flex my-3 ml-4 items-center px-2.5 py-0.5 bg-gray-100 rounded-full text-xs font-medium">
        빈집문의
      </span>

      {/* 사진/프로필(이름, 링크) */}
      <div className="flex mb-3 px-4 pb-3 cursor-pointer border-b items-center space-x-3">
        <div className="bg-slate-300 w-10 h-10 rounded-full"></div>
        <div>
          <p className="text-sm font-medium text-gray-700">작성자</p>
          <p className="text-xs font-medium text-gray-500">
            View Profile &rarr;
          </p>
        </div>
      </div>

      {/* 질문(Q,질문)/궁금해요수(이모티콘,궁금수)+답변수(이모티콘,궁금수) */}
      <div>
        {/* 1. 질문 */}
        <div className="mt-2 px-4 text-gray-700">
          <span className="text-green-700 font-medium">Q</span>빈집가격은 어떻게
          협의하니?
        </div>
        {/* 2. 궁금해요수/답변수 */}
        <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px] w-full">
          {/* 2-1 궁금해요수 */}
          <span className="flex space-x-2 items-center text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          {/* 2-2 답변수 */}
          <span className="flex items-center space-x-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
        <div></div>
      </div>

      {/* 답변자프로필 */}
      <div className="flex my-5 px-4 space-x-2 items-start">
        {/* 1. 프로필사진 */}
        <div className="bg-slate-300 w-8 h-8 rounded-full" />
        {/* 2. 프로필이름/답변 */}
        <div className="flex flex-col font-medium text-gray-700">
          <span className="text-sm">시민케인</span>
          <span className="text-sm text-slate-400">2시간 전</span>
          <p className="mt-2">제발 너가 좀 알아서해라</p>
        </div>
      </div>

      {/* 답변입력창 */}
      <div className="px-4">
        <textarea
          placeholder="Answer this question!"
          rows={4}
          className="w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm shadow-sm"
        />
      </div>

      {/* 답변/답변등록버튼 */}
      <div className="px-4 mt-2">
        <button className="bg-green-500 rounded-md shadow-sm py-2 text-white font-medium text-sm w-full border-transparent hover:bg-green-600 focus:ring-green-500 focus:ring-2 focus:ring-offset-2 focus:outline-none    ">
          답변등록
        </button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
