import * as React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
  IconButton,
  Link,
  Stack,
} from '@chakra-ui/react'

import { Link as DomLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import siteConfig from 'site-config'
import routes from 'routes'

const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton
        variant='outline'
        border='none'
        aria-label='Open menu'
        ref={btnRef}
        onClick={onOpen}
        isRound
        size='lg'
        icon={<Icon as={isOpen ? FaTimes : FaBars} />}
      />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader p={8}>{siteConfig.title}</DrawerHeader>

            <DrawerBody
              as={Stack}
              fontSize='lg'
              justify='center'
              p={8}
              spacing={4}
            >
              {[['Home', '/'], ...routes].map(([title, href]) => (
                <DomLink key={href} to={href}>
                  <Link onClick={onClose}>{title}</Link>
                </DomLink>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
export default MobileDrawer
