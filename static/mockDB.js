db = {
  projects: {
    projectId: {
      id: '01',
      ownerId: '1234',
      name: 'project name',
      description: 'project description.....',
      summary: 'project summary.....',
      status: 'open', // open/closed
      roles: [
        'roleId1',
        'roleId2'
      ],
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ],
      timeStamp: 123456,
      lastUpdated: 123456
    }
  },

  roles: {
    roleId1: {
      id: 'roleId1',
      projectId: 'projectId1',
      name: 'role name',
      status: 'role status',
      description: 'role description',
      applications: [
        'applicationId1',
        'applicationId2'
      ],
      'users': null // to be filled with the name of the user that gets accepted
    }
  },

  applications: {
    '1': {
      userId: '1',
      roleId: '1',
      timeStamp: 123456
    }
  },

  users: {
    userId1: {
      id: 'userId1',
      displayName: 'Name',
      githubUsername: 'gh-name',
      signedUp: 12345,
      projectsOwned: [
        'projectId1',
        'projectId2'
      ],
      applications: [
        'applicationId1',
        'applicationId2'
      ],
      roles: [
        'roleId3',
        'roleId4'
      ]
    }
  }
}
