# Hệ Thống Quản Lý Hoạt Động Ngoại Khoá

Hệ thống Quản Lý Hoạt Động Ngoại Khoá là một hệ thống sử dụng MERN Stack với ba cổng đăng nhập khác nhau cho sinh viên, giảng viên và quản trị viên.

## Công Nghệ Sử Dụng

**Client:** React, Redux, TailwindCSS  
**Server:** Node, Express  
**Cơ Sở Dữ Liệu:** MongoDB  

## Tính Năng Dành Cho Sinh Viên

- **Điểm Danh Hoạt Động:** Điểm danh các hoạt động tham gia  
- **Xem Điểm Hoạt Động:** Xem điểm hoạt động ngoại khoá cá nhân  
- **Hoạt động:** Xem các thông báo về hoạt động
- **Đăng Kí Hoạt động:** Đăng kí các hoạt động sắp diễn ra
- **Thời Khóa Biểu:** Xem thời khóa biểu cá nhân  
- **Cập Nhật Mật Khẩu:** Cho phép sinh viên thay đổi mật khẩu  

## Tính Năng Dành Cho Giảng Viên

- **Thông Tin Sinh Viên:** Xem thông tin chi tiết của sinh viên  
- **Cập Nhật Mật Khẩu:** Cho phép giảng viên thay đổi mật khẩu  
- **Chấm Điểm Hoạt Động** Chấm điểm hoạt động ngoại khoá  
- **Quản Lý Hoạt Động:** Quản lý hoạt động  
- **Quản Lý Thời Khóa Biểu:** Quản lý thời khóa biểu  


## Tính Năng Dành Cho Quản Trị Viên

- **Tạo Tài Khoản:** Thêm tài khoản mới cho sinh viên, giảng viên và quản trị viên  
- **Chỉnh Sửa Thông Tin Tài Khoản:** Thay đổi thông tin chi tiết của từng tài khoản  
- **Quản Lý Hoạt Động:** Thêm/sửa hoạt động 
- **Quản Lý Thông Báo:** Thêm/sửa thông báo  

## Hướng Dẫn Cài Đặt

1. **Clone repository:**   
   *```bash
   git clone https://github.com/HighYen/MERN-QLHDNK.git
   ```*
2. **Cài đặt các thư viện phụ thuộc:**  
    *
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
4. **Thiết lập biến môi trường:**
   - File `.env.sample` được cung cấp trong cả hai thư mục `frontend` và `backend`, sử dụng file này để tạo file `.env`.
5.  **Thiết lập media:**
    - Tạo folder media trong backend và thêm file .keep
6. **Chạy script tạo tài khoản quản trị viên:**   
   *
   ```bash
   cd backend
   npm run seed
   ```
   - **Login ID:** `123456`
   - **Password:** `admin123`
  
7. **Chạy server backend:**   
   *
   ```bash
   cd backend
   npm start
   ```
   
8. **Chạy server frontend:**
   *
   ```bash
   cd ../frontend
   npm start
   ```
