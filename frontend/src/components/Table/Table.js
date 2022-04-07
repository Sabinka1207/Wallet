import React from "react";
import "../../sass/main.css"

function Table (){
    return(
        <div className="chart__table">
        <select name="user_profile_color_1" className="select" >
            <option value="Январь" className="text" >Январь</option>
            <option value="Февраль" className="text" >Февраль</option>
            <option value="Март" className="text" >Март</option>
            <option value="Апрель" className="text" >Апрель</option>
            <option value="Май" className="text" >Май</option>
            <option value="Июнь" className="text" >Июнь</option>
        </select>
        <select name="user_profile_color_1" className="select">
            <option value="2021" className="text">2021</option>
            <option value="2022" className="text">2022</option>
            <option value="2023" className="text">2023</option>            
        </select>
        <table className="chart__table">
            <thead className="table__head">
            <tr>
                <th>Категория</th>
                <th>Сумма</th>
            </tr>
            </thead>
            <tr>
                <td>Основные расходы</td>
                <td>14523</td>
                
            </tr>
            <tr>
                <td>Основные расходы</td>
                <td>87000</td>
                
            </tr>
            <tr>
                <td>Основные расходы</td>
                <td>20001</td>
            </tr>
            <tr>
                <td>Основные расходы</td>
                <td>4555</td>
                
            </tr>
            <tr>
                <td>Основные расходы</td>
                <td>6000</td>
            </tr>
            <tr>
                <td>Продукты</td>
                <td>450</td>
                
            </tr>
        </table>
        <p className="total__text">Расходы: <span>22 549.24</span></p>
        <p className="total__text">Доходы:: <span>27 350.00</span></p>

        </div>
    )
}

export default Table;