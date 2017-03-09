import React from 'react'
import RoleDetails from './roleDetails'

const RolesList = ({roles}) => {
  return (
    <div className="">
      {roles.map(role => (
        <RoleDetails
          key={role.id}
          name={role.name}
          description={role.description}
        />
      ))}
    </div>
  )
}

RolesList.propTypes = {
  roles: React.PropTypes.array.isRequired
}

export default RolesList
