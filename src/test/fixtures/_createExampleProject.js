import cuid from 'cuid';

const createExampleProject = ({
    id = cuid(),
    name = 'Anonymous',
    slug = 'anonymous',
    description = '',
} = {}) => ({
    id, name, slug, description
});

export default createExampleProject;
