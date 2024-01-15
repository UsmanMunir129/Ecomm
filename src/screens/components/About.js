import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./style/Button";

const Aboutus = () => {
  return (
    <Wrapper>
      <div className="mx-5">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Racing Through Decades: </p>
            <h2>The Unstoppable Journey of Cuircon International</h2>
            <p>
              In the heart of Sialkot, Pakistan, a humble garage in 1992
              transformed into a global powerhouse of motorsports excellence,
              giving birth to Cuircon International. What started as a dream
              shared among a group of passionate experience Brothers has now
              evolved into a legacy that spans three glorious decades. The
              journey began with a relentless pursuit of perfection in every
              stitch, every seam, and every design. From the early days of
              crafting custom suits for international racers to becoming the
              leading manufacturer worldwide, Cuircon International has carved
              its niche in the motorsports, kart, and mechanic wear industry.
              <br /> As the years unfolded, the commitment to quality and
              innovation propelled Cuircon International to the forefront of the
              industry. The workshop that once echoed with the sounds of revving
              engines and clinking tools has transformed into a state-of-the-art
              manufacturing facility, buzzing with the energy of skilled
              craftsmen and cutting-edge technology. <br /> In the world of
              motorsports wear, Cuircon International has become synonymous with
              excellence. The product line, spanning suits, gloves, shoes,
              undergarments, and accessories, is a testament to the company's
              dedication to outfitting racers with the finest gear. Each product
              is a fusion of performance, style, and comfort, meticulously
              designed to meet the demands of the most elite athletes on the
              track. <br /> Cuircon International proudly exports its creations
              to the discerning markets of the USA, Europe, and the UK,
              showcasing the craftsmanship that has become a hallmark of the
              brand. Collaborating with top brands in the motorsports industry,
              Cuircon International has woven a network of partnerships that
              extends beyond borders, bringing the thrill of high-performance
              wear to enthusiasts worldwide. <br /> As the company looks back at
              its incredible journey, it also looks forward with a vision to
              continually innovate and set new standards. The legacy of Cuircon
              International is not just about the garments it produces but the
              stories it weaves, connecting racers, mechanics, and enthusiasts
              across the globe in a shared passion for speed and excellence.
              <br /> So, whether it's the roar of engines on the racetrack or
              the quiet hum of a sewing machine in the workshop, Cuircon
              International remains dedicated to fueling the adrenaline of
              motorsports and dressing champions for success—because in the
              world of high-speed pursuits, there's no finish line for
              innovation.
            </p>
            <NavLink to="/Suits">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          {/* our About image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src={require("../../assets/instagram link.jpg")}
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
      {/* <Trusted />
      <Services /> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  img {
    min-width: 8rem;
    height: 9rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      color: black;
      font-size: clamp(14.8px, 1.2vw, 23px);
      font-weight: 600;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 53%;
      background-color: gray;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default Aboutus;
