import React, { memo } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop, message } from 'antd'
import { Aside, Content } from './components'
import routes from '@/routers'

const LayoutContainer = (props) => {
  console.log(routes)
  return (
    <Layout>
      <BackTop />
      <Aside></Aside>
      <Content>
        <Switch>
          {routes.map((Item) => {
            return (
              <Route
                key={Item.path}
                path={Item.path}
                exact={Item.exact}
                render={(props) => <Item.component {...props} />}
              ></Route>
            )
          })}
          <Redirect to='/404' {...props} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default withRouter(memo(LayoutContainer))
