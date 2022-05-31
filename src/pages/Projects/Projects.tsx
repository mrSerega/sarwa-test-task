import { FC, useCallback, useMemo, useState } from "react";
import {
  useSearchParams,
  createSearchParams
} from "react-router-dom";

import { Checkbox, ProjectGrid, Select } from "../../components";
import { useGetProjects } from '../../hooks';
import { ProjectIndustry } from "../../types";

export const Projects: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const industries = useMemo(() => 
    searchParams.getAll('industries')
  , [searchParams])

  const { isLoading, data } = useGetProjects({
    industries
  })

  const [grouping, setGrouping] = useState(false)


  const groupedData = useMemo(() => 
    (grouping 
      ? [...(data || [])]?.sort((a,b) => a.category > b.category ? 1 : -1) 
      : data
    ) || [], 
  [grouping, data])


  const handleChangeIndustries = useCallback((values: string[]) => {
    setSearchParams(createSearchParams({
      industries: values,
    }))
  }, [setSearchParams])

  return (
    <div>
      <Select initialValue={industries} onChange={handleChangeIndustries} options={Object.keys(ProjectIndustry)}/>
      <Checkbox value={grouping} label='group by category' onChange={setGrouping}/>
      {isLoading ? <>'Loading...'</> : <ProjectGrid list={groupedData} />}
    </div>
  );
}
