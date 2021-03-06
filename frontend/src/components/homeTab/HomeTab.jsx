import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import  fetchTransactions  from  '../../redux/transactions/transactionsOperations';
import "../../css/main.min.css";

const moment = require('moment');

export default function HomeTab (){

    const dispatch = useDispatch();
    const transactions = useSelector(state => state.transactions.data);

    console.log("data",transactions);

    useEffect(()=>{
        dispatch(fetchTransactions());
    }, [dispatch])  
    
    // const sortTransactions = [...transactions].sort((firstTransaction, nextTransaction ) => {
    //      return (new Date(firstTransaction.date)) - (new Date(nextTransaction.date))
    // })
      
    return ( 
        <div class="test
        ">
            {transactions.length === 0 && <div><span>У вас нет контактов!</span></div>}
            {transactions.length > 0 &&
            <div>
                <table className="tableContainer mobilehidden">
                    <tbody>
                    <tr className="tableHeader">
                        <th className="tabelHeader_item">Дата</th>
                        <th className="tabelHeader_item">Тип</th>
                        <th className="tabelHeader_item">Категория</th>
                        <th className="tabelHeader_item">Комментарий</th>
                        <th className="tabelHeader_item">Сумма</th>
                        <th className="tabelHeader_item">Баланс</th>
                    </tr>
                    
                    {transactions.map(transaction => 
                        <tr className="tableRow_item" key={transaction._id}>
                            <td>{moment(transaction.date).format('DD.MM.YY')}
                            </td>
                            <td>{transaction.income === true && <span>+</span>}
                            {transaction.income === false && <span>-</span>}</td>
                            <td>{transaction.category.nameStatistics}</td>
                            <td>{transaction.comment}</td>
                            <td className={transaction.income ? "transactionIncomeTrue" : "transactionIncomeFalse"}>{transaction.amount}</td>
                            <td>{transaction.currentBalance}</td>
                        </tr>    
                    )}
                        </tbody>
                </table> 
                <ul className="mobyleOnly">
                    {transactions.map(transaction => 
                        <li className={transaction.income ? "transactionCardTrue transactionCard" : "transactionCardTrueFalse transactionCard"} key={transaction._id}>
                            <table className="transactionCardTable" style={{width: '100%'}}>
                                <tbody>
                                    <tr class="transactionCardRaw">
                                        <th className="tabelHeader_item">Дата</th>
                                        <td>{moment(transaction.date).format('DD.MM.YY')}</td>
                                    </tr>
                                    <tr class="transactionCardRaw">
                                        <th className="tabelHeader_item">Тип</th>
                                        <td>{transaction.income === true && <span>+</span>}
                                        {transaction.income === false && <span>-</span>}</td>
                                    </tr>
                                    <tr class="transactionCardRaw">
                                        <th className="tabelHeader_item">Категория</th>
                                        <td>{transaction.category.nameStatistics}</td>
                                    </tr>
                                    <tr class="transactionCardRaw">
                                        <th className="tabelHeader_item">Комментарий</th>
                                        <td>{transaction.comment}</td>
                                    </tr>
                                    <tr class="transactionCardRaw">                        
                                        <th className="tabelHeader_item">Сумма</th>
                                        <td className={transaction.income ? "transactionIncomeTrue" : "transactionIncomeFalse"}>{transaction.amount}</td>
                                    </tr>
                                    <tr >
                                        <th className="tabelHeader_item last-item">Баланс</th>
                                        <td className="last-item">{transaction.currentBalance}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    )}
                </ul>
            </div>
            }
        </div>
    )
}