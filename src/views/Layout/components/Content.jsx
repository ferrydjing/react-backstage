import React, { memo } from 'react'
import { ContentWrap, HeaderWrap, Main } from '../styled'

const Content = (props) => {
  return (
    <ContentWrap>
      <HeaderWrap></HeaderWrap>
      <Main>{props.children}</Main>
    </ContentWrap>
  )
}

export default memo(Content)
