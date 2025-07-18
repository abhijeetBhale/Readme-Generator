import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-3">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader-3 {
    width: 10em;
    display: flex;
    justify-content: space-evenly;
  }

  .circle {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
  }

  .circle:nth-child(1) {
    background-color: #90be6d;
  }

  .circle:nth-child(2) {
    background-color: #f9c74f;
  }

  .circle:nth-child(3) {
    background-color: #f8961e;
  }

  .circle:nth-child(4) {
    background-color: #f3722c;
  }

  .circle:nth-child(5) {
    background-color: #f94346;
  }

  .circle::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
    animation: animateLoader38 2s ease-out infinite;
  }

  .circle:nth-child(1)::before {
    background-color: #90be6d;
  }

  .circle:nth-child(2)::before {
    background-color: #f9c74f;
    animation-delay: 0.2s;
  }

  .circle:nth-child(3)::before {
    background-color: #f8961e;
    animation-delay: 0.4s;
  }

  .circle:nth-child(4)::before {
    background-color: #f3722c;
    animation-delay: 0.6s;
  }

  .circle:nth-child(5)::before {
    background-color: #f94346;
    animation-delay: 0.8s;
  }

  @keyframes animateLoader38 {
    0% {
      transform: scale(1);
    }

    50%,
    75% {
      transform: scale(2.5);
    }

    80%,
    100% {
      opacity: 0;
    }
  }`;

export default Loader;
