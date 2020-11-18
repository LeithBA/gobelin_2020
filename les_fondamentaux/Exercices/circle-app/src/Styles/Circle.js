import styled from 'styled-components';

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

const StyledCircle = styled.svg`
  width: 100px;
  height: 100px;

  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
  }
  }
`;

export default Circle;
