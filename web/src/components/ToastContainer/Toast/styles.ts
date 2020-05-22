import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: var(--info-color);
    border-color: var(--info-color);
  `,
  success: css`
    background: #e6fffa;
    color: var(--success-color);
    border-color: var(--success-color);
  `,
  error: css`
    background: #fddede;
    color: var(--error-color);
    border-color: var(--error-color);
  `,
};

export const Container = styled.div<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid;

  display: flex;

  ${(props) => toastTypeVariations[props.type || 'info']};

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
    `}

  & + & {
    margin-top: var(--space);
  }

  & > svg {
    margin: 0 12px 0 0;
  }
`;

export const Content = styled.div`
  flex: 1;

  p {
    margin-top: 4px;
    font-size: 14px;
    opacity: 0.8;
    line-height: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 15px;
  opacity: 0.6;
  border: 0;
  background: transparent;
  color: inherit;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;
