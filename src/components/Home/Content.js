import LoaiDichVu from "./LoaiDichVu.js";
import Options from "./Options.js";
import { optionCoPhi, optionMienPhi } from "./Data.js";
import { useState, useEffect, useRef, useContext } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.js";

const Content = () => {
  const navigate = useNavigate();
  const { setInputs, inputs, valueButton } = useContext(GlobalContext);
  const [valueDate, setValueDate] = useState("");
  const [isValid, setIsValid] = useState();
  const refHour = useRef(document.getElementsByClassName("btn"));
  const [valueFile, setValueFile] = useState("");

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
        setIsValid("valid");
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
      } else {
        setIsValid("invalid");
      }
    }
    setInputs((values) => ({ ...values, date: valueDate }));
  }, [valueDate]);

  const handleChange = (event) => {
    // const name = event.target.name;
    const value = event.target.value;
    if (valueButton === "cost") {
      optionCoPhi.forEach((item) => {
        item.content.forEach((service) => {
          if (service.id === parseInt(value)) {
            setInputs((values) => ({
              ...values,
              cost: service.cost,
              selectService: service.name,
            }));
          }
        });
      });
    } else {
      optionMienPhi.forEach((item) => {
        item.content.forEach((service) => {
          if (service.id === parseInt(value)) {
            setInputs((values) => ({
              ...values,
              cost: service.cost,
              selectService: service.name,
            }));
          }
        });
      });
    }
  };

  const handleChangeCode = (event) => {
    const value = event.target.value;
    setInputs((values) => ({ ...values, codeNumber: value }));
  };
  const handleChangeDescribe = (event) => {
    const value = event.target.value;
    setInputs((values) => ({ ...values, mota: value }));
  };
  const timeClick = (e) => {
    for (let i = 0; i < refHour.current.length; i++) {
      if (refHour.current.item(i).classList.contains("active")) {
        refHour.current.item(i).classList.remove("active");
      }
    }
    for (let i = 0; i < refHour.current.length; i++) {
      if (refHour.current.item(i).value === e.target.value) {
        if (refHour.current.item(i).classList.contains("active")) {
          refHour.current.item(i).classList.remove("active");
        } else {
          refHour.current.item(i).classList.add("active");
          setInputs((values) => ({
            ...values,
            time: refHour.current.item(i).innerHTML,
          }));
        }
      }
    }
  };

  const nextClick = (event) => {
    event.preventDefault();
    if (inputs.selectService === "") {
      alert("vui lòng chọn dịch vụ khám");
    } else if (valueDate === "") {
      alert("vui lòng chọn ngày đăng ký khám");
    } else if (inputs.codeNumber === "") {
      alert("vui lòng nhập mã số bệnh nhân");
    } else if (inputs.mota === "") {
      alert("vui lòng nhập triệu chứng, lý do khám");
    }
    if (
      inputs.selectService !== "" &&
      valueDate !== "" &&
      inputs.codeNumber !== "" &&
      inputs.mota !== ""
    ) {
      navigate("/information");
    }
  };

  return (
    <div className="w-50 border border-2 container">
      {/* Cảnh báo người dùng */}
      <div>
        <div className="alert alert-success mt-4">
          <h6>
            <small>
              Các trường đánh dấu * là các trường bắt buộc nhập. Thông tin bệnh
              nhân, thông tin khám cần chính xác
            </small>
          </h6>
        </div>
      </div>

      {/* content */}
      <div className="mt-4 mb-4">
        <div className="text-center p-2">THÔNG TIN ĐĂNG KÝ KHÁM</div>

        {/* loại dịch vụ */}
        <div>
          Loại dịch vụ<span>*</span>
        </div>
        <div className="mb-4 container">
          <LoaiDichVu />
        </div>

        {/* dịch vụ khám, ngày đăng ký khám */}
        <div className="d-flex">
          <div className="w-50 mr-1">
            <div>
              Dịch vụ khám<span>*</span>
            </div>
            <div>
              <select
                onChange={handleChange}
                name="selectService"
                className="w-100 p-2 border border-2"
              >
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
              <div>
                Thời gian đăng ký khám <span>*</span>
              </div>
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
                      <td>
                        <button
                          type="button"
                          value="1"
                          onClick={timeClick}
                          className="btn"
                        >
                          7h - 8h
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          value="2"
                          onClick={timeClick}
                          className="btn"
                        >
                          8h - 9h
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          value="3"
                          onClick={timeClick}
                          className="btn"
                        >
                          9h - 10h
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          value="4"
                          onClick={timeClick}
                          className="btn"
                        >
                          10h - 11h
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          value="5"
                          onClick={timeClick}
                          className="btn"
                        >
                          11h - 12h
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <button
                          type="button"
                          value="6"
                          onClick={timeClick}
                          className="btn"
                        >
                          12h - 13h
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          value="7"
                          onClick={timeClick}
                          className="btn"
                        >
                          13h - 14h
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          value="8"
                          onClick={timeClick}
                          className="btn"
                        >
                          14h - 15h
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          value="9"
                          onClick={timeClick}
                          className="btn"
                        >
                          15h - 16h
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          value="10"
                          onClick={timeClick}
                          className="btn"
                        >
                          16h - 17h
                        </button>
                      </td>
                    </tr>
                  </table>
                ))}
            </div>
            <div className="w-50 ml-1">
              <div>
                Mã số bệnh nhân <span>*</span>
              </div>
              <div>
                <input
                  name="codeNumber"
                  value={inputs.codeNumber || ""}
                  onChange={handleChangeCode}
                  min={0}
                  type="number"
                  className="w-100 p-2 border border-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mô tả */}
        <div className="mt-4">
          <div>
            Mô tả <span>*</span>
          </div>
          <textarea
            name="mota"
            value={inputs.mota || ""}
            onChange={handleChangeDescribe}
            className="w-100 border border-2"
            rows="4"
            placeholder="Nhập triệu chứng, lý do khám"
          ></textarea>
        </div>

        {/* Đính kèm tài liệu, tiếp theo */}
        <div className="w-50 mt-4 container d-flex justify-content-center mb-4">
          <table className="w-100">
            <tr>
              <td className="w-50 p-1">
                <label
                  className="border px-2 py-3 rounded"
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="file"
                    value={valueFile}
                    style={{ position: "absolute", left: "-1000px" }}
                    onChange={(e) => setValueFile(e.target.value)}
                    required
                  />
                  <span
                    className="d-block text-black"
                    style={{ minWidth: "140px" }}
                  >
                    {valueFile !== "" ? valueFile : "Đính kèm tài liệu"}
                  </span>
                </label>
              </td>

              <td className="w-50 p-1">
                <input
                  type="button"
                  onClick={nextClick}
                  className="p-3 w-100 h-100 border border-1 rounded service haha text-white textdangky"
                  value="Tiếp theo"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content;
