import { Flight } from "../types";

export const dtoToFlight = (data: any): Flight => {
  return {
    uuid: data.uuid, 
    companyPicUrl: 'https://www.fillmurray.com/320/320', // TODO: fix picture access 
    companyName: data.flight.flightSegments[0].airlineName,
    fromDate: new Date(data.flight.flightSegments[0].departureDateAndTime),
    fromName: data.flight.flightSegments[0].departureAirportCode,
    toDate:  new Date(data.flight.flightSegments[data.flight.flightSegments.length-1].arrivalDateAndTime),
    toName: data.flight.flightSegments[data.flight.flightSegments.length-1].arrivalAirportCode,
    duration: data.flight.durationMinutes,
    cost: data.priceInfo.totalPrice 
  }
}