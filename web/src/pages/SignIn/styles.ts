import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';

const AnimationForm = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 80%;
  width: 400px;
  animation: ${AnimationForm} 1s;

  form {
    display: flex;
    flex-direction: column;
    margin: var(--space) 0;
    align-items: center;
    width: 100%;
  }

  & > a {
    display: block;
    text-align: right;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    span {
      margin-left: var(--space-xs);
    }
  }
`;
