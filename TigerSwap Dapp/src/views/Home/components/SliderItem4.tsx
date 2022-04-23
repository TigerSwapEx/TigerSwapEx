import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'



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


const SliderItem4 = () => {


  return (
    <SliderCss>
      <CardBody>
        <Text bold fontSize="20px">Over</Text>
        <Text bold fontSize="25px" color="#f95305">4,000x</Text>
        <Text bold fontSize="20px">Capital Efficiency</Text>
      </CardBody>
    </SliderCss>
  )
}

export default SliderItem4
