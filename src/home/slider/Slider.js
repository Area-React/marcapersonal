import React from "react";
import HeroSlider, { Slide, MenuNav } from "hero-slider";
import "./slider.css";

// Images
const rockyWaterfall =
  "https://www.avianca.com/content/dam/avianca_new/destinos/mex/mx_mex_08_2880_1620.jpg";
const palauPacificOcean =
  "https://la.network/wp-content/uploads/2021/07/Emprendimientos-en-Bogota%CC%81.jpg";
const queposCostaRica =
  "https://www.avianca.com/content/dam/avianca_new/destinos/jfk/us_jfk_ciudad_2880_1620_01.jpg";
const mountainView =
  "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg";

export const Slider = () => {
  return (
    <div className="slider-test">
      <HeroSlider
        slidingAnimation="fade"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "#000",
          fontFamily: "Proxima Nova Reg",
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 8000,
          height: "100vh",
        }}
      >
        <Slide
          navDescription="Ciudad de México"
          background={{
            backgroundColor: "#2D7791",
            backgroundImage: rockyWaterfall,
          }}
        />

        <Slide
          navDescription="Bogotá"
          background={{
            backgroundColor: "#8A8A8A",
            backgroundImage: palauPacificOcean,
          }}
        />

        <Slide
          navDescription="New York"
          background={{
            backgroundColor: "#EA2329",
            backgroundImage: queposCostaRica,
          }}
        />

        <Slide
          navDescription="Buenos Aires"
          background={{
            backgroundColor: "#6D9B98",
            backgroundImage: mountainView,
          }}
        />

        <MenuNav />
      </HeroSlider>
    </div>
  );
};
