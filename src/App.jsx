import React, { memo, Suspense, useEffect } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { DefaultLayout, NotFound, Login } from './utils/loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Loading = () => {
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [])
  return <div />
}

const App = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/index' />} />
          <Route path='/login' component={Login} />
          <Route path='/404' component={NotFound} />
          <Route component={DefaultLayout} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default memo(App)
