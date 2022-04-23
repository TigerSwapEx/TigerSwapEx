import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text, Button, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import FarmStakingCard from './components/FarmStakingCard'
// import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import SliderItem1 from './components/SliderItem1'
import SliderItem2 from './components/SliderItem2'
import SliderItem3 from './components/SliderItem3'
import SliderItem4 from './components/SliderItem4'
import SliderItem5 from './components/SliderItem5'
import SliderItem6 from './components/SliderItem6'
// import IfoCardWrapper from 'views/Ifos/components/IfoCards'


const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  padding: 10px 10px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 30px;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/3.png');
    background-position: top;
    height: 290px;
    padding-top: 0;
    justify-content: stretch;
    margin-bottom: 30px;
    border-radius: 20px;
    flex-direction: column;
    text-align: center;
  }
`

const Block = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`


const Buttongroup = styled(BaseLayout)`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 2px;
`


const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 40px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Slider = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 40px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const responsive = {
   
  desktop: {
    breakpoint: { max: 3000, min: 968 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 968, min: 576 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};


const Home: React.FC = () => {
  const TranslateString = useI18n()



  return (
    <Page>
      <Hero>

      <Block>
        <Heading as="h1" size="xl" mb="24px" color="white">
              Welcome to Tiger Dapp!
              <Text bold fontSize="18px">Development In Progress.</Text>
              <Text fontSize="15px">Please Be Patient For Official Announcements.</Text>
        </Heading>
      </Block>

       <div>
       <Buttongroup>
           <a href="https://t.me/TigerSwap_Ex" target = "_blank" rel = "noopener noreferrer">
           <Button>Join Group</Button>
           </a>
            
           <a href="https://tigerswap.global/whitelist" target = "_blank" rel = "noopener noreferrer">
           <Button title="Join Now">Get Whitelisted</Button>
           </a>

       </Buttongroup>
       </div>

      </Hero>

      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard/>
        </Cards>
        </div>
        
      <div>
        <Slider> 
          <Carousel
       responsive={responsive}
       autoPlay
       infinite
       autoPlaySpeed={3000}
       keyBoardControl
       customTransition="transform 300ms ease-in-out"
       transitionDuration={300}
       focusOnSelect
       removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
       >
         <SliderItem1 />
         <SliderItem2 />
         <SliderItem3 />
         <SliderItem4 />
         <SliderItem5 />
         <SliderItem6 />
       
         </Carousel>

        </Slider>
      </div>
       
    </Page>
  )
}

export default Home
