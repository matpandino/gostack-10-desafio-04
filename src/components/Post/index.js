import React from 'react';

import {
  Container,
  PostHeaderContainer,
  PostContent,
  PostCommentContainer,
} from './styles';

function PostHeader({ author, date }) {
  return (
    <PostHeaderContainer>
      <img src={author.avatar} alt={author.name} />
      <div className="name-date">
        <h2>{author.name}</h2>
        <span>{date}</span>
      </div>
    </PostHeaderContainer>
  );
}

function PostComments({ comments }) {
  return (
    <>
      <div className="divider" />
      {comments.map(comment => (
        <PostCommentContainer>
          <img src={comment.author.avatar} alt={comment.author.name} />
          <div className="comment">
            <p>
              <span>{comment.author.name} </span>
              {comment.content}
            </p>
          </div>
        </PostCommentContainer>
      ))}
    </>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <Container>
      <PostHeader author={author} date={date} />
      <PostContent>{content}</PostContent>
      <PostComments comments={comments} />
    </Container>
  );
}

export default Post;
