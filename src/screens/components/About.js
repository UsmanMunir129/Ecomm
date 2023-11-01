import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./style/Button";
import Trusted from "./Trusted";
import Services from "./Services";

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> Cuircon Fit </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
              quaerat! Voluptate error accusantium maxime. Mollitia, consectetur
              fugiat hic molestiae ullam quidem cum sequi repellat, recusandae
              modi magnam, consequatur optio accusantium necessitatibus? Quaerat
              voluptatibus adipisci rem veniam obcaecati corrupti aperiam
              inventore rerum assumenda laboriosam. Doloribus vel, voluptates
              officia ipsa nihil asperiores ipsam earum illo eveniet fugit
              obcaecati fuga eum iste cumque. Expedita explicabo eos autem
              perferendis nisi. Fugiat, praesentium ab illum ea, ipsam deleniti
              ducimus voluptate labore a, impedit commodi aperiam. Quibusdam
              repellendus nam numquam similique? Aliquid aliquam magnam
              similique. Esse nulla unde, dolores est repellendus atque
              laboriosam fugiat maxime pariatur distinctio necessitatibus
              explicabo officiis, repellat labore optio. Dolorum laboriosam
              temporibus aliquid sunt ducimus! Nam et dignissimos odit amet,
              veniam nulla eaque pariatur placeat aperiam eligendi, voluptate
              alias cupiditate.
            </p>
            <NavLink href="/">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="https://finegarment.com/wp-content/uploads/2020/08/car-racing-mobile.png"
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
      <Trusted />
      <Services />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  img {
    min-width: 8rem;
    height: 8rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
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
      height: 95%;
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

export default About;
