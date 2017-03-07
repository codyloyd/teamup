import React from 'react'
import {Provider} from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from '../containers/App'
import Project from '../containers/Project'
import Projects from '../containers/Projects'
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
              <Route path="/all/" component={Projects}/>
              <Route path="/tag/:id/" component={Projects}/>
              <Route path="/category/:id/" component={Projects}/>
          </Route>
          <Route path="project" component={Project}>
              <Route path="/view/:id" component={Project}/>
              <Route path="/edit/:id" component={Project}/>
              <Route path="/new/" component={Project}/>
          </Route>
          <Route path="profile" component={Profile}>
              <Route path="/view/:id" component={Profile}/>
              <Route path="/edit/:id" component={Profile}/>
          </Route>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    </Provider>
  )
}
