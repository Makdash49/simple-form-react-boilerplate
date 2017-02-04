import styled from 'styled-components';

const Section = styled.section`
  margin: 3em auto;
  border-size:2px;
  border-style:solid;
  border-color:black;
  border-radius: 25px;
  width: 50%;
  height: 500px;
  background-color: #fafafa;


  &:first-child {
    margin-top: 100px;
  }
`;

export default Section;
