import { FC } from "react";
import { ProjectItemSkeleton } from "../ProjectItem";

import './ProjectGridSkeleton.css'

const className = 'project-grid-skeleton'

export const ProjectGridSkeleton: FC = () => {
  return <div className={className}>
    {[0,1,2,3].map(index => <ProjectItemSkeleton key={index}/> )}
  </div>
}