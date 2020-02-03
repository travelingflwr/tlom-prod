import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 120vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 1;
    top: 0;
  }
`;


export default Wrapper;
