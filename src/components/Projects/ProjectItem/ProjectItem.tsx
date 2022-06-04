import { FC } from 'react'

import { ProjectItemProps } from './types'

import './ProjectItem.css'

const className = 'project-item'

export const ProjectItem: FC<ProjectItemProps> = ({coverImage, clientName, title, projectUrl}) => {
  return <div className={className}>
    <div className={className + '__upper'}>
      <div style={{backgroundImage: `url(${coverImage})`}} aria-label='project cover' className={className + '__cover'}/>
    </div>
    <div className={className + 'lower'}>
      <div className={className + '__client-name'}>{clientName}</div>
      <div className={className + '__title'}>{title}</div>
      <a href={projectUrl} className={className + '__case-link'}>VIEW CASE</a>
    </div>
  </div>
}