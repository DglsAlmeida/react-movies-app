import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('<Header />', () => {
  test('should renders correctly', () => {
    render(<Header />)
    const headerDescription = screen.getByText('Movie App')
    expect(headerDescription).toBeInTheDocument()
  })
})
