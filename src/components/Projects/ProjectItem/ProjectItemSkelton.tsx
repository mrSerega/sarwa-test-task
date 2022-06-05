import { FC } from 'react'

import './ProjectItemSkeleton.css'

const className = 'project-item-skeleton'

export const ProjectItemSkeleton: FC = () => {
  return <div className={className}>
    <div className={className + '__upper'}>
      <div className={className + '__cover'}/>
    </div>
    <div className={className + 'lower'}>
      <div className={className + '__client-name'} />
      <div className={className + '__title'} />
      <div className={className + '__case-link'} />
    </div>
  </div>
}