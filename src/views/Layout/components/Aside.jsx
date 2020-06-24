import React, { memo, useEffect } from 'react'
import { Menu } from 'antd'
import { withModel } from 'hox'
import { GithubFilled } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import { AsideWrap, LogoWrap } from '../styled'
import { useCollapseModel, useMenuModel } from '../store'

const Aside = (props) => {
  const {
    location,
    collapse,
    menu,
    openKeys,
    selectedKeys,
    renderSubMenuItem,
    renderMenuItem,
    menuClick,
    setSelectedKeys,
    openKeySet,
    onOpenChange
  } = props
  useEffect(() => {
    setTimeout(() => {
      const { pathname } = location
      openKeySet(pathname)
      setSelectedKeys([pathname])
    }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AsideWrap collapsed={collapse}>
      <LogoWrap>
        <GithubFilled style={{ fontSize: 36, color: '#fff' }} />
      </LogoWrap>
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={menuClick}
      >
        {menu.map((item) =>
          item.subs && item.subs.length > 0
            ? renderSubMenuItem(item)
            : renderMenuItem(item)
        )}
      </Menu>
    </AsideWrap>
  )
}

const models = [useCollapseModel, useMenuModel]

const mapToProps = ([collapse, menuModel]) => ({
  collapse: collapse.collapse,
  menu: menuModel.menu,
  openKeys: menuModel.openKeys,
  selectedKeys: menuModel.selectedKeys,
  renderMenuItem: menuModel.renderMenuItem,
  renderSubMenuItem: menuModel.renderSubMenuItem,
  menuClick: menuModel.menuClick,
  setSelectedKeys: menuModel.setSelectedKeys,
  openKeySet: menuModel.openKeySet,
  onOpenChange: menuModel.onOpenChange
})

export default withRouter(withModel(models, mapToProps)(memo(Aside)))
