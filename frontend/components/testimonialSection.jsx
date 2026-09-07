import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 0;
`
const Testimonial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  background-color: #272E16;
  h4 {
    margin-top: 24px;
  }
`
const TestimonialSection = ({ testimonials }) => {
  return (
    <TestimonialsContainer>
      <Swiper
        spaceBetween={24}
        slidesPerView={1.2}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation]}
        navigation
        breakpoints={{
          '768': {
            slidesPerView: 1.8,
          },
          '1200': {
            slidesPerView: 2,
            spaceBetween: 128,
          }
        }}
      >
        {testimonials && testimonials.map(({testimonialText, authorName, authorDescription}, index) => (
          <SwiperSlide key={index}>
            <Testimonial>
              <h5>"{testimonialText}"</h5>
              <h4>{authorName}</h4>
              <p>{authorDescription}</p>
            </Testimonial>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsContainer>
  );
};

export default TestimonialSection;