import React from 'react'
import RoleDetails from './roleDetails'

const RolesList = ({roles, toggleApplicationForm}) => {
  if (!roles.length) {
    return <div className="no-roles">No roles have been created...</div>
  }
  return (
    <div>
      {roles.map(role => (
        <RoleDetails
          key={role.id}
          id={role.id}
          name={role.name}
          description={role.description}
          toggleApplicationForm={toggleApplicationForm}
        />
      ))}
    </div>
  )
}

RolesList.propTypes = {
  roles: React.PropTypes.array.isRequired
}

export default RolesList
