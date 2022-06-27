import styled from "styled-components";

export const Container = styled.div<{padding : string}>`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: ${props => props.padding || "0 2rem"};
  background-color: white;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;