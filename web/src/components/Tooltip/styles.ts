import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: var(--primary-color);
    padding: 8px;
    border-radius: 4px;
    font-size: var(--text-small);
    color: var(--white);
    text-align: center;

    opacity: 0;
    transition: opacity 0.2s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translate(-50%, 0);

    &:before {
      content: '';
      border: 6px solid transparent;
      border-top-color: var(--primary-color);

      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
