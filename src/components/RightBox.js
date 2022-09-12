import React, { useState } from 'react'
import '../assets/css/RightBox.css'

import BarChart from './BarChart'
import {UserData} from './Data'
import Header from './Header'
import LineChart from './LineChart'
import PieChart from './PieChart'
export default function RightBox() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            labels: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            
        },]
    })
  return (
    <div className='right'>
        <Header /> 
        <div id='dash'>
            <div id='graph'>
                <div className='home'>
                    <div className='boxing'>
                        <div>
                            <div className='portion-heading'>Sub Brands</div>
                            <div className='portion-number'>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                    <div className='boxing'>
                        <div>
                            <div className='portion-heading'>Points Issued</div>
                            <div className='portion-number'>
                                <span>0 pts</span>
                            </div>
                        </div>
                    </div>
                    <div className='boxing'>
                        <div>
                            <div className='portion-heading'>Audience</div>
                            <div className='portion-number'>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bar'>
                    <BarChart chartData={userData}/>
                </div>
                <div className='line-graph'>
                    <LineChart chartData={userData}/>
                </div>
                <div className='pie-graph'>
                    <PieChart chartData={userData}/>
                </div>
                {/*<div className='revenueGraph'>
                    <div className='subtitle'>
                        <div className='subtitle-2'>
                            <div className='total-revenue'>Total Revenue</div>
                            <div className='total-revenue-number'>
                                "$"
                                "0"
                            </div>
                        </div>
                    </div>
                    <img className='graphImage' src={revenueGraph}></img>
                    <div className='absoluteMiddle'>
                        <div className='text'>No Revenue Generated</div>
                        <div className='para'>When you start recording financial detail. It'll show up here</div>
                    </div>
                </div>
                <div className='pointGraph'>
                    <div className='subtitle'>
                        <div className='subtitle-2'>
                            <div className='total-revenue'>Total Points</div>
                            <div className='total-revenue-number'>
                                "0"
                                "pts"
                            </div>
                        </div>
                    </div>
                    <img className='graphImage' src={revenueGraph}></img>
                    <div className='absoluteMiddle'>
                        <div className='text'>No Points Available</div>
                        <div className='para'>When you add customers.It'll show up here</div>
                    </div>
                </div>
                <div className='memberGraph'>
                    <div className='subtitle'>
                        <div className='subtitle-2'>
                            <div className='total-revenue'>Total Audience</div>
                            <div className='total-revenue-number'>
                                0
                            </div>
                        </div>
                    </div>
                    <img className='graphImage' src={revenueGraph}></img>
                    <div className='absoluteMiddle'>
                        <div className='text'>No Member Available</div>
                        <div className='para'>When you give points to customer.It'll show up here</div>
                    </div>
  </div> */}
            </div>
        </div>   
    </div>
    
   
  )
}
