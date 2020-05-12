import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--body-bg);
  border: 1px solid var(--border-color);
  margin-bottom: var(--space-xs);

  input {
    background: transparent;
    border: none;
    padding: var(--space-sm);
    width: 100%;
    flex: 1;

    &::placeholder {
      color: var(--text-color);
    }
  }

  & > svg {
    margin-right: var(--space-sm);
    margin-left: var(--space-sm);
  }
`;
