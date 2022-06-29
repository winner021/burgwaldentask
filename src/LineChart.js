import React from 'react'
import "./Style/Style.css"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);


const LineChart=()=>{
   const data=[18, 20, 20, 18,21,21,19,19,17,17,19,19,17,17,19,19,21]
   var total=0;
   const constRender=data.map((item)=>{
      total=total+item
   })
    return(
      <>
      <div className="card">
      <div className="About">
      <div className="sales">
        Sales This Month
      </div>
      <div className="user">
        Users From All Channels
      </div>
      <div className="cost">
      { ` $ ${total*100}`}
      </div>
      <div className="goal">
     Another $48,346 to Goal
      </div>
      </div>
      <div className="bars">
      <i class="fa fa-ellipsis-h"></i>
      </div>
      </div>
    
      
       <div className='line'>
      
        <Line
          
          data={{
            labels: ['Apr4', 'Apr5', 'Apr6', 'Apr7', 'Apr8','Apr9','Apr10','Apr11','Apr12','Apr13','Apr14','Apr15','Apr16','Apr17','Apr18'],
            datasets: [{
              
                data: data,
                borderColor:"#32a8a4",
                
              
            }]
          }}
          height={400}
          width={50}
          options={{
            maintainAspectRatio:false,
            plugins:{
              legend:{
                display:false
            },
            },
          
            scales: {
                x:{
           grid:{
            display:false,
            
           }
                },
                y: {
                suggestedMin: 11,
                suggestedMax: 24,
                grid:{
                drawBorder:false
 },
                ticks:{
                    stepSize:3.5
                }
                
                }
              },
            elements:{
                line:{
                    tension:0.2,
                },
                point:{
                    radius:0,
                },
                legend: {
                    display: false //This will do the task
                 },
                
                
        
            }
          }}
        />
                </div>
      </>
       
    )
  
}

export default LineChart