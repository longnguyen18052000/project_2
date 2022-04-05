import "../../index.css";
import tichxanh from "../img/tichxanh.png";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const DataInformation = () => {
  const navigate = useNavigate();
  const { valueButton, inputs, infoInput, setInputs, setInfoInput } =
    useContext(GlobalContext);
  const handleClick = () => {
    navigate("/");
    setInputs({
      selectService: "",
      date: "",
      time: "",
      codeNumber: "",
      mota: "",
      cost: 0,
    });
    setInfoInput({
      username: "",
      yearInfo: "",
      phoneInfo: "",
      sex: "",
      address: "",
    });
  };
  return (
    <>
      <Header />
      <div className="w-50 border border-2 mb-4 mx-auto">
        <div className="text-center pb-5 mt-5">
          <img
            className="mb-5"
            src={tichxanh}
            style={{ width: "75px" }}
            alt="tích thành công"
          />
          <p>Đăng ký khám thành công</p>
          <p>Vui lòng nộp phí khám: {inputs.cost} đ</p>
          <p>
            Loại dịch vụ:{" "}
            {valueButton === "cost" ? "Dịch vụ có thu phí" : "Tư vấn miễn phí"}
          </p>
          <p>Dịch vụ khám: {inputs.selectService}</p>
          <p>Ngày đăng ký khám: {inputs.date}</p>
          <p>
            Thời gian đăng ký khám:
            {inputs.time}
          </p>
          <p>Mã số bệnh nhân: {inputs.codeNumber}</p>
          <p>Triệu chứng, lý do khám: {inputs.mota} </p>
          <p>Họ và tên: {infoInput.username}</p>
          <p>Ngày sinh: {infoInput.yearInfo}</p>
          <p>Số Điện thoại: {infoInput.phoneInfo}</p>
          <p>Giới tính: {infoInput.sex}</p>
          <p>Địa chỉ: {infoInput.address}</p>
          <p className="mt-4">
            <h6>
              <small>
                Bộ phận hỗ trợ sẽ liên lạc để xác nhận thông tin đăng ký trong
                24h
              </small>
            </h6>
          </p>
          <p>
            <h6>
              <small>
                Mọi thắc mắc vui lòng liên hệ số điện thoại để được hỗ trợ sử lý
              </small>
            </h6>
          </p>
          <input
            type="button"
            className="mt-4 text-white p-1 border border-0 rounded data"
            value="quay về trang chủ"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default DataInformation;
