// import loadable from '@/utils/loadable'
import { lazy } from 'react'

const Index = lazy(() =>
  import(/*webpackChunkName: 'index' */ '@/views/pages/Index')
)

const About = lazy(() =>
  import(/*webpackChunkName: 'index' */ '@/views/pages/About')
)

const Button = lazy(() =>
  import(/*webpackChunkName: 'index' */ '@/views/pages/Button')
)
const Icon = lazy(() =>
  import(/*webpackChunkName: 'index' */ '@/views/pages/Icon')
)

const Table = lazy(() =>
  import(/*webpackChunkName: 'index' */ '@/views/pages/Table')
)

const routes = [
  { path: '/index', exact: true, name: 'Index', component: Index },
  { path: '/about', exact: true, name: 'About', component: About },
  { path: '/general/button', exact: true, name: 'Button', component: Button },
  { path: '/general/icon', exact: true, name: 'Icon', component: Icon },
  { path: '/display/table', exact: true, name: 'Table', component: Table }
]

export default routes
