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
      alert("vui l??ng ch???n d???ch v??? kh??m");
    } else if (valueDate === "") {
      alert("vui l??ng ch???n ng??y ????ng k?? kh??m");
    } else if (inputs.codeNumber === "") {
      alert("vui l??ng nh???p m?? s??? b???nh nh??n");
    } else if (inputs.mota === "") {
      alert("vui l??ng nh???p tri???u ch???ng, l?? do kh??m");
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
      {/* C???nh b??o ng?????i d??ng */}
      <div>
        <div className="alert alert-success mt-4">
          <h6>
            <small>
              C??c tr?????ng ????nh d???u * l?? c??c tr?????ng b???t bu???c nh???p. Th??ng tin b???nh
              nh??n, th??ng tin kh??m c???n ch??nh x??c
            </small>
          </h6>
        </div>
      </div>

      {/* content */}
      <div className="mt-4 mb-4">
        <div className="text-center p-2">TH??NG TIN ????NG K?? KH??M</div>

        {/* lo???i d???ch v??? */}
        <div>
          Lo???i d???ch v???<span>*</span>
        </div>
        <div className="mb-4 container">
          <LoaiDichVu />
        </div>

        {/* d???ch v??? kh??m, ng??y ????ng k?? kh??m */}
        <div className="d-flex">
          <div className="w-50 mr-1">
            <div>
              D???ch v??? kh??m<span>*</span>
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
              Ng??y ????ng k?? kh??m<span>*</span>
            </div>
            <input
              type="date"
              value={valueDate}
              onChange={(e) => setValueDate(e.target.value)}
              className="p-2 w-100 border border-2"
            />
          </div>
        </div>

        {/* Th???i gian ????ng k?? kh??m, m?? s??? b???nh nh??n */}
        <div className="mt-4">
          <div className="d-flex">
            <div className="w-50 mr-1">
              <div>
                Th???i gian ????ng k?? kh??m <span>*</span>
              </div>
              <button className="p-2 w-100 bg-white divDichVu">
                Ch???n ng??y ????ng k?? kh??m
              </button>
              {isValid &&
                (isValid === "invalid" ? (
                  <label className="bg-danger text-white text-center w-100 labelTextNo">
                    Ch??a c?? l???ch kh??m v??o ng??y ???? ch???n
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
                M?? s??? b???nh nh??n <span>*</span>
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

        {/* M?? t??? */}
        <div className="mt-4">
          <div>
            M?? t??? <span>*</span>
          </div>
          <textarea
            name="mota"
            value={inputs.mota || ""}
            onChange={handleChangeDescribe}
            className="w-100 border border-2"
            rows="4"
            placeholder="Nh???p tri???u ch???ng, l?? do kh??m"
          ></textarea>
        </div>

        {/* ????nh k??m t??i li???u, ti???p theo */}
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
                    {valueFile !== "" ? valueFile : "????nh k??m t??i li???u"}
                  </span>
                </label>
              </td>

              <td className="w-50 p-1">
                <input
                  type="button"
                  onClick={nextClick}
                  className="p-3 w-100 h-100 border border-1 rounded service haha text-white textdangky"
                  value="Ti???p theo"
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
