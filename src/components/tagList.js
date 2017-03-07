import React from 'react'

export default ({tags}) => {
  return (
    <div>
      <div className="heading"></div>
      <div className="level">
        <div className="tag-list level-left">
          {tags.map(tag => <span key={tag} className="tag level-item is-primary">{tag}</span>)}
        </div>
      </div>
    </div>
  )
}
