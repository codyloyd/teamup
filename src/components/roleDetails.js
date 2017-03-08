import React from 'react'

const RoleDetails = ({name, description}) => (
  <div className="role-details box">
    <p className="title is-3 role-name">{name}</p>
    <p className="role-description">{description}</p>
    <button className="button is-primary">Apply</button>
  </div>
)

RoleDetails.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default RoleDetails
