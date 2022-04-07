import React from "react";
import "../../sass/main.css"

function Table (){
    return(
        <>
        <select name="user_profile_color_1" style={{borderRadius: "30px", padding: "12px 20px", width: "182px"}}>
            <option value="Январь" className="Text" >Январь</option>
            <option value="Февраль" className="Text" >Февраль</option>
            <option value="Март" className="Text" >Март</option>
            <option value="Апрель" className="Text" >Апрель</option>
            <option value="Май" className="Text" >Май</option>
            <option value="Июнь" className="Text" >Июнь</option>
        </select>
        <select name="user_profile_color_1" style={{borderRadius: "30px", padding: "12px 20px", width: "182px"}}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>            
        </select>
        <table>
            <tr>
                <th>Категория</th>
                <th>Сумма</th>
            </tr>
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
        <p>Расходы: <span>22 549.24</span></p>
        <p>Доходы:: <span>27 350.00</span></p>

        </>
    )
}

export default Table;