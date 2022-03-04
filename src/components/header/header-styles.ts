import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderWrapper = styled.header`
  display: flex;
  height: 70px;
  background-color: ${theme.colors.secondColor};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1.25rem;
`

export const HeaderDescription = styled.span`
  color: ${theme.colors.white};
  font-size: 1.5rem;
`
