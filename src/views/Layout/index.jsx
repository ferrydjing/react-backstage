import React, { memo } from 'react'
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom'
import { Layout, BackTop, Breadcrumb } from 'antd'
import { withModel } from 'hox'
import fp from 'lodash/fp'
import { Aside, Content } from './components'
import routes from '@/routers'
import { useMenuModel } from './store'

const LayoutContainer = (props) => {
  const { location, menu, menuClick } = props

  const renderBreadcrumb = () => {
    const { pathname } = location
    let arr = pathname.split('/').map((item) => `/${item}`)
    arr = arr.slice(1, arr.length)
    if (arr[0] === '/index') {
      arr = []
    }
    arr = arr.map((item) => {
      let obj = fp.find((cur) => cur.key === item, menu)
      console.log(obj, item)
      if (!obj) {
        for (let i = 0; i < menu.length; i++) {
          console.log(menu[i].subs)
          if (menu[i].subs) {
            let cur = fp.find(
              (cur) => cur.key.indexOf(item) !== -1,
              menu[i].subs
            )
            if (cur) {
              console.log(cur)
              obj = cur
              break
            }
          }
        }
      }
      return { key: item, txt: obj ? obj.title : '' }
    })
    return (
      <Breadcrumb style={{ marginBottom: 20 }} computedmatch={undefined}>
        <Breadcrumb.Item>
          <Link
            to='/index'
            onClick={() => {
              menuClick({ key: '/index' })
            }}
          >
            首页
          </Link>
        </Breadcrumb.Item>
        {arr.map((item) => (
          <Breadcrumb.Item key={item.key}>{item.txt}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }

  return (
    <Layout>
      <BackTop />
      <Aside></Aside>
      <Content>
        {renderBreadcrumb()}
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
  menuClick: menuModel.menuClick
})

export default withRouter(
  withModel(models, mapModelsToProps)(memo(LayoutContainer))
)
