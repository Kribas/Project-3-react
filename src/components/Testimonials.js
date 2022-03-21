import React from "react";
import './Testimonials.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CarouselItem from "./CarouselItem";
import Testimonial1 from '../images/testimonials-1.jpg'
import Testimonial2 from '../images/testimonials-2.jpg'
import Testimonial3 from '../images/testimonials-3.jpg'
import Testimonial4 from '../images/testimonials-4.jpg'
import Testimonial5 from '../images/testimonials-5.jpg'


export default function Testimonials(props) {

  const options = {
        items: 3,
        loop: true,
        dotsEach: true,
        autoplay: true,
        responsiveClass:true,
        responsive:{

          0:{
  
              items:1
  
          },
  
          600:{
  
              items:1
  
          },
  
          1000:{
  
              items:3,
  
              loop:true
  
          }
  
      }
  }
    
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials__title text-center">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className="testimonials__body">
          <OwlCarousel className="owl-theme" {...options}>
            <div class="item">
              <CarouselItem testimonial="
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  " image={Testimonial1} name="Saul Goodman" title="CEO & Founder"/>
            </div>
            <div class="item">
              <CarouselItem testimonial="
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  " image={Testimonial2} name="Saul Goodman" title="CEO & Founder"/>
            </div>
            <div class="item">
            <CarouselItem testimonial="
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  " image={Testimonial3} name="Saul Goodman" title="CEO & Founder"/>
            </div>
            <div class="item">
            <CarouselItem testimonial="
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  " image={Testimonial4} name="Saul Goodman" title="CEO & Founder"/>
            </div>
            <div class="item">
            <CarouselItem testimonial="
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  " image={Testimonial5} name="Saul Goodman" title="CEO & Founder"/>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
