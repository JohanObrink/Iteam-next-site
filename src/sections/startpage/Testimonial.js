import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Slider from "react-slick"
import { rgba } from "polished"

import { Title, Section, Box, Text } from "../../components/Core"
import { device, breakpoints } from "../../utils"

import imgCustomer1 from "../../assets/image/jpeg/Erika-Strandberg-Sveriges-Allmannytta.jpeg"
import imgCustomer2 from "../../assets/image/jpeg/TomAiraksinen.jpg"
import imgCustomer3 from "../../assets/image/jpeg/littorin.jpg"
import imgQuote from "../../assets/image/png/quote-shape.png"

const SliderStyled = styled(Slider)`
  position: relative;
  .slick-arrow {
    position: absolute;
    top: 50%;
    font-size: 0;
    height: 65px;
    display: flex;
    width: 65px;
    background: ${({ theme }) => theme.colors.secondary};
    transition: 0.4s;
    border-radius: 500px;
    transform: translate(-50%, -50%);
    z-index: 999;
    margin-top: -20px;
    &::before {
      position: absolute;
      content: "";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      transition: 0.4s;
    }
  }
  .slick-arrow.slick-prev {
    left: 0;
    &:before {
      content: "\f060";
    }
    margin-left: -6px;
  
  @media ${device.lg}{
    margin-left: 40px;
    }
  }

  .slick-arrow.slick-next {
    right: 0;
    left: auto;
    transform: translate(50%, -50%);
    &:before {
      content: "\f061";
    }
    margin-right: -6px;
    @media ${device.lg}{
      margin-right: 40px;
    }
  }

  .slick-arrow:hover,
  .slick-arrow:focus {
    background: ${({ theme }) => theme.colors.light}!important;
    color: ${({ theme }) => theme.colors.secondary}!important;
    &:before {
      color: ${({ theme }) => theme.colors.secondary}!important;
    }
  }
`

const SliderItem = styled(Box)`
  &:focus {
    outline: none;
  }
`

const SliderCard = styled(Box)`
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    `0 52px 54px ${rgba(theme.colors.shadow, 0.125)}`};
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media ${device.sm} {
    padding: 35px 35px 20px 35px;
  }
  @media ${device.md} {
    padding: 10px;
    flex-direction: row;
  }
  @media ${device.lg} {
    margin: 60px 60px 100px 60px !important;
  }
`

const SliderImgContainer = styled(Box)`
  border-radius: 10px;
  overflow: hidden;

  padding: 0 30px;

  @media ${device.sm} {
    min-width: 315px;
    padding: 0;
  }
  @media ${device.md} {
  }

  img {
    margin: 0 auto;
    max-width: unset;
    width: 100%;
  }

  @media ${device.sm} {
    max-width: 100%;
    width: auto;
  }
`

const SliderText = styled(Box)`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  flex: auto;
  padding: 50px 30px 0px;
`
const SliderQuoteShape = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media ${device.md} {
    padding-right: 30px;
    margin-bottom: 30px;
  }
`

const Testimonial = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: breakpoints.lg,
        // settings: {
        //   arrows: false,
        // },
      },
    ],
  }

  return (
    <>
      {/* <!-- testimonial section --> */}
      <Section bg="#F7F7FB" pb={["50px!important"]}>
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg="9" md="9">
              <div className="text">
                <Title>Vi är stolta över våra kunder</Title>
                <Text>
                  Kreativitet kommer inte från krångliga avtal utan från
                  samarbete och förtroende.
                </Text>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12" xl="11">
              <SliderStyled {...slickSettings}>
                <SliderItem>
                  <SliderCard>
                    <SliderImgContainer>
                      <img src={imgCustomer1} alt="" />
                    </SliderImgContainer>
                    <SliderText>
                      <Text color="dark" my={2}>
                        Jag uppskattar Iteam för deras genuina engagemang, de är
                        alltid intresserade av att bidra till vårt arbete i
                        Digitaliseringsinitiativet och bygget av framtidens
                        allmännytta.
                      </Text>
                      <Title variant="card" mb={0} mt={3}>
                        Erika Strandberg
                      </Title>
                      <Text variant="small">
                        Lead Service Design, Allmännyttans Digitaliseringsinitiativ
                      </Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>

                <SliderItem>
                  <SliderCard>
                    <SliderImgContainer>
                      <img src={imgCustomer2} alt="" />
                    </SliderImgContainer>
                    <SliderText>
                      <Text color="dark" my={2}>
                        Iteam-gänget var superbra att jobba med. Väldigt
                        professionella och ansvarstagande. Jag kände inte heller
                        att det var nån uppdelning mellan “våra” två utvecklare
                        och konsulterna från Iteam, utan vi var verkligen ett
                        team som jobbade mot samma mål: en riktigt grym app.
                      </Text>
                      <Title variant="card" mb={0} mt={3}>
                        Tom Airaksinen
                      </Title>
                      <Text variant="small">Produktägare på PE Accounting</Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>
                <SliderItem>
                  <SliderCard>
                    <SliderImgContainer>
                      <img src={imgCustomer3} alt="" />
                    </SliderImgContainer>
                    <SliderText>
                      <Text color="dark" my={2} className="text-left">
                        Vårt team på Iteam är mer som kollegor än leverantörer.
                        Istället för att skriva en teknisk kravspecifikation, så
                        samarbetar vi kontinuerligt för att utveckla
                        funktionalitet.
                      </Text>
                      <Title variant="card" mb={0} mt={3} className="text-left">
                        Johan Littorin
                      </Title>
                      <Text variant="small">Grundare Vimla</Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>
              </SliderStyled>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Testimonial
