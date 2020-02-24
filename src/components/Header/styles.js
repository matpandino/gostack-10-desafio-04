import styled from 'styled-components';

export const Container = styled.div`
  background-color: #4a90e2;
  height: 64px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 42px;

  span {
    color: #fff;
    font-size: 15px;
    font-weight: bold;

    display: flex;
    align-items: center;

    svg {
      background: #fff;
      border: 2.5px solid #fff;
      border-radius: 50%;

      margin-left: 10px;
    }
  }
`;
