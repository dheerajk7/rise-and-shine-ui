import styled from 'styled-components';
import { Header } from './components';

const StyledMobileContainer = styled.div`
  font-size: 1.5em;
  text-align: center;
  background: var(--header-background);
`;

function MobileContainer() {
  return (
    <StyledMobileContainer>
      <Header />
    </StyledMobileContainer>
  );
}

export default MobileContainer;
