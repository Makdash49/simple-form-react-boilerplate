import styled from 'styled-components';

const Section = styled.section`
  margin: 3em auto;
  border-size:2px;
  border-style:solid;
  border-color:black;
  width: 50%;
  height: 500px;
  border-radius: 25px;

  &:first-child {
    margin-top: 100px;
  }
`;

export default Section;
