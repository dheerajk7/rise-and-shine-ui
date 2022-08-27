import styled from 'styled-components';

const StyledMobileContainer = styled.div`
  font-size: 1.5em;
  text-align: center;
  background: var(--header-background);
`;

function MobileContainer() {
  return <StyledMobileContainer>Mobile Container</StyledMobileContainer>;
}

export default MobileContainer;
