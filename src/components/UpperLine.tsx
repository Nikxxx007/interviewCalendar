import React from 'react';

import {AiOutlinePlus} from 'react-icons/ai';

import {Container, Flex} from "./styles/Container";
import {Header} from "./styles/Fonts";

export const UpperLine: React.FC = () => {
    return (
        <>
            <Container padding={'30px 20px'}>
                <Flex>
                    <Header>Interview Calendar</Header>
                    <AiOutlinePlus
                        color={'red'} size={'30px'}/>
                    {/*TODO add onClick event*/}
                </Flex>
            </Container>
        </>
    );
}
