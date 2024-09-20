import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  max-width: 800px;
`
const Testimonial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 650px;
  padding: 64px;
  text-align: center;
  h4 {
    margin-bottom: 14px;
  }
`
const TestimonialSection = ({ testimonials }) => {
  return (
    <TestimonialsContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        modules={[Navigation]}
        navigation
      >
        {testimonials.map(({testimonialText, authorName, authorDescription}, index) => (
          <SwiperSlide key={index}>
            <Testimonial>
              <h4>"{testimonialText}"</h4>
              <h5>{authorName}</h5>
              <p>{authorDescription}</p>
            </Testimonial>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsContainer>
  );
};

export default TestimonialSection;