import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from '../../app/App'
import Projects from '../../containers/Projects'
import ViewProject from '../../containers/ViewProject'
import NewProject from '../../containers/NewProject'
import EditProject from '../../containers/EditProject'
import Profile from '../../user/Profile'
const NoMatch = props => <h1 className="title">404 Error Message</h1>
const LandingPage = props => <h1 className="title">Welcome</h1>

export default ({store}) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage} />
          <Route path="/projects/" component={Projects} />
          <Route path="/projects/tag/:id/" component={Projects} />
          <Route path="/projects/category/:id/" component={Projects} />
          <Route path="/projects/new" component={NewProject} />
          <Route path="/projects/:id" component={ViewProject} />
          <Route path="/projects/:id/edit" component={EditProject} />
          <Route path="/users/:id" component={Profile} />
          <Route path="/users/:id/edit" component={Profile} />
          <Route path="*" component={NoMatch} />
        </Route>
      </Router>
    </Provider>
  )
}
