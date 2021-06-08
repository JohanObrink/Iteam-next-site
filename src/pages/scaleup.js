import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/scaleup/Hero";
import Feature1 from "../sections/scaleup/Feature1";
import Content1 from "../sections/scaleup/Content1";
import Feature2 from "../sections/scaleup/Feature2";
import Content2 from "../sections/scaleup/Content2";
import DesignatedTeam from "../sections/scaleup/DesignatedTeam";
// import Testimonial from "../sections/scaleup/Testimonial";
import ModalVideo from "../components/ModalVideo";
import Testimonial from "../sections/startpage/Testimonial";
import Pricing from "../sections/startpage/Pricing";
import CTA from "../sections/scaleup/CTA";

const ScaleUp = () => {
  return (
    <>
      <PageWrapper >
        <Hero />
        <Content1 />
        <Feature1 />
        <Feature2 />
        <DesignatedTeam />
        <ModalVideo url='https://www.youtube.com/watch?v=Iz-XLYvzXyU'></ModalVideo>
        <Content2 />
        <Testimonial />
        <Pricing />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default ScaleUp;
