import React, { memo, Suspense, useEffect } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { withModel } from 'hox'
import fp from 'lodash/fp'
import { useBasicModel } from './store'
import { DefaultLayout, NotFound, Login } from './routers'

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
  const { judgeIsMobile } = props
  useEffect(() => {
    judgeIsMobile()
    window.addEventListener(
      'resize',
      fp.throttle(200, () => {
        judgeIsMobile()
      }),
      false
    )
    return () => {
      window.removeEventListener(
        'resize',
        fp.throttle(200, () => {
          judgeIsMobile()
        })
      )
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

const models = [useBasicModel]

const mapToProps = ([basicModel]) => ({
  judgeIsMobile: basicModel.judgeIsMobile
})

export default withModel(models, mapToProps)(memo(App))
