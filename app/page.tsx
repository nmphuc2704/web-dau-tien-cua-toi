export default function Home() {
  return (
    // Thẻ main bao bọc toàn bộ trang web
    // min-h-screen: Chiều cao tối thiểu bằng 100% màn hình
    // bg-white: Nền màu trắng
    // flex flex-col: Sắp xếp các phần tử theo chiều dọc
    <main className="min-h-screen bg-white flex flex-col text-gray-800">
      
      {/* 1. THANH MENU BÊN TRÊN */}
      <header className="w-full p-6 border-b border-gray-200 shadow-sm">
        <nav className="max-w-5xl mx-auto flex justify-between items-center">
          {/* Tên Logo hoặc Tên Web */}
          <div className="font-extrabold text-2xl tracking-tight text-blue-600">
            MyWeb.
          </div>
          
          {/* Các nút điều hướng */}
          <ul className="flex space-x-8 font-medium text-lg">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* 2. KHU VỰC NỘI DUNG CHÍNH (Căn giữa màn hình) */}
      {/* flex-grow: Chiếm toàn bộ khoảng trống còn lại */}
      {/* flex items-center justify-center: Căn giữa hoàn toàn theo cả 2 chiều */}
      <div className="flex-grow flex items-center justify-center">
        
        {/* Nút bấm to màu xanh dương */}
        {/* bg-blue-600: Nền xanh | text-white: Chữ trắng | text-2xl: Chữ to | rounded-xl: Bo góc */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-5 px-12 rounded-xl shadow-lg transition-transform transform hover:scale-105">
          Bấm vào đây
        </button>
        
      </div>

    </main>
  );
}
