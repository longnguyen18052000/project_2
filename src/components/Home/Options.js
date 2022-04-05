import React, { useContext } from "react";
import { optionCoPhi, optionMienPhi } from "./Data.js";
import { GlobalContext } from "../../context/GlobalState.js";

const Options = () => {
  const { valueButton } = useContext(GlobalContext);
  return (
    <>
      <option>Chọn dịch vụ khám</option>
      {valueButton &&
        (valueButton === "cost"
          ? optionCoPhi.map((item, key) => (
              <optgroup label={item.name} key={key}>
                {item.content.map((value, key) => {
                  const { name, cost, id } = value;
                  return (
                    <option value={id} key={key}>
                      {name.concat(" " + cost + "đ")}
                    </option>
                  );
                })}
              </optgroup>
            ))
          : optionMienPhi.map((item, key) => (
              <optgroup label={item.name} key={key}>
                {item.content.map((value, key) => {
                  const { name, cost, id } = value;
                  return (
                    <option value={id} key={key}>
                      {name}
                    </option>
                  );
                })}
              </optgroup>
            )))}
    </>
  );
};
export default Options;
