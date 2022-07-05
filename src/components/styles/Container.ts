import styled from "styled-components";

interface ContainerProps {
    padding?: string;
    backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: ${props => props.padding || "0 2rem"};
  background-color: ${props => props.backgroundColor || 'white'};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;