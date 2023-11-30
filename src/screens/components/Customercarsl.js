// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./customercarsl.css";

// const images = [
//   {
//     id: 1,
//     image: [require("../../assets/color-selection.png")],
//     heading: "Custom Design and Manufacturing",
//     Description:
//       "Collaborate with racewear brands to create custom designs for racing suits, gloves, boots, and other gear. Utilize advanced materials and technologies to ensure the highest level of performance and safety",
//   },
//   {
//     id: 2,
//     image: [require("../../assets/sample.png")],
//     heading: "Prototyping and Sampling",
//     Description:
//       "Develop prototypes and samples for racewear products to allow brands to evaluate and test the designs before full-scale production.",
//   },
//   {
//     id: 3,
//     image: [require("../../assets/onlin.png")],
//     heading: "Technical Consultation",
//     Description:
//       "Provide technical expertise in materials, construction techniques, and safety standards to ensure that racewear meets industry regulations and standards.",
//   },
//   {
//     id: 4,
//     image: [require("../../assets/supply.png")],
//     heading: "Supply Chain Management",
//     Description:
//       "Manage the supply chain efficiently to ensure timely production and delivery of racewear products.",
//   },
//   {
//     id: 5,

//     image: [require("../../assets/earth.png")],
//     heading: "Sustainability Practices",
//     Description:
//       "Integrate sustainable and eco-friendly practices in manufacturing processes and materials to appeal to environmentally conscious racewear brands",
//   },
//   {
//     id: 6,
//     image: [require("../../assets/container.png")],
//     heading: "Logistics and Distribution",
//     Description:
//       "Assist in logistics and distribution to ensure that racewear products reach their destinations in a timely and cost-effective manner.",
//   },
//   {
//     id: 7,
//     image: [require("../../assets/compliant.png")],
//     heading: "Compliance and Certification",
//     Description:
//       "Ensure that racewear products meet industry regulations and obtain necessary certifications for safety and quality.",
//   },
//   {
//     id: 8,
//     image: [require("../../assets/analytics.png")],
//     heading: "Research and Development",
//     Description:
//       "Invest in ongoing research and development to stay ahead of industry trends, technological advancements, and innovations in racewear design and materials",
//   },
//   {
//     id: 9,
//     image: [require("../../assets/online-training.png")],
//     heading: "Education and Training",
//     Description:
//       "Provide training sessions or educational resources for racewear brands to keep them informed about the latest developments in materials, safety standards, and design techniques.",
//   },
// ];

// //Owl Carousel Package Styling Properties
// const options = {
//   center: true,
//   margin: 25,
//   responsiveClass: true,
//   dots: false,
//   autoplay: false,
//   smartSpeed: 1000,
//   navText: [
//     "<i class='fa fa-angle-left' aria-hidden='true'></i>",
//     "<i class='fa fa-angle-right' aria-hidden='true'></i>",
//   ],

//   responsive: {
//     0: {
//       items: 1,
//     },
//     400: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     700: {
//       items: 3,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// };

// const Customercarsl = () => {
//   return (
//     <>
//       <div className="cardsmaincont1 my-5 py-3">
//         <div>
//           <h2 className="text-center text-white my-5">SERVICES</h2>
//         </div>
//         <OwlCarousel
//           className="owl-theme my-3"
//           {...options}
//           loop
//           items={1}
//           margin={10}
//           nav
//         >
//           {images.map((step, index) => (
//             <div key={step.id} className="container item cards1 py-4 my-5">
//               <div className="cont11 mt-3">
//                 <h3 className="heading2">{step.heading}</h3>
//                 <p className="desc2">{step.Description}</p>
//               </div>
//               <div className="cont22 d-flex align-items-center justify-content-center">
//                 <img
//                   src={step.image}
//                   className="img-fluid cardbotmimg object-fit-cover"
//                   alt="Cuircon International"
//                 />
//               </div>
//             </div>
//           ))}
//         </OwlCarousel>
//       </div>
//     </>
//   );
// };

// export default Customercarsl;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./customercarsl.css";

const testiMonials = [
  {
    name: "Rekob Ramya",
    description:
      "We want to express our gratitude for the outstanding partnership with Cuircon in supplying premium race wear to our brand. The quality, innovation, and timely delivery of your products have significantly enhanced our offerings. Your commitment to excellence aligns seamlessly with our brand ethos, making Cuircon International a pivotal contributor to our success in the competitive market. We look forward to continuing this fruitful collaboration",
    address: "USA",
    img: "https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg",
  },
  {
    name: "Brandon Savage",
    description:
      "We extend our sincerest appreciation for the remarkable B2B collaboration. Your commitment to crafting cutting-edge race wear has not only met but exceeded our expectations. The exceptional quality, attention to detail, and reliability in meeting deadlines have been instrumental in enhancing our brand's credibility and performance. Here's to continued success through our valued partnership.",
    address: "USA",
    img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
  },
  {
    name: "Steve Burns",
    description:
      "We would like to express our heartfelt gratitude for the outstanding B2B relationship we've cultivated. Your dedication to delivering top-tier race wear has significantly elevated our brand's image and performance in the market. The seamless collaboration, unmatched quality, and on-time deliveries have been instrumental in our joint success. We look forward to many more milestones together",
    address: "USA",
    img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
  },
  {
    name: "Kevin Canlas",
    description:
      "We want to extend our deepest appreciation for the exceptional B2B collaboration. Your commitment to providing high-quality race wear has played a pivotal role in enhancing our brand's identity and customer satisfaction. The seamless communication, attention to detail, and adherence to timelines showcase Cuircon's dedication to excellence. We are truly grateful for the positive impact on our business and eagerly anticipate a continued successful partnership",
    address: "USA",
    img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
  },
];
const Customercarsl = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    // autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <div className="row cardsmaincont1">
        <div className="col-md-12">
          <div>
            <h2 className="text-center text-white my-5">
              See how others transformed their brands with on-demand fulfillment
            </h2>
          </div>
          <OwlCarousel
            id="customer-testimonoals"
            className="owl-carousel owl-theme"
            {...options}
          >
            {testiMonials.map((step, index) => (
              <div key={step.id} className="item ">
                <div className="shadow-effect">
                  <img
                    className="img-circle img-fluid"
                    src={step.img}
                    alt="Cuircon Intl"
                  />
                  <h5 className="text-white customerdesc ">
                    {step.description}
                  </h5>
                </div>
                <div className="testimonial-name">
                  <h5>{step.name}</h5>
                  <small>{step.address}</small>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Customercarsl;
