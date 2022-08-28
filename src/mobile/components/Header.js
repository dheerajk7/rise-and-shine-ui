import styled from 'styled-components';
import { NavBar, Avatar } from 'antd-mobile';
import Logo from '../../assets/images/logo_2.png';

const StyledHeader = styled.div`
  background: var(--body-background);
  height: 55px;
  & > div {
    background: var(--header-background);
    justify-content: space-between;
    position: fixed;
    width: 94%;
  }
  .adm-nav-bar-left {
    display: none;
  }
  .adm-nav-bar-title {
    justify-content: flex-start;
    padding: 0px;
    flex: none;
  }
  .adm-nav-bar-right {
    flex: 0;
  }
  .adm-nav-bar-right .adm-image {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .adm-nav-bar-right .adm-image-img {
    width: 80%;
    height: 80%;
    border-radius: 50%;
  }
  .adm-nav-bar-right .rise {
    color: #660708;
    font-weight: bold;
  }
  .adm-nav-bar-title .adm-image {
    width: 80px;
  }
`;

function Header() {
  const rightSection = (
    <Avatar src="https://avatars.githubusercontent.com/u/31450158?s=400&u=f6d5c5ba14c6e644feef322c99dc378f00ea2bab&v=4" />
  );

  return (
    <StyledHeader>
      <NavBar right={rightSection}>
        <Avatar src={Logo} />
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
