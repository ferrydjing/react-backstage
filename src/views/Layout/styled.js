import styled from 'styled-components'
import { Layout } from 'antd'
const { Sider, Content, Header } = Layout

export const AsideWrap = styled(Sider)`
  position: fixed !important;
  left: 0;
  width: 200px;
  height: 100vh;
`

export const ContentWrap = styled(Layout)`
  margin-left: 200px;
  min-height: 100vh !important;
  overflow-x: hidden !important;
  overflow-y: scroll !important;
`

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
  padding: 20px 20px 20px;
`

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  transition: width 0.3s ease-out;
  span {
    margin-left: 10px;
    font-size: 22px;
    color: #fff;
  }
`

export const CollapsedWrap = styled.div``

export const GithubWrap = styled.a.attrs((props) => ({
  href: 'https://github.com/ferrydjing/react-backstage'
}))`
  margin-left: auto;
  color: #000;
`
