import React from 'react'

const TagList = ({tags}) => {
  if (tags.length) {
    return (
      <div>
        <div className="heading">Tags</div>
        <div className="tag-list">
          <div className="control is-grouped">
            {tags.map(tag => (
              <span key={tag} className="tag control level-item is-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return <div className="tag-list" />
}

TagList.propTypes = {
  tags: React.PropTypes.array.isRequired
}

export default TagList
