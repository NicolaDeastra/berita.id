import * as React from 'react'
import { HStack, Link, Divider, useMediaQuery } from '@chakra-ui/react'
import { Link as DomLink } from 'react-router-dom'

import routes from 'routes'
import siteConfig from 'site-config'
import MobileDrawer from 'components/MobileDrawer'

const Nav = () => {
  const [isDestop] = useMediaQuery('(min-width: 960px)')

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

        <HStack fontSize='md' flexGrow={1} justify={['flex-end', 'flex-start']}>
          {isDestop ? (
            routes.map(([text, href]) => (
              <DomLink key={text} to={href}>
                <Link p={4}>{text}</Link>
              </DomLink>
            ))
          ) : (
            <MobileDrawer />
          )}
        </HStack>
      </HStack>
      <Divider />
    </>
  )
}

export default Nav
