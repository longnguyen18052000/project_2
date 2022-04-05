import React from "react";
import logo from "../img/logo.png";

function Header() {
  return (
    <div>
      {/* Header Home*/}
      <div className="d-flex justify-content-between p-2 logo header">
        <img src={logo} alt="logo" className="ml-2" />
        <p>Tổng đài hỗ trợ</p>
      </div>

      {/* title Home*/}
      <div className="d-flex flex-column justify-content-center align-items-center p-5 title border border-2">
        <p style={{fontSize: "30px"}}>Đăng ký khám chữa bệnh trực tuyến</p>
        <p className="text-secondary">
          Bệnh nhân được thăm khám trực tuyến với đội ngũ bác sĩ chuyên khoa gỏi
          đang làm việc tại các bệnh viện lớn
        </p>
      </div>

      {/* content page Home */}
      <div className="mt-5 d-flex flex-column align-items-center">
        <div className="w-50 p-3 text-white textdangky">
          Đăng ký thông tin trực tuyến
        </div>
      </div>
    </div>
  );
}

export default Header;
