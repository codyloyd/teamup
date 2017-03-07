import React from 'react'

export default ({name, description}) => (
  <div className="role-details box">
    <p className="title is-2 role-name">{name}</p>
    <p className="role-description">{description}</p>
  </div>
)
