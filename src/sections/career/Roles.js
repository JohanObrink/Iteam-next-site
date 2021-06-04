import React from "react";
import Link from "next/link";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text, Badge } from "../../components/Core";
import styled from "styled-components";

const Card = styled.a`
  justify-content: flex-start;
  min-height: 100%;
  box-shadow: 0 2px 4px rgba(14, 86, 124, 0.17);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px;
  transition: 0.4s;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 32px 84px rgba(14, 86, 124, 0.17);
    color: #0056b3 !important;
    text-decoration: none;
    .title {
      color: #0056b3 !important;
    }
  }
`;

const Location = styled.span`
  color: #8c97ac;
  font-size: 16px;
  font-weight: 300;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

`;

const RolesCard = ({
  color = "primary",
  title,
  location,
  type,
  children,
  link,
  ...rest
}) => (
  <Link href={link}>
    <Card className="card-job top-only" {...rest}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Location>
          <i className="icon icon-pin-3 mr-1"></i> {location}
        </Location>
      </div>
      <Title variant="card" className="title" fontWeight={500}>
        {title}
      </Title>
    </Card>
  </Link>
);

const Roles = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center">
            <div>
              <Title>Lediga tjänster</Title>
              <Text>
                Kika igenom våra öppningar just nu,{" "}
                <a href="mailto:internship@iteam.se">
                  anmäl intresse för praktik
                </a>{" "}
                eller{" "}
                <a href="mailto:joinus@iteam.se">skicka en spontantansökan</a>{" "}
                och berätta vad du drömmer om att göra ihop med oss
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="mt-lg-5 justify-content-center">
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="primary"
              title="Head of Development"
              type="Full-time"
              location="Göteborg eller Stockholm"
              link="/career/head-of-development"
            />
          </Col>
          <Col lg="4" md="6" className="pt-4">
            <RolesCard
              color="warning"
              title="Backend developer"
              type="Full-time"
              location="Göteborg, Stockholm eller remote"
              link="/career/backend-developer"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Roles;
