import React, { memo } from 'react'
import { withModel } from 'hox'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubFilled
} from '@ant-design/icons'
import Avatar from './components/Avatar'
import { useCollapseModel } from '../store'
import {
  ContentWrap,
  HeaderWrap,
  Main,
  CollapsedWrap,
  GithubWrap
} from '../styled'

const Content = (props) => {
  const { collapse, changeCollapse } = props

  return (
    <ContentWrap>
      <HeaderWrap style={{ left: collapse ? 80 : 200 }}>
        <CollapsedWrap
          onClick={() => {
            changeCollapse(!collapse)
          }}
        >
          {collapse ? (
            <MenuUnfoldOutlined style={{ fontSize: 22 }} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: 22 }} />
          )}
        </CollapsedWrap>
        <GithubWrap>
          <GithubFilled style={{ fontSize: 20, marginLeft: 'auto' }} />
        </GithubWrap>
        <Avatar />
      </HeaderWrap>
      <Main>{props.children}</Main>
    </ContentWrap>
  )
}

const models = [useCollapseModel]

const mapToProps = ([collapse]) => ({
  collapse: collapse.collapse,
  changeCollapse: collapse.changeCollapse
})

export default withModel(models, mapToProps)(memo(Content))
