import { useEffect, useState } from "react"
import { Project } from "../types"

import {
  createSearchParams
} from "react-router-dom";

type UseGetProjects = {
  isLoading: true,
  data: null
} | {
  isLoading: false,
  data: Project[]
}

export const useGetProjects = ({
  industries
}: {
  industries: string[]
}): UseGetProjects => {
  const [resp, setResp] = useState<UseGetProjects>({
    isLoading: true,
    data: null
  })

  useEffect(() => {

    setResp({
      isLoading: true,
      data: null
    })

    const params = createSearchParams({
      industries
    })

    fetch(`/projects?${params.toString()}`)
      .then(async response => {
        const data = await response.json()
        setResp({
          isLoading: false,
          data
        })
      })
  }, [industries])

  return resp
}