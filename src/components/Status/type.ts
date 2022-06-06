import { AccountStatus } from "../../types"

export type StatusProps = {
  balance: number
  status: AccountStatus
  onChange: (status: AccountStatus) => void;
}