import React from 'react'
import {Provider} from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from '../containers/App'
import Project from '../containers/Project'
import Projects from '../containers/Projects'
import ViewProject from '../containers/ViewProject'
const Profile = props => (<h1 className="title">Your Profile</h1>)
const NoMatch = props => (<h1 className="title">404 Error Message</h1>)
const LandingPage = props => (<h1 className="title">Welcome</h1>)

export default ({store}) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage} />
          <Route path="projects" component={Projects}>
              <Route path="/projects/all/" component={Projects}/>
              <Route path="/projects/tag/:id/" component={Projects}/>
              <Route path="/projects/category/:id/" component={Projects}/>
          </Route>
          <Route path="project" component={Project}>
              <Route path="/project/view/:id" component={ViewProject}/>
              <Route path="/project/edit/:id" component={Project}/>
              <Route path="/project/new/" component={Project}/>
          </Route>
          <Route path="profile" component={Profile}>
              <Route path="/profile/view/:id" component={Profile}/>
              <Route path="/profile/edit/:id" component={Profile}/>
          </Route>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    </Provider>
  )
}
