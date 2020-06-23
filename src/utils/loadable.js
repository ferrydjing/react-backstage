import React, { useEffect } from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const useLoadingComponent = () => {
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [])

  return <div />
}

const loadable = (loader, loading = useLoadingComponent) => {
  return Loadable({
    loader,
    loading
  })
}

export const DefaultLayout = loadable(() =>
  import(/* webpackChunkName: 'default' */ '../views/Layout')
)

export const NotFound = loadable(() =>
  import(/* webpackChunkName: 'default' */ '../views/404')
)

export const Login = loadable(() =>
  import(/* webpackChunkName: 'default' */ '../views/Login')
)

export default loadable
