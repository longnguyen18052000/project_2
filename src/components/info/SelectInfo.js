import dataInfo from "./DataInfo";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";

const SelectInfo = () => {
  const { setInfoInput } = useContext(GlobalContext);

  const handleChange = (e) => {
    let value = e.target.value;
    setInfoInput((values) => ({ ...values, sex: value }));
  };
  return (
    <select
      onChange={handleChange}
      className="p-2 w-100 border border-2 rounded"
    >
      <option value="">Chọn giới tính</option>
      {dataInfo.map((item, key) => {
        return (
          <option value={item.name} key={key}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};
export default SelectInfo;
