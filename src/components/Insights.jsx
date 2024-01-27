import React from 'react'
import { data } from '../utils'

const Insights = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
        {
          data.insights.map(({icon, title, price, percentage, iconColor}, i) => (
            <div key={i}
            className={`${title} bg-white p-7 rounded-[2rem] mt-4 shadow-1 hover:shadow-transparent transition-all duration-300`}
            >
              <div className={`${iconColor} p-2 rounded-[50%] text-white text-[2rem] w-fit`}>
                {icon}</div>
              <div className="flex justify-between items-center">
             <div>
             <h3 className="mt-4 mb-2 capitalize">
                 total {title}</h3>
                <h1>${price}</h1>
             </div>
              <div className="relative w-[92px] h-[92px] rounded-[50%]"> 
                <svg className="w-28 h-28">
                  <circle cx='38' cy='38' r='36'
                  className="fill-none stroke-primary stroke-[14] translate-x-2 translate-y-2 "
                  ></circle>
                </svg>
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <p>{percentage}%</p>
                </div>
              </div>

              </div>
              <small className="text-muted mt-5 block">
                Last 24 Hours 
              </small>
            </div>
          ))
        }
      </div>
  )
}

export default Insights