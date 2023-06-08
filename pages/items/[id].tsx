import Slide from "../../components/slide";

const ItemDetail = () => {
  return (
    <div className="px-4 py-4">
      <div>
        {/* 사진 */}
        <Slide />

        {/* 프로필 */}
        <div className="flex py-3 border-t border-b items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p>steve Jobs</p>
            <p className="text-xs text-gray-500 font-medium">
              View profile &rarr;
            </p>
          </div>
        </div>

        {/* 상세정보 */}
        <div className="mt-5">
          <h1 className="text-3xl font-bold">한국동</h1>
          <span className="block text-2xl">한국동 212</span>
          <span className="block mt-3">12제곱미터</span>
          <span className="block mt-2">2023.01.01.</span>
          <p className="block text-gray-700 my-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            numquam mollitia iure magnam voluptatum minus consequuntur, odio rem
            cum nulla quae quis aspernatur ducimus voluptate necessitatibus
            officiis impedit eveniet exercitationem!
          </p>
        </div>

        {/* 버튼들 */}
        <div className="mt-4 flex items-center justify-between space-x-2">
          <button className="flex-1 bg-green-500 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:offset-2 font-medium hover:bg-green-600 focus:ring-green-500">
            구매의뢰
          </button>
          <button className="p-3 rounded-md items-center justify-center text-gray-500 bg-gray-100 hover:bg-gray-400 ">
            관심등록
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 my-10">연관상품</h2>
          <div className=" mt-6 grid grid-cols-2 gap-4">
            {[1, 2].map((_, i) => (
              <div key={i}>
                <div className="bg-slate-500 h-56 w-full mb-4"></div>
                <h3 className="text-sm font-medium text-gray-900">dd</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
