import loadable from '@/utils/loadable'

const Index = loadable(() =>
  import(/*webpackChunkName: 'index' */ '@/views/pages/Index')
)

const routes = [
  { path: '/index', exact: true, name: 'Index', component: Index }
]

export default routes
