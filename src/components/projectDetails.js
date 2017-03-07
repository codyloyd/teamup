import React from 'react'
import TagList from './tagList'

export default ({title, summary, description, tags}) => {
  return (
    <div className="box">
      <p className="title is-1 project-title">{title}</p>
      <p className="subtitle is-3 project-summary">{summary}</p>
      <p className="project-description">{description}</p>
      <TagList tags={tags} />
    </div>
  )
}
