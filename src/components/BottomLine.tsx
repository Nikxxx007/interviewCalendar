import React from "react";

import {Container, Flex} from "./styles/Container";

import {RedText} from "./styles/Fonts";

export const BottomLine: React.FC<{selected: boolean}> = props => {
    return (
        <>
           <Container padding={'30px 20px'}>
               <Flex>
                   <RedText>Today</RedText>
                   {/*TODO add onClick event*/}
                   {props.selected && <RedText>Delete</RedText>}
               </Flex>
           </Container>
        </>
    );
};