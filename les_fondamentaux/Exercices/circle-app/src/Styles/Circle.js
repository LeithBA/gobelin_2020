import styled, { keyframes } from 'styled-components';

const Circle = ({ number, color }) => (
  <StyledCircle>
    <circle
      className="path"
      cx="50"
      cy="50"
      r="25"
      fill={color}
      strokeWidth="4"
    />
    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle">
      {number}
    </text>
  </StyledCircle>
);

const Animation = keyframes`
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
`;

const StyledCircle = styled.svg`
  animation: ${Animation} 1.0s ease-in-out infinite;
  width: 100px;
  height: 100px;

  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;


export default Circle;
