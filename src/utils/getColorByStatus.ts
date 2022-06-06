import { AccountStatus } from "../types";

export const getColorByStatus = (status: string) => {
  switch(status) {
    case AccountStatus.APPROVED:
      return 'green'
    case AccountStatus.CLOSED:
      return 'red'
    case AccountStatus.FUNDED:
      return 'blue'
    case AccountStatus.PENDING:
    default:
      return 'orange'
  }
}