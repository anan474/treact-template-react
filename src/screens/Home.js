import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import MainFeature from "components/features/TwoColWithButton.js";

import Hero from "components/hero/TwoColumnWithInput.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <MainFeature
        subheading={<Subheading>Tentang Kami</Subheading>}
        heading={"PT. Catur Sakti Indonesia"}
        imageSrc={"https://amin05.github.io/assets/assets/images/slide1.jpg"}
        imageBorder={true}
        imageDecoratorBlob={true}
        primaryButtonText={"Selengkapnya"}
        primaryButtonUrl={"/about"}
        description={
          "Unlike other plugins, Flickity won't provide many responsive options and can perhaps fail in this aspect when compared to others. It also provides an option to add a show on full screen button which can come in handy."
        }
      />
      <Blog />
    </AnimationRevealPage>
  );
};
