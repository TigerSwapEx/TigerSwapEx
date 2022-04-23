import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'


const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
  text-align: center;
`

const UnderDevelopment5 = () => {
  

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading size="xl">Under Development</Heading>
        <Text mb="16px">Oops, NFT page coming soon.</Text>
        <Button as="a" href="/" size="sm">
          Back Home
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default UnderDevelopment5
