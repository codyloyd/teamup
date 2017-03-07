import React from 'react'

const TagList = ({tags}) => {
  if (tags.length) {
    return (
      <div>
        <div className="heading">Tags</div>
        <div className="level">
          <div className="tag-list level-left">
            {tags.map(tag => <span key={tag} className="tag level-item is-primary">{tag}</span>)}
          </div>
        </div>
      </div>
    )
  }
  return <div className="tag-list"></div>
}

TagList.propTypes = {
  tags: React.PropTypes.array.isRequired
}

export default TagList
