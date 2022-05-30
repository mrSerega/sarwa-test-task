import { FC } from "react";
import { ProjectItem } from "../ProjectItem";

import { ProjectGridProps } from "./types";

import './ProjectGrid.css'

const className = 'project-grid'

export const ProjectGrid: FC<ProjectGridProps> = ({ list }) => {
  return <div className={className}>
    {list.map(project => <ProjectItem {...project} key={project.title}/> )}
  </div>
}