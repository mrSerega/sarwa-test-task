import { useEffect, useState } from "react"
import { Project } from "../../types"

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
  industries,
  categories
}: {
  industries: string[]
  categories: string[]
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
      industry: industries,
      category: categories
    })

    fetch(`/projects?${params.toString()}`)
      .then(async response => {
        const data = await response.json()
        setResp({
          isLoading: false,
          data
        })
      })
  }, [industries, categories])

  return resp
}