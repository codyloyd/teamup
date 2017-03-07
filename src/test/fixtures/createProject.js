import cuid from 'cuid'

export default ({
  id = cuid(),
  ownerId = '1234',
  name = 'Project Name',
  description = 'A really long and detailed project description.',
  summary = 'A short project summary',
  status = 'open',
  roles = [
    'roleId1',
    'roleId2'
  ],
  tags = [
    'tag1',
    'tag2',
    'tag3'
  ],
  timeStamp = Date.now(),
  lastUpdated = Date.now()
} = {}) => ({
  id, ownerId, name, description, summary, status, roles, tags, timeStamp, lastUpdated
})
