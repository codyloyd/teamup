import React from 'react'
import RoleDetails from './roleDetails'

export default ({roles}) => (
  <div className="section">
    {roles.map(role => (
      <RoleDetails />
    ))}
  </div>
)
