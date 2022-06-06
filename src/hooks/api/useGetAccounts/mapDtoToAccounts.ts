import { Account, AccountStatus } from "../../../types";
import { toNumber, toEnum, toArray, toString } from "../../../utils/mappers";

export const mapDtoToAccounts  = (accounts: any): Account[] => toArray(accounts).map(mapDtoToAccount)

const mapDtoToAccount = (account: any): Account => ({
  id: toString(account?.id),
  balance: toNumber(account?.balance),
  status: toEnum<AccountStatus>(account?.status, AccountStatus)
})