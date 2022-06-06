export type Account = {
  id: string
  balance: number
  status: AccountStatus
}

export enum AccountStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  FUNDED = 'funded',
  CLOSED = 'closed'
}