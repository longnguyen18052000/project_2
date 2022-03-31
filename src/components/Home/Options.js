import React, {useContext} from "react";
import { optionCoPhi, optionMienPhi } from "./Data.js";
import { GlobalContext } from "../../context/GlobalState.js";


const Options = () => {
  const {valueButton} = useContext(GlobalContext);
  return (
    <>
      <option>Chọn dịch vụ khám</option>
      {
        valueButton && (
          valueButton === "cost" ? optionCoPhi.map((item,key) => (
            <optgroup label={item.name} key={key}>
                {
                item.content.map((value,key) => (
                    <option key={key}>{value}</option>
                ))
            }
            </optgroup>  
          )) : optionMienPhi.map((item,key) => (
            <optgroup label={item.name} key={key}>
                {
                item.content.map((value,key) => (
                    <option key={key}>{value}</option>
                ))
            }
            </optgroup> )) )
      }
    </>
  );
}
export default Options;
