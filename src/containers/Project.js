import React from 'react'
import ProjectDetails from '../components/projectDetails'
import RolesList from '../components/rolesList'

const createRole = ({
  id = '01',
  projectId = '02',
  name = 'role name',
  status = 'open',
  description = 'description of the role',
  applications = ['11', '22'],
  users = ['33']
} = {}) => ({
  id, projectId, name, status, description, applications, users
})

export default ({props}) => {
  return (
    <div className='container'>
      <ProjectDetails
        title="cool project"
        summary="this is a coool project that you should consider joining"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolores explicabo repudiandae expedita facilis tenetur at libero voluptatum exercitationem eveniet consectetur minus reiciendis, esse est vitae, iure eaque dicta. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minima voluptas, ad ipsam distinctio veritatis quasi sunt culpa eius vel earum, amet accusamus aliquid quaerat. Deleniti, voluptate, voluptas. Tempore, officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore iusto, unde aspernatur omnis ipsam minus doloremque harum repellendus sapiente, blanditiis laudantium eum asperiores ab fuga accusantium quod ipsum debitis aut."
        tags={['tag', 'bag']}
      />
      <RolesList roles={[
        createRole(),
        createRole()
      ]}/>
    </div>
  )
}
