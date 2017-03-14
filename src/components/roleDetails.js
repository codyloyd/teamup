import React from 'react'

const RoleDetails = ({name, description, toggleApplicationForm}) => (
  <div className="role-details box">
    <p className="title is-4 role-name">{name}</p>
    <p className="role-description">{description}</p>
    <button className="button is-primary" onClick={toggleApplicationForm}>
      Apply
    </button>
  </div>
)

RoleDetails.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default RoleDetails
