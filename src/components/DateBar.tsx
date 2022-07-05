import React, {useState} from "react";

import styled from "styled-components";
import {startOfWeek, endOfWeek} from 'date-fns';
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

import {Container} from "./styles/Container";

const Border = styled.div`
  max-width: 740px;
  border-top: 1px solid gray;
  margin: 0 auto;
`;

const DateGrid = styled.div`
  display: grid;
  max-width: 585px;
  width: 100%;
  margin-left: auto;
  grid-template-columns: repeat(7, 1fr);
  
  .grid-item {
    text-align: center;
    padding: 25px 0 5px 0 ;
  }
`

const MonthContainer = styled.div`
  max-width: 585px;
  width: 100%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  padding: 30px 35px;
`

export const DateBar: React.FC<{}> = props => {
    const [date, setDate] = useState(new Date());
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const start = startOfWeek(date, {weekStartsOn: 1});
    const end = endOfWeek(date, {weekStartsOn: 1});

    const startMonth = months[start.getMonth()] + ' ' + start.getFullYear();
    const endMonth = months[end.getMonth()] + ' ' + end.getFullYear();

    const displayMonth = startMonth === endMonth ? startMonth : startMonth + '/' + endMonth;

    function addDays(date: Date, days: number) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    const currentWeek = [];
    for (let i = start; i.getDate() !== addDays(end, 1).getDate(); i = addDays(i, 1)) {
        currentWeek.push(<div key={i.toString()} className={'grid-item'}>{i.getDate()}</div>)
    }

    const setWeek = (value: number) => {
        let newDate = addDays(date, value);
        setDate(newDate);
    }

    return (
        <>
            <Border>
                <Container padding={'15px 0 15px 125px'} backgroundColor={'lightgray'}>
                    {/*TODO change left padding*/}
                    {/*TODO make grid move with dates*/}
                    <DateGrid>
                        <div className={'grid-item'}>M</div>
                        <div className={'grid-item'}>T</div>
                        <div className={'grid-item'}>W</div>
                        <div className={'grid-item'}>T</div>
                        <div className={'grid-item'}>F</div>
                        <div className={'grid-item'}>S</div>
                        <div className={'grid-item'}>S</div>
                        {currentWeek}
                    </DateGrid>
                    <MonthContainer>
                        <BiChevronLeft onClick={() => setWeek(-7)} color={'red'} size={'25px'}/>
                        {displayMonth}
                        <BiChevronRight onClick={() => setWeek(7)} color={'red'} size={'25px'}/>
                    </MonthContainer>
                </Container>
            </Border>
        </>
    );
};