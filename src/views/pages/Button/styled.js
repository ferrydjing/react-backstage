import styled from 'styled-components'

export const ButtonPageWrap = styled.section``

export const ButtonPageContanier = styled.div`
  display: flex;
  margin-top: 10px;
`
export const ContainerItem = styled.div`
  flex: 1;
  &:last-child {
    margin-left: 10px;
  }
`

export const Item = styled.div`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &.mt {
    button {
      &:not(:first-child) {
        margin-top: 10px;
        margin-left: 0;
      }
    }
  }
  button {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`
