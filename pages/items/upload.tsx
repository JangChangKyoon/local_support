const Upload = () => {
  return (
    <div className="px-4 py-10 space-y-5">
      {/* 사진첨부 */}
      <div>
        <label className="w-full cursor-pointer text-gray-600 hover:border-green-500 hover:text-green-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="file" className="hidden" />
        </label>
      </div>

      {/* 인풋들 */}
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="location"
        >
          지역
        </label>
        <input
          type="text"
          id="location"
          required
          className=" appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="address"
        >
          세부주소
        </label>
        <input
          type="text"
          id="address"
          className=" appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="extent"
        >
          면적
        </label>
        <div className="relative flex">
          <input
            type="float"
            id="extent"
            className=" appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
          <span className="absolute right-0 bottom-2.5 pointer-events-none pr-3 items-center text-gray-500">
            제곱미터
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          세부설명
        </label>
        <textarea
          id="description"
          className="shadow-sm w-full focus:ring-green-500 rounded-md border-gray-300 focus:border-green-500"
          rows={4}
        />
      </div>

      {/* 버튼 */}
      <button className="w-full bg-green-500 rounded-md hover:bg-green-600 text-white py-2 px-4 border-transparent shadow-sm">
        Upload
      </button>
    </div>
  );
};

export default Upload;
