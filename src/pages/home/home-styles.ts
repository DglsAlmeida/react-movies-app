import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 0 20px;

  @media (max-width: 910px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 610px) {
    grid-template-columns: 1fr;
  }
`
