import React from 'react';
import Chart from '../Chart';
import Table from '../Table'
import "../../sass/main.css"

function DiagramTab(){
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