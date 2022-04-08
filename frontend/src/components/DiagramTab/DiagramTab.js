import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Chart from '../Chart';
import Table from '../Table'
import "../../sass/main.css"
import {getAllStatistics, isLoading, error } from '../../redux/statistics/statisticsSelectors';
import getStatistics from '../../redux/statistics/statisticsOperation';

function DiagramTab(){
    // const [data,setData] = useState([])
    // const statistics = useSelector(getAllStatistics)
    // const loading = useSelector(isLoading)
    // const errorStat = useSelector(error)
    // console.log(statistics);
    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(getStatistics())
    //     // setData(dispatch(getStatistics()))
    // },[])
    return(
        <div className='diagram'>
            <p className='title'>Статистика</p>
                <div className='diagramTab'>
                    <Chart/>
                    <Table/> 
                </div>              
        </div>
    )
}

export default DiagramTab;