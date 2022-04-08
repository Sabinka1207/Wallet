import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTransactions } from  '../../redux/transactions/transactions-operations';
// import style from './HomeTab.module.css';
const moment = require('moment');



export default function HomeTab (){

    const dispatch = useDispatch();
    const transactions = useSelector(state => state.transactions);

    useEffect(()=>{
        dispatch(fetchTransactions());
    }, [dispatch])  
    
    // const sortTransactions = [...transactions].sort((firstTransaction, nextTransaction ) => {
    //      return (new Date(firstTransaction.date)) - (new Date(nextTransaction.date))
    // })
      
    return ( 
        <div>
            {transactions.length === 0 && <div><span>У вас нет контактов!</span></div>}
            {transactions.length > 0 &&
                <table>
                    <tbody>
                    <tr>
                        <th>Дата</th>
                        <th>Тип</th>
                        <th>Категория</th>
                        <th>Комментарий</th>
                        <th>Сумма</th>
                        <th>Баланс</th>
                    </tr>
                    
                    {transactions.map(transaction => 
                        <tr key={transaction._id}>
                            <td>{moment(transaction.date).format('DD. MM. YYYY')}
                            </td>
                            <td>{transaction.income === true && <span>+</span>}
                            {transaction.income === false && <span>-</span>}</td>
                            <td>{transaction.category.nameStatistics}</td>
                            <td>{transaction.comment}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.currentBalance}</td>
                        </tr>    
                    )}
                        </tbody>
                </table> 
            }
        </div>
    )
}