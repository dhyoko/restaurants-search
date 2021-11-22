import styled from 'styled-components';

const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: white;
  border-left: 5px solid transparent;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const RestaurantPhoto = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 11px;
`;

const Rating = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

export { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto, RatingWrapper, Rating };
