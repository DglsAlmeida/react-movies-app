import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'
import { Router } from './routes/routes'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  )
}

export default App
