import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { Link } from 'react-router-dom'

export const MovieCardWrapper = styled(Link)`
  margin: 50px auto;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 280px;
  background-color: ${theme.colors.secondColor};
  border-radius: 5px;
  position: relative;
`

export const MovieCardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`

export const MovieCardImageContainer = styled.div`
  height: 300px;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`
export const MovieCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

export const MovieCardTitle = styled.span`
  color: ${theme.colors.white};
  font-size: 1.2rem;
`

export const MovieCardDate = styled.span`
  color: ${theme.colors.white};
  font-size: 0.875rem;
  position: absolute;
  bottom: 15px;
`
