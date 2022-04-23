import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'


const SelectArrow = styled.div`
  align-items: center;
  background-image: url('/images/egg/selectarrow.png');
  height: 45px;
  width: 45px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-radius: 100px;
  text-align: center;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/selectarrow.png');
    background-position: center;
    align-items: center;
    flex-direction: row;
    height: 45px;
    width: 50px;
    border-radius: 100px;
    justify-content: center;
    text-align: center;
    cursor: pointer;
  }
`

const SliderCss = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  text-align: justify;
  justify-content: stretch;
  padding: 20px 20px;
  margin-left:10px;
  margin-right:10px;
  min-height: 100%;
`


const SliderItem3 = () => {


  return (
    <SliderCss>
      <CardBody>
        <Text bold fontSize="20px">Earn up to</Text>
        <Text bold fontSize="25px" color="#f95305">2600% APY</Text>
        <Text bold fontSize="20px">in Farms</Text>
      </CardBody>
      <a href="https://app.tigerswap.global/farm" target = "_blank" rel = "noopener noreferrer">
      <SelectArrow title="Join Now"/>
      </a>
    </SliderCss>
  )
}

export default SliderItem3
