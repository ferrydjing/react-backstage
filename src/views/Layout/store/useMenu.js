import React from 'react'
import { useState } from 'react'
import { createModel } from 'hox'
import {
  HomeFilled,
  AppstoreFilled,
  ExclamationCircleFilled,
  LayoutFilled
} from '@ant-design/icons'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

const defaulMenu = [
  {
    key: '/index',
    title: '首页',
    icon: <HomeFilled />
  },
  {
    key: '/general',
    title: '通用',
    icon: <AppstoreFilled />,
    subs: [
      { key: '/general/button', title: '按钮', icon: '' },
      { key: '/general/icon', title: '图标', icon: '' }
    ]
  },
  {
    key: '/display',
    title: '展示',
    icon: <LayoutFilled />,
    subs: [{ key: '/display/table', title: '表格', icon: '' }]
  },
  {
    key: '/about',
    title: '关于',
    icon: <ExclamationCircleFilled />
  }
]

const useMenuModel = () => {
  const [menu] = useState(defaulMenu)
  const [selectedKeys, setSelectedKeys] = useState([])
  const [openKeys, setOpenKeys] = useState([])

  const renderMenuItem = ({ key, title, icon }) => (
    <Menu.Item key={key}>
      <Link to={key}>
        {icon}
        <span>{title}</span>
      </Link>
    </Menu.Item>
  )

  const renderSubMenuItem = ({ key, title, icon, subs }) => (
    <SubMenu key={key} icon={icon} title={title}>
      {subs.map((item) => renderMenuItem(item))}
    </SubMenu>
  )

  const menuClick = ({ key }) => {
    setSelectedKeys([key])
    openKeySet(key)
  }

  const openKeySet = (key) => {
    let arr = key.split('/').map((item) => `/${item}`)
    arr = arr.slice(1, arr.length)
    if (arr.length > 1) {
      setOpenKeys([arr[0]])
    } else {
      setOpenKeys([])
    }
  }

  const onOpenChange = (openKeys) => {
    setOpenKeys(openKeys)
  }

  return {
    menu,
    selectedKeys,
    openKeys,
    openKeySet,
    menuClick,
    onOpenChange,
    renderMenuItem,
    setOpenKeys,
    renderSubMenuItem,
    setSelectedKeys
  }
}

export default createModel(useMenuModel)
