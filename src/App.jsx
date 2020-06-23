import React, { memo } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { DefaultLayout, NotFound, Login } from './utils/loadable'

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/index' />} />
        <Route path='/login' component={Login} />
        <Route path='/404' component={NotFound} />
        <Route component={DefaultLayout} />
      </Switch>
    </Router>
  )
}

export default memo(App)
