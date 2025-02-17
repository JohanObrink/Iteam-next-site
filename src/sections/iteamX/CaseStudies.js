import React from "react"
import styled from "styled-components"
import { Container, Row, Col, Card } from "react-bootstrap"

import { Title, Box, Text, Button } from "../../components/Core"
import { device } from "../../utils"
import { caseItems } from "../../data/caseItems"

const CaseCardStyled = styled(Card)`
  width: 100%;
  transition: 0.4s;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark};

  .img-container {
    position: relative;
    z-index: 1;
    img {
      border-radius: 8px 8px 0 0;
      max-width: 100%;
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
  }

  &:hover {
    transform: translateY(-20px);
  }
  &:hover i {
    transform: translateX(10px);
    opacity: 1;
  }
`

const BtnContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin-top: 20px;
  opacity: 0;
  transition: 0.4s opacity, 0.4s margin-top;
  height: 40px;
  font-size: 16px;
  text-align: center;
  ${CaseCardStyled}:hover & {
    opacity: 1;
    margin-top: 0px;
  }
  button {
    font-size: 16px;
    padding: 0.5rem 1.25rem;
    @media ${device.sm} {
      font-size: 18px;
      padding: 0.75rem 1.5rem;
    }
    @media ${device.lg} {
      padding: 0.85rem 1.75rem;
    }
  }
`

const TextContent = styled(Box)`
  position: relative;
  z-index: 1;
  transition: 0.4s;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-top: 23px;
  padding-bottom: 21px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;

  @media ${device.sm} {
    padding-top: 43px;
    padding-bottom: 41px;
    padding-left: 38px;
    padding-right: 38px;
  }
`

const Shape = styled(Box)`
  background: initial;
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 2;
  bottom: 98%;
  @media ${device.sm} {
    bottom: 99%;
  }
  @media ${device.xl} {
    bottom: 100%;
  }
  svg {
    width: 100%;
    path {
      fill: ${({ theme, bg }) => theme.colors[bg]};
      transition: 0.4s;
    }
  }
`

const PreTitle = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 28px;
  margin-bottom: 22px;
`

const TitleStyled = styled(Title)`
  letter-spacing: -1.06px;
  margin-bottom: 22px;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  @media ${device.sm} {
    font-size: 34px;
    font-weight: 700;
  }
`

const CaseCard = ({
  isDark = true,
  bg = "secondary",
  img,
  meta = [],
  title = "",
  children = "",
  link,
}) => {
  return (
    <CaseCardStyled>
      <div className="img-container">
        <img src={img} alt="" />
        <BtnContainer>
          <Button onClick={() => (window.location.href = link)}>
            Läs case
          </Button>
        </BtnContainer>
      </div>
      <TextContent bg={bg}>
        <Shape bg={bg}>
          <svg height="22" viewBox="0 0 540 22">
            <g>
              <g>
                <path d="M0 0s233.088 28.458 539.999 0c306.91-28.458 0 22 0 22H.06"></path>
              </g>
            </g>
          </svg>
        </Shape>
        <PreTitle color={isDark ? "lightShade" : "darkShade"}>
          {meta.map((item, i) => {
            if (i + 1 !== meta.length) return `${item}, `
            return `${item}`
          })}
        </PreTitle>
        <TitleStyled color={isDark ? "light" : "dark"}>{title}</TitleStyled>
        <Text color={isDark ? "lightShade" : "darkShade"}>{children}</Text>
      </TextContent>
    </CaseCardStyled>
  )
}

const CaseStudies = () => {
  const XCase = caseItems.filter((item) => item.offer.includes("X"))

  return (
    <>
      {/* <!-- Content section --> */}
      <Box bg="dark">
        <Container className="pt-5">
          <Row>
            {XCase.map((item, i) => (
              <Col
                key={i}
                lg="6"
                md="9"
                className="mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <CaseCard
                  bg={i === 0 ? "secondary" : "light"}
                  isDark={false}
                  img={item.caseImg}
                  meta={item.tags}
                  title={item.title}
                  link={item.link}
                >
                  {item.intro}
                </CaseCard>
              </Col>
            ))}
          </Row>
          {/* <Box className="text-center" pt={[4, null, null, null, 5]}>
            <Button variant="outline" color="light">
              Läs mer om våra Iteam X case
            </Button>
          </Box> */}
        </Container>
      </Box>
    </>
  )
}

export default CaseStudies
