import React from "react";

import styled from "styled-components";
import {startOfWeek, endOfWeek} from 'date-fns'

import {Container} from "./styles/Container";

const Border = styled.div`
  max-width: 740px;
  border-top: 1px solid gray;
  margin: 0 auto;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  
  .grid-item {
    text-align: center;
    padding: 25px 0 5px 0 ;
  }
`

const MonthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 35px;
`

export const DateBar: React.FC<{}> = props => {
    const date = new Date();

    const start = startOfWeek(date, {weekStartsOn: 1});
    const end = endOfWeek(date, {weekStartsOn: 1});

    date.getDate();
    console.log(date)

    return (
        <>
            <Border>
                <Container padding={'15px 0 15px 125px'}>
                    {/*TODO chang left padding*/}
                    <DateGrid>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                        <div className={'grid-item'}>1</div>
                    </DateGrid>
                    <MonthContainer>
                        <button>left</button>
                        June 2022
                        <button>rght</button>
                    </MonthContainer>
                </Container>
            </Border>
        </>
    );
};