import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
`;

const Search = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

const Logo = styled.img`
  margin-bottom: 15px;
  align-self: center;
`;

const Map = styled.div`
  height: 100vh;
  width: 100%;
`;

const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

const RestaurantCardScroll = styled.div`
  height: calc(100vh - 330px);
  margin-top: 20px;
  overflow-y: auto;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Wrapper, Container, Search, Logo, Map, CarouselTitle, RestaurantCardScroll, ModalWrapper };
