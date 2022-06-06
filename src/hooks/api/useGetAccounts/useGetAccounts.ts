import { useEffect, useState } from "react"

import {
  createSearchParams
} from "react-router-dom";

import { Account } from "../../../types"
import { mapDtoToAccounts } from "./mapDtoToAccounts"

type UseGetAccounts = ({
  isLoading: true,
  data: null
} | {
  isLoading: false,
  data: Account[]
})

export const useGetAccounts = ({statuses}: {statuses: string[]}): UseGetAccounts & {forceFetch: () => void} => {

  const [forceFetch, setForceFetch] = useState(false)

  const [resp, setResp] = useState<UseGetAccounts>({
    isLoading: true,
    data: null
  })

  useEffect(() => {

    setResp({
      isLoading: true,
      data: null
    })

    const params = createSearchParams({
      status: statuses,
    })

    fetch(`/accounts?${params.toString()}`)
      .then(async response => {
        const data = await response.json()
        console.log(data)
        setResp({
          isLoading: false,
          data: mapDtoToAccounts(data)
        })
      })
  }, [statuses, forceFetch])

  return {
    ...resp,
    forceFetch: () => setForceFetch(!forceFetch)
  }
}