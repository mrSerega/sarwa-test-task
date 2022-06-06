import { useEffect, useState } from "react"
import { AccountStatus } from "../../../types"

type Body = {
  id: string,
  status: AccountStatus
}

type UseUpdateAccount = {
  isLoading: boolean,
  updateAccount: (body: Body) => void
}

export const useUpdateAccount = (): UseUpdateAccount  => {
  const [isLoading, setIsLoading] = useState(false)
  const [body, setBody] = useState<Body| null>(null)

  useEffect(() => {
    setIsLoading(true)

    fetch('/account', {
      method: 'POST',
      body: JSON.stringify(body)
    }).then(async _response => {
      setIsLoading(false)
    })
  }, [body])

  return {
    isLoading,
    updateAccount: setBody
  }
}