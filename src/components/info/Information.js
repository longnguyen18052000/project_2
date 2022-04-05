import "../../index.css";
import SelectInfo from "./SelectInfo";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import { GlobalContext } from "../../context/GlobalState";

const Information = () => {
  const navigate = useNavigate();
  const { infoInput, setInfoInput } = useContext(GlobalContext);

  const handleChangeInfo = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfoInput((values) => ({ ...values, [name]: value }));
  };
  const handleClickBack = () => {
    navigate("/");
  };
  // const handleChangeName = (event) => {
  //     const valid = event.target.value;
  // }
  const infoClick = (event) => {
    event.preventDefault();
    if (infoInput.username === "") {
      alert("Vui lòng nhập họ và tên");
    } else if (infoInput.yearInfo === "") {
      alert("Vui lòng nhập ngày sinh");
    } else if (infoInput.phoneInfo === "") {
      alert("Vui lòng nhập số điện thoại");
    } else if (infoInput.address === "") {
      alert("Vui lòng nhập địa chỉ");
    }
    if (
      infoInput.username !== "" &&
      infoInput.yearInfo !== "" &&
      infoInput.phoneInfo !== "" &&
      infoInput.address !== ""
    ) {
      navigate("/dataInformation");
    }
  };

  return (
    <>
      <Header />
      <div className="w-50 container border border-2">
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
        {/* <!-- thông tin bệnh nhâ --> */}
        <div className="text-center p-2">THÔNG TIN BỆNH NHÂN</div>

        {/* <!-- họ và tên, ngày sinh --> */}
        <div className="mt-4 mb-4 d-flex">
          <div className="w-50 mr-1">
            <div>
              Họ và tên<span>*</span>
            </div>
            <div className="w-100">
              <input
                name="username"
                value={infoInput.username || ""}
                onChange={handleChangeInfo}
                type="text"
                className="w-100 p-2 h-100 border border-2 rounded"
                placeholder="Nhập họ và tên"
              />
            </div>
          </div>
          <div className="w-50 ml-1">
            <div>
              Ngày sinh<span>*</span>
            </div>
            <div className="w-100">
              <input
                name="yearInfo"
                value={infoInput.yearInfo || ""}
                onChange={handleChangeInfo}
                type="date"
                className="w-100 p-2 h-100 border border-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* <!-- số điện thoại, giới tính --> */}
        <div>
          <div className="row">
            <div className="col-6">
              Số điện thoại<span>*</span>
            </div>
            <div className="col-6">
              Giới tính<span>*</span>
            </div>
          </div>
          <div className="d-flex">
            <div className="w-50 mr-1">
              <input
                name="phoneInfo"
                value={infoInput.phoneInfo || ""}
                onChange={handleChangeInfo}
                type="text"
                placeholder="Nhập số điện thoại"
                className="p-2 w-100 border border-2 rounded"
              />
            </div>
            <div className="w-50 ml-1">
              <SelectInfo />
            </div>
          </div>
        </div>

        {/* <!-- địa chỉ --> */}
        <div className="d-flex flex-column mt-4">
          <div>
            Địa chỉ<span>*</span>
          </div>
          <input
            name="address"
            value={infoInput.address || ""}
            onChange={handleChangeInfo}
            type="text"
            className="rounded p-2 border border-2"
            placeholder="Nhập địa chỉ"
          />
        </div>

        {/* <!-- quay lại , đăng ký khám --> */}
        <div className="mt-4 d-flex justify-content-center mb-4">
          <table className="w-50">
            <tr className="w-100">
              <td className="w-50 p-2">
                <input
                  type="button"
                  onClick={handleClickBack}
                  className="p-3 w-100 bg-white border border-1 rounded"
                  value="Quay lại"
                />
              </td>
              <td className="w-50 p-2">
                <input
                  type="button"
                  onClick={infoClick}
                  className="p-3 w-100 border border-1 rounded haha text-white textdangky"
                  value="Đăng ký
                            khám"
                />
              </td>
            </tr>
          </table>
        </div>
        {/* <!-- hết --> */}
      </div>
    </>
  );
};

export default Information;
