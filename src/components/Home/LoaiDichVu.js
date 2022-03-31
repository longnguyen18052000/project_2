import '../../App.css';
import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

function LoaiDichVu() {
    const {valueButton, setValueButton} = useContext(GlobalContext);
    
    const btnCoPhi = () =>{
        setValueButton("cost")
    };

    const btnMienPhi = () => {
        setValueButton("free")
    };
    
    return (
        <div className="row divDichVu">
            <button className = {(valueButton && valueButton === "cost") ? "col-6 p-2 border border-0 active" : "col-6 p-2 border border-0 bg-white"} onClick={btnCoPhi} >Dịch vụ có thu phí</button>
            <button className = {(valueButton && valueButton === "free") ? "col-6 p-2 border border-0 active" : "col-6 p-2 border border-0 bg-white"} onClick={btnMienPhi}>Tư vấn miễn phí</button>
        </div>
    );
}
export default LoaiDichVu;