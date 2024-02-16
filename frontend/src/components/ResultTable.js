import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { restable } from '../helper/helper'

export default function ResultTable() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`).then(data=> setData(data.data)).catch(err=>console.log(err));
    })
    
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>S.No</td>
                    <td>Name</td>
                    <td>Total Points</td>
                    <td>Earned Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{i+1}</td>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 100}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}
