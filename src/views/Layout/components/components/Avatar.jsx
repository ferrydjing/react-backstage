import React from 'react'
import { Avatar, Menu } from 'antd'
import { UserOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons'
import { AvatarWrap, DropdownWrap } from './styled'

const menu = (
  <Menu>
    <Menu.Item icon={<FormOutlined />}>修改密码</Menu.Item>
    <Menu.Item icon={<LogoutOutlined />}>退出</Menu.Item>
  </Menu>
)

const MyAvartar = () => {
  return (
    <AvatarWrap overlay={menu} width={{ width: 120 }}>
      <DropdownWrap>
        <span style={{ marginRight: 10 }}>sadasdsa</span>
        <Avatar icon={<UserOutlined />}></Avatar>
      </DropdownWrap>
    </AvatarWrap>
  )
}

export default MyAvartar
