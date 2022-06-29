import React from 'react'
import "./Style/Style.css"
import { Bar } from 'react-chartjs-2'

const BarChart=()=>{
       const data=[5, 10, 9, 4,15,10]
       var total=0;
       const constRender=data.map((item)=>{
          total=total+item
       })
       
    return(
        <>
        <div className="sales">
        <div className="Sales_num">
            <div className='capital'>
            { ` $ ${total*100}`}
            </div>
            <div className="sales_increase">
                2.6%<i class="fa fa-arrow-up"></i>
            </div>
     
      </div>
      <div className='Avg_daily'>
        Average Daily Sales
      </div>
        </div>
        
        
         <div className='bar'>
            <Bar
          
          data={{
            labels: ['Apr4', 'Apr5', 'Apr6', 'Apr7', 'Apr8','Apr9','Apr10'],
            datasets: [{
              
                data: data,
                borderColor:"#32a8a4",
                backgroundColor:"#a10cf7"
              
            }]

          }}
          height={400}
          width={50}
    
          options={{
            layout: {
                padding:{
                    right:1,
                }
            },
           
            maintainAspectRatio:false,
            plugins:{
              legend:{
                display:false
            },
            },
          
            scales: {
                x:{
                    ticks:false,
           grid:{
            display:false,
            
            
           }
                },
                y: {
                ticks:{
                    display:false,
                },
              
                grid:{
                drawBorder:false,
                display:false,},
                
                
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
                bar:{
                    borderRadius:10,  
                    
                }
                
                
        
            }
          }}
        />
        </div>
        </>
       
    )
}

export default BarChart