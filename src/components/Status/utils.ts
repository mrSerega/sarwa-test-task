import { AccountStatus } from "../../types";

export const getAvailableStatuses = (status: AccountStatus, balance: number): AccountStatus[] => {
  switch(status) {
    case AccountStatus.PENDING:
      return [AccountStatus.APPROVED, AccountStatus.CLOSED]
    case AccountStatus.APPROVED:
      return [AccountStatus.FUNDED, AccountStatus.CLOSED]
    case AccountStatus.FUNDED:
      if (balance === 0) {
        return [AccountStatus.CLOSED]
      }
      return []
    case AccountStatus.CLOSED:
      return []
  }
}