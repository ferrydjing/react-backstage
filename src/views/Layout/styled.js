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
  display: flex;
  align-items: center;
  /* width: 100%; */
  right: 0;
  left: 200px;
  height: 56px !important;
  background: #ffffff !important;
  box-shadow: 0px 6px 16px 0px rgba(154, 167, 179, 0.2);
  z-index: 1;
  /* text-align: right; */
`

export const Main = styled(Content)`
  margin-top: 56px;
  padding: 10px 30px 0;
`

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
`

export const CollapsedWrap = styled.div``
