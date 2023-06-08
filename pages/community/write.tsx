const Write = () => {
  return (
    <div className="px-4 py-10">
      {/* 의견입력창 */}
      <textarea
        placeholder="Ask a question"
        rows={4}
        className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500 shadow-sm"
      />
      {/* 제출버튼 */}
      <button className="mt-2 bg-green-500 py-2 w-full rounded-md text-white text-sm hover:bg-green-600 focus:ring-offset-2 focus:ring-2 focus:ring-green-600 focus:outline-none border border-transparent">
        제출
      </button>
    </div>
  );
};

export default Write;
