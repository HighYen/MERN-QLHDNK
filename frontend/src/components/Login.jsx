import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { baseApiURL } from "../baseUrl";
const Login = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Student");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.login !== "" && data.password !== "") {
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(`${baseApiURL()}/${selected.toLowerCase()}/auth/login`, data, {
          headers: headers,
        })
        .then((response) => {
          navigate(`/${selected.toLowerCase()}`, {
            state: { type: selected, loginid: response.data.loginid },
          });
        })
        .catch((error) => {
          toast.dismiss();
          console.error(error);
          toast.error(error.response.data.message);
        });
    } else {
    }
  };
  return (
    <div className="bg-white h-[100vh] w-full flex justify-between items-center">
      <img
        className="w-[60%] h-[100vh] object-cover"
        src="https://dkhp.hcmue.edu.vn/static/media/banner-1668412987.c5ee3f2a9c24a0187700.jpg"
        alt=""
      />
      <div className="w-[40%] flex justify-center items-start flex-col pl-8">
        <p className="text-3xl font-semibold pb-2 border-b-2 border-blue-800">
          Đăng nhập
        </p>
        <form
          className="flex justify-center items-start flex-col w-full mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-[70%]">
            <label className="mb-1" htmlFor="eno">
              Tài khoản*
            </label>
            <input
              type="number"
              id="eno"
              required
              className="bg-white outline-none border-2 border-gray-400 py-2 px-4 rounded-[16px] w-full focus:border-blue-500"
              {...register("loginid")}
            />
          </div>
          <div className="flex flex-col w-[70%] mt-3">
            <label className="mb-1" htmlFor="password">
              Mật khẩu*
            </label>
            <input
              type="password"
              id="password"
              required
              className="bg-white outline-none border-2 border-gray-400 py-2 px-4 rounded-[16px] w-full focus:border-blue-500"
              {...register("password")}
            />
          </div>
          {/* <div className="flex w-[70%] mt-3 justify-start items-center">
            <input type="checkbox" id="remember" className="accent-blue-500" />{" "}
            Remember Me
          </div> */}
          <button className="bg-blue-800 mt-5 text-white py-2 text-l rounded-[16px] hover:bg-blue-1000 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all flex justify-center items-center w-[70%]">
            Đăng nhập
            <span className="ml-2">
              {/* <FiLogIn /> */}
            </span>
          </button>
        </form>
      </div>
      <div className="absolute top-4 right-4">
        <button
          className={`text-blue-800 mr-6 text-base font-semibold hover:text-blue-1000 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === "Student" && "border-b-2 border-blue-500"
          }`}
          onClick={() => setSelected("Student")}
        >
          Sinh viên
        </button>
        <button
          className={`text-blue-800 mr-6 text-base font-semibold hover:text-blue-1000 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === "Faculty" && "border-b-2 border-blue-500"
          }`}
          onClick={() => setSelected("Faculty")}
        >
          Giảng viên
        </button>
        <button
          className={`text-blue-800 mr-6 text-base font-semibold hover:text-blue-1000 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === "Admin" && "border-b-2 border-blue-500"
          }`}
          onClick={() => setSelected("Admin")}
        >
          Quản Trị viên
        </button>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Login;
