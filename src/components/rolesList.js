import React from 'react'
import RoleDetails from './roleDetails'

class RolesList extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className="">
        {this.props.roles.map(role => (
          <RoleDetails
            key={role.id}
            name={role.name}
            description={role.description}
          />
        ))}
      </div>
    )
  }
}

RolesList.propTypes = {
  roles: React.PropTypes.array.isRequired
}

export default RolesList
