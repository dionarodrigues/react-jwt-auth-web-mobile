import styled, { css } from 'styled-components';

interface ContainerProps {
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
