import React from 'react'

export default ({roles}) => (
  <div className="section">
    {roles.map(role => (
      <div className="roles-list-role"></div>
    ))}
  </div>
)
