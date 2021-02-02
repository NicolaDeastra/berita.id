import * as React from 'react'
import { Heading, Text, VStack, Button, Center } from '@chakra-ui/react'

import siteConfig from 'site-config'

const Hero = () => {
  return (
    <Center
      h='lg'
      pt={['0rem', '0rem']}
      align='center'
      flexDirection={{ base: 'column', md: 'row' }}
      mb={{ base: 20, md: '7rem' }}
    >
      <VStack spacing={6} px={['2rem', '10rem']}>
        <Heading
          bgGradient='linear(to-r, #D6E3E2,#F0EE89)'
          bgClip='text'
          size='3xl'
          mb='1.4rem'
          textAlign='center'
        >
          {siteConfig.heading}
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} textAlign='center'>
          {siteConfig.subHeading}
        </Text>
        <Button size='lg' ml={['4.5rem', '0']} mt='24px'>
          Get Started
        </Button>
      </VStack>
    </Center>
  )
}

export default Hero
