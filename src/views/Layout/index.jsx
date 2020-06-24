import React, { memo } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import { withModel } from 'hox'
import { Aside, Content } from './components'
import routes from '@/routers'
import { useMenuModel } from './store'

const LayoutContainer = (props) => {
  const { location, renderBreadcrumb } = props

  return (
    <Layout>
      <BackTop />
      <Aside></Aside>
      <Content>
        {renderBreadcrumb(location)}
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

const models = [useMenuModel]

const mapModelsToProps = ([menuModel]) => ({
  menu: menuModel.menu,
  menuClick: menuModel.menuClick,
  renderBreadcrumb: menuModel.renderBreadcrumb
})

export default withRouter(
  withModel(models, mapModelsToProps)(memo(LayoutContainer))
)
