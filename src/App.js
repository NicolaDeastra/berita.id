import * as React from 'react'
import { ChakraProvider, Stack } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Fonts } from 'theme/components/Font'
import theme from 'theme'

import Nav from 'components/Nav'
import Home from 'Pages/Home'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Router>
        <Nav />
        <Stack maxW={'6xl'} minH='100vh' mx='auto' py={4} px={[4, 14]}>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
          </Switch>
        </Stack>
      </Router>
    </ChakraProvider>
  )
}

export default App
