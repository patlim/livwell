import styled from 'styled-components';

const PricingContainer = styled.section`
  max-width: 650px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const PriceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PriceItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const AdditionalInfo = styled.p`
  font-style: italic;
`

const PricingSection = ({ heading, subheading, prices, additionalInformation }) => {
  return (
    <PricingContainer>
      <h2>{heading}</h2>
      <h5>{subheading}</h5>
      <PriceList>
        {prices.map((item, index) => (
          <PriceItem key={index}>
            <h4>{item.duration}</h4>
            <h4>£{item.price}</h4>
          </PriceItem>
        ))}
      </PriceList>
      {additionalInformation && <AdditionalInfo>{additionalInformation}</AdditionalInfo>}
    </PricingContainer>
  );
};

export default PricingSection;