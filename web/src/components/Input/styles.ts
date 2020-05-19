import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
  isFocused: boolean;
  isField: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--body-bg);
  border: 1px solid var(--border-color);
  margin-bottom: var(--space-xs);

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--error-color);
    `}


  ${(props) =>
    props.isFocused &&
    css`
      color: var(--primary-color);
      border-color: var(--primary-color);
    `}

  ${(props) =>
    props.isField &&
    css`
      color: var(--primary-color);
    `}

  input {
    background: transparent;
    border: none;
    padding: var(--space-sm);
    width: 100%;
    flex: 1;
    outline: none;
    color: var(--text-color);

    &::placeholder {
      color: var(--text-color-light);
    }

    &:focus {
      outline: none;
    }
  }

  & > svg {
    margin-right: var(--space-sm);
    margin-left: var(--space-sm);
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 15px;
  margin-right: 10px;

  svg {
    margin: 0;
  }

  span {
    background: var(--error-color);
    color: var(--white);

    &:before {
      border-top-color: var(--error-color);
    }
  }
`;
