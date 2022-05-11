import { Flight } from '../../types'

export interface FlightItemProps extends Flight {
 onClick?: () => void;
}
