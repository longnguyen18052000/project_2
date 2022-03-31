import logo from "../img/logo.png";
import LoaiDichVu from "./LoaiDichVu.js";
import Options from "./Options.js";
import { useState, useEffect } from "react";
import '../../index.css'
function Home() {
  const [valueDate, setValueDate] = useState("");
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    if (valueDate) {
      let date = valueDate.split("-");
      let year = parseInt(date[0]);
      let month = parseInt(date[1]);
      let day = parseInt(date[2]);
      if (year > currentYear) {
        setIsValid("valid")
      } else if (year === currentYear) {
        if (month > currentMonth) {
          setIsValid("valid");
        } else if (month === currentMonth) {
          if (day >= currentDay) {
            setIsValid("valid");
          } else {
            setIsValid("invalid");
          }
        } else {
          setIsValid("invalid");
        }
      }
      else {
        setIsValid("invalid");
      }
    }
  }, [valueDate]);

  const [inputs, setInputs] = useState({
    selectService: '',
    date: '',
    time: '',
    codeNumber: '',
    mota: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const [color, setColor] = useState({
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0
  });

  const backgroundActive = "active";
  const backgroundNonActive = "text-dark";

  const timeClick = () => {
    setColor(1);
  }

  const nextClick = (event) => {
    event.preventDefault();
    if (inputs.selectService === '') {
      alert('vui lòng chọn dịch vụ khám')
    }else{
      alert(inputs.selectService);
    }

    if (valueDate === '') {
      alert('vui lòng chọn ngày đăng ký khám');
    }

    if (inputs.codeNumber === '') {
      alert("vui lòng nhập mã số bệnh nhân");
    }

    if (inputs.mota === '') {
      alert("vui lòng nhập triệu chứng, lý do khám");
    }
  }
  return (
    <div>
      {/* Header Home*/}
      <div className="d-flex justify-content-between p-2 logo header">
        <img src={logo} alt="logo" className="ml-2" />
        <p>Tổng đài hỗ trợ</p>
      </div>

      {/* title Home*/}
      <div className="d-flex flex-column justify-content-center align-items-center p-5 title border border-2">
        <h2>Đăng ký khám chữa bệnh trực tuyến</h2>
        <p>
          Bệnh nhân được thăm khám trực tuyến với đội ngũ bác sĩ chuyên khoa gỏi
          đang làm việc tại các bệnh viện lớn
        </p>
      </div>

      {/* content page Home */}
      <div className="pb-5 mt-5 d-flex flex-column align-items-center">
        <div className="w-50 p-3 text-white textdangky">
          Đăng ký thông tin trực tuyến
        </div>
        <div className="w-50 border border-2 mb-4 container">
          {/* Cảnh báo người dùng */}
          <div>
            <div className="alert alert-success mt-4">
              <h6>
                <small>
                  Các trường đánh dấu * là các trường bắt buộc nhập. Thông tin
                  bệnh nhân, thông tin khám cần chính xác
                </small>
              </h6>
            </div>
          </div>

          {/* content */}
          <div className="mt-4 mb-4">
            <div className="text-center p-2">THÔNG TIN ĐĂNG KÝ KHÁM</div>

            {/* loại dịch vụ */}
            <div>Loại dịch vụ<span>*</span></div>
            <div className="mb-4 container">
              <LoaiDichVu />
            </div>

            {/* dịch vụ khám, ngày đăng ký khám */}
            <div className="d-flex">
              <div className="w-50 mr-1">
                <div>Dịch vụ khám<span>*</span></div>
                <div>
                  <select value={inputs.selectService || ''} onChange={handleChange} name="selectService"
                    className="w-100 p-2 border border-2">
                    <Options />
                  </select>
                </div>
              </div>

              <div className="w-50 ml-1">
                <div>
                  Ngày đăng ký khám<span>*</span>
                </div>
                <input
                  type="date"
                  value={valueDate}
                  onChange={(e) => setValueDate(e.target.value)}
                  className="p-2 w-100 border border-2"
                />
              </div>
            </div>

            {/* Thời gian đăng ký khám, mã số bệnh nhân */}
            <div className="mt-4">
              <div className="d-flex">
                <div className="w-50 mr-1">
                  <div>Thời gian đăng ký khám <span>*</span></div>
                  <button className="p-2 w-100 bg-white divDichVu">
                    Chọn ngày đăng ký khám
                  </button>
                  {isValid &&
                    (isValid === "invalid" ? (
                      <label className="bg-danger text-white text-center w-100 labelTextNo">
                        Chưa có lịch khám vào ngày đã chọn
                      </label>
                    ) : (
                      <table className="tab">
                        <tr>
                          <td><button type="button" onClick={timeClick} className={color === 1 ? backgroundActive : backgroundNonActive} >7h - 8h</button></td>
                          <td><button type="button" onClick={timeClick} className={color === 1 ? backgroundActive : backgroundNonActive} >8h - 9h</button></td>
                          <td><button type="button" onClick={timeClick} className={color === 1 ? backgroundActive : backgroundNonActive} >9h - 10h</button></td>
                          <td><button type="button" onClick={timeClick} className={color === 1 ? backgroundActive : backgroundNonActive} >10h - 11h</button></td>
                          <td><button type="button" onClick={timeClick} className={color === 1 ? backgroundActive : backgroundNonActive} >11h - 12h</button></td>
                        </tr>

                        <tr>
                          <td><button type="button">12h - 13h</button></td>
                          <td><button type="button">13h - 14h</button></td>
                          <td><button type="button">14h - 15h</button></td>
                          <td><button type="button">15h - 16h</button></td>
                          <td><button type="button">16h - 17h</button></td>
                        </tr>
                      </table>
                    ))}
                </div>
                <div className="w-50 ml-1">
                  <div>
                    Mã số bệnh nhân <span>*</span>
                  </div>
                  <div>
                    <input name="codeNumber" value={inputs.codeNumber || ''} onChange={handleChange}
                      type="number" className="w-100 p-2 border border-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mô tả */}
            <div className="mt-4">
              <div>Mô tả <span>*</span></div>
              <textarea name="mota" value={inputs.mota || ''} onChange={handleChange}
                className="w-100 border border-2" rows="4"
                placeholder="Nhập triệu chứng, lý do khám"></textarea>
            </div>

            {/* Đính kèm tài liệu, tiếp theo */}
            <div className="w-50 mt-4 container d-flex justify-content-center mb-4">
              <table className="w-100">
                <tr>
                  <td className="w-50 p-2">
                    <button className="p-3 w-100 h-100 bg-white border border-1 rounded">Đính kèm tài
                      liệu</button>
                  </td>

                  <td className="w-50 p-2">
                    <input type="button" onClick={nextClick}
                      className="p-3 w-100 h-100 border border-1 rounded service haha text-white textdangky"
                      value="Tiếp theo" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
