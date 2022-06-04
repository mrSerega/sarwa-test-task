import { FC, useCallback, useMemo, useState } from "react";
import {
  useSearchParams,
  createSearchParams
} from "react-router-dom";

import { ProjectGrid, Select, Button } from "../../components";
import { useGetProjects } from '../../hooks';
import { ProjectCategory, ProjectIndustry } from "../../types";

import './Projects.css'

const className = 'projects'

export const Projects: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [industries, categories] = useMemo(() => 
    [searchParams.getAll('industry'), searchParams.getAll('category')]
  , [searchParams])

  const { isLoading, data } = useGetProjects({
    industries
  })

  const handleChangeIndustries = useCallback((values: string[]) => {
    setSearchParams(createSearchParams({
      industry: values,
    }))
  }, [setSearchParams])

  const handleChangeCategories = useCallback((values: string[]) => {
    setSearchParams(createSearchParams({
      category: values,
    }))
  }, [setSearchParams])

  return (
    <div>
      <div className={className + '__upper'}>
        <div className={className + '__work'}>WORK</div>
        <div className={className + '__view-case'}>
          <Button label="VIEW CASE" onClick={() => console.log('VIEW CASE CLICK!')} size="large" />
        </div>
      </div>
      <div className={className + '__options'}>
        <Select 
          defaultValue={industries} 
          onChange={handleChangeIndustries}
          options={Object.keys(ProjectIndustry)} 
          emptyLabel="all industries"
        />
        <div className={className + '__toggle'}>
          <Select 
          
            defaultValue={categories} 
            onChange={handleChangeCategories}
            options={Object.keys(ProjectCategory)} 
            emptyLabel="all work"
          />
        </div>
      </div>
      {isLoading ? <>'Loading...'</> : <ProjectGrid list={data} />}
    </div>
  );
}
