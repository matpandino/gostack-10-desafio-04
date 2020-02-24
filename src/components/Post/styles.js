import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffff;

  display: flex;
  flex-direction: column;

  flex: 1;

  padding: 20px;

  width: 100%;
  max-width: 700px;

  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.12);

  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;

    border-radius: 50%;
  }

  .divider {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background: #eeeeee;
  }
`;

export const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .name-date {
    margin-left: 10px;
  }

  h2 {
    color: #4a4a4a;
    font-size: 14px;
  }

  span {
    color: #9a9a9a;
    font-size: 11px;
  }
`;

export const PostContent = styled.p`
  color: #3e3e3e;
  font-size: 14px;
  margin-top: 20px;
`;

export const PostCommentContainer = styled.div`
  display: flex;

  margin-top: 10px;

  .comment {
    margin-left: 10px;

    background-color: #eeee;
    border-radius: 25px;
    padding: 15px;

    color: #3e3e3e;
    font-size: 13px;
    line-height: 20px;

    span {
      font-weight: bold;
    }
  }
`;
