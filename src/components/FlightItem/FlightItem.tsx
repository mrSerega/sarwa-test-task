import { FC } from "react";

import { Button } from '../Button'

import { FlightItemProps } from "./types";

import './flight.css'

const className = "flight-item"

const getDate = (date: Date) => {
  return `${date.getHours()}:${date.getMinutes()} ${date.getMonth()} ${date.getDay()}`
}

const getDuration = (duration: number) => {
  return `${Math.floor(duration / 60)}h ${duration % 60}m`
}

export const FlightItem: FC<FlightItemProps> = ({companyPicUrl, companyName, fromDate, fromName, toName, toDate, duration, cost}) => (<div className={className}>
  <img src={companyPicUrl} alt={`${companyName} logo`} className={`${className}__logo`}/> 
  
  <div className={`${className}__steps`}>
    <div className={`${className}__name`}>{companyName}</div>
    <div className="path">
      <div className="path__item">
        <div>{getDate(fromDate)}</div>
        <div>{fromName}</div>
      </div>
      <div className="path__item">
        <div>{getDate(toDate)}</div>
        <div>{toName}</div>
      </div>
    </div>
  </div>
    

  <div className="duration">
    <div>Duration</div>
    <div>{getDuration(duration)}</div>
  </div>

  <div className="cost">
    <div>${cost}</div>
    <Button label="View" onClick={() => {}}/>
  </div>

</div>
)