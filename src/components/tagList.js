import React from 'react'

export default ({tags}) => {
  return (
    <div>
      <div className="heading">tags</div>
      <p className="level">
        <div className="tag-list level-left">
          {tags.map(tag => <span className="tag level-item is-primary">{tag}</span>)}
        </div>
      </p>
    </div>
  )
}
