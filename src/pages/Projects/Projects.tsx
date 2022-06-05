import { FC, useCallback, useMemo } from "react";
import {
  useSearchParams,
  createSearchParams
} from "react-router-dom";

import { ProjectGrid, Select, Button, QuestionForm, ProjectGridSkeleton } from "../../components";
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
    industries,
    categories
  })

  const handleChangeIndustries = useCallback((values: string[]) => {
    setSearchParams(createSearchParams({
      industry: values,
      category: categories
    }))
  }, [setSearchParams, categories])

  const handleChangeCategories = useCallback((values: string[]) => {
    setSearchParams(createSearchParams({
      category: values,
      industry: industries
    }))
  }, [setSearchParams, industries])

  return (
    <div>
      <div className={className + '__upper'}>
        <div className={className + '__work'}>WORK</div>
        <div className={className + '__view-case'}>
          <Button label="VIEW CASE" onClick={() => console.log('VIEW CASE CLICK!')} size="large" />
        </div>
      </div>
      <div className={className + '__lower'}>
        <div className={className + '__lower-content'}>
          <div className={className + '__options'}>
            <Select 
              label="in"
              defaultValue={industries} 
              onChange={handleChangeIndustries}
              options={Object.keys(ProjectIndustry)} 
              emptyLabel="all industries"
            />
            <div className={className + '__toggle'}>
              <Select 
                label="Show me"
                defaultValue={categories} 
                onChange={handleChangeCategories}
                options={Object.keys(ProjectCategory)} 
                emptyLabel="all work"
              />
            </div>
          </div>
          
          {isLoading ? 
            <ProjectGridSkeleton /> : 
            <ProjectGrid list={data} />
          }
        </div>
      </div>
      <div className={className + '__clients'}>
        <div className={className + '__clients-title'}>
          CLIENTS
        </div>
        <div className={className + '__clients-text'}>
          We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
        </div>
      </div>
      <QuestionForm />
    </div>
  );
}
