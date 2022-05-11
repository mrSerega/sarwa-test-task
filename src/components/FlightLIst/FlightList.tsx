import { FC } from 'react'

import { FlightItem } from '../FlightItem'

import { FlightListProps } from "./types";

export const FlightList: FC<FlightListProps> = ({list}) => (<div>{list.map(item => <FlightItem key={item.uuid} {...item}/>)}</div>)