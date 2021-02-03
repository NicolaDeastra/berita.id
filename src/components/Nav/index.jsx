import * as React from 'react'
import { HStack, Link, Divider } from '@chakra-ui/react'
import { Link as DomLink } from 'react-router-dom'

import routes from 'routes'
import siteConfig from 'site-config'

const Nav = () => {
  return (
    <>
      <HStack
        py={4}
        pr={['2rem', '6.8rem']}
        pl={['2rem', '11rem']}
        spacing={12}
      >
        <DomLink to='/'>
          <Link fontWeight='extrabold' fontSize='lg' variant='link'>
            {siteConfig.title}
          </Link>
        </DomLink>

        <HStack fontSize='md' flexGrow={1}>
          {routes.map(([text, href]) => (
            <DomLink key={text} to={href}>
              <Link p={4}>{text}</Link>
            </DomLink>
          ))}
        </HStack>
      </HStack>
      <Divider />
    </>
  )
}

export default Nav
