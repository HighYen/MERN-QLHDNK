import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";

const Navbar = () => {
  const router = useLocation();
  const navigate = useNavigate();
  let pageTitle = "";

  // Dựa trên đường dẫn để gán tiêu đề thích hợp
  if (router.pathname === "/student") {
    pageTitle = "Sinh Viên";
  } else if (router.pathname === "/faculty") {
    pageTitle = "Giảng Viên";
  } else if (router.pathname === "/admin") {
    pageTitle = "Quản Trị Viên";
  }
  return (
    <div className="shadow-md px-6 py-4">
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        <p
          className="font-semibold text-2xl flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="mr-2">
            <RxDashboard />
          </span>{" "}
          Trang {pageTitle}
        </p>
        <button
          className="flex justify-center items-center text-red-500 px-3 py-2 font-semibold rounded-sm"
          onClick={() => navigate("/")}
        >
          Đăng xuất
          <span className="ml-2">
            <FiLogOut />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
