import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { height } from "@mui/system"
import { head } from "lodash"
import { FC, useCallback, useMemo } from "react"

import {
  useSearchParams,
  createSearchParams
} from "react-router-dom"

import { Select, Status } from "../../components"
import { useGetAccounts, useUpdateAccount } from "../../hooks"
import { AccountStatus } from "../../types"

import { getColorByStatus } from "../../utils/getColorByStatus"

export const Accounts: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const statuses = useMemo(() => searchParams.getAll('status'), [searchParams])

  const { isLoading: areAccountLoading, data, forceFetch } = useGetAccounts({statuses})
  const { updateAccount } = useUpdateAccount()

  const totalBalance = useMemo(
    () => 
      (data ?? [])
        .reduce(
          (acc, val) => acc + val.balance, 0
        ),
    [data]
  )

  const totalStatuses = useMemo(
    () => (data ?? [])
      .reduce(
        (acc: {[index: string]: number}, val) => {
            acc[val.status] = (acc[val.status] ?? 0) + 1;
            return acc
        }, {}
      ),
    [data]
  )

  const handleChangeStatus = useCallback(
    (status: string[]) => 
      setSearchParams(createSearchParams({status}))
  , [setSearchParams])

  const handleChangeAccountStatus = useCallback((status: AccountStatus, id: string) => {
    if (status) {
      updateAccount({
        id,
        status 
      })
      forceFetch()
    }
  }, [updateAccount, forceFetch])


  return (
    <div style={{ padding: 36 }}>
      {areAccountLoading ? 'Loading...' : <Table>
        <colgroup>
          <col style={{width:'20%'}}/>
          <col style={{width:'80%'}}/>
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexDirection: 'column',
                  height: 70
                }}
              >
                <b>Balance</b><br/>
                Total: {totalBalance}
              </div>
            </TableCell>
            <TableCell style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{
                height: 70
              }}>
                <b>Status:&nbsp;</b>
                <span>
                  {Object.entries(totalStatuses)
                    .map(([key, value]) => 
                      <span style={{ color: getColorByStatus(key)}}>{`${key}(${value}) `}</span>
                    )}
                </span><br/>
                <Select
                  defaultValue={statuses}
                  onChange={handleChangeStatus}
                  options={Object.values(AccountStatus)}
                  emptyLabel="all statuses"
                />
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow
              key={row.id}
            >
              <TableCell>{row.balance}</TableCell>
              <TableCell>
                <Status status={row.status} balance={row.balance} onChange={status => handleChangeAccountStatus(status, row.id)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>}
    </div>
  );
}


