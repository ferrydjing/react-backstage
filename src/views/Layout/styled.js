import styled from 'styled-components'
import { Layout } from 'antd'
const { Sider, Content, Header } = Layout

export const AsideWrap = styled(Sider)`
  position: fixed;
  left: 0;
  width: 200px;
  height: 100vh;
`

export const ContentWrap = styled(Layout)``

export const HeaderWrap = styled(Header)`
  position: fixed;
  width: 100%;
  height: 56px !important;
  background: #ffffff !important;
  box-shadow: 0px 6px 16px 0px rgba(154, 167, 179, 0.2);
  z-index: 1;
`

export const Main = styled(Content)`
  margin-top: 56px;
`
