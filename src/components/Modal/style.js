import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  rigth: 0;
  bot: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);

  z-index: 999;
`;

const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(100% - 144px);
    width: 600px;
    padding: 24px;
    background-color: #fff;
    box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.5)
    border-radius: 8px;
`;

export { Overlay, Dialog };
