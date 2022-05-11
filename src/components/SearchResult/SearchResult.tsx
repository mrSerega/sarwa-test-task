import  { FC, useEffect, useState } from 'react'

import { Flight } from '../../types'
import { dtoToFlight } from '../../utils/flightMapper'
import { FlightList } from '../FlightLIst/FlightList'

import './search.css'

const getCompanyList = (flight: Flight[]) => {
  const set = new Set<string>()
  flight.forEach(flight => set.add(flight.companyName))
  return Array.from(set)
}



export const SearchResult: FC = () => {
  const [flights, setFlights] = useState<Flight[]>([])
  const [companyList, setCompanyList] = useState<string[]>([])
  const [filters, setFilter] = useState<string[]>([])


  useEffect(() => {
    const request = async () => {
      const data = await fetch('./flights.json')
      const jsonData = await data.json()
      const flights = jsonData.flights.map(dtoToFlight)
      setFlights(flights)
      setCompanyList(getCompanyList(flights))
      console.log('FETCH!')
    }
    
    request()
  }, [])

  // console.log(flights)

  return <div className='search'>
    <div className='filter'>
      Airlines
      {
        companyList.map(item => <div>
          <input type="checkbox" checked={filters.includes(item)} onChange={evt => {
            if(!filters.includes(item)) {
              setFilter([...filters, item])
            } else {
              setFilter(filters.filter(filterItem => filterItem !== item))
            }
          }}/>{item}
        </div>)
      }
    </div>
    <FlightList list={filters.length === 0 ? 
      flights : 
      flights.filter(item => filters.includes(item.companyName))} />
  </div>
}