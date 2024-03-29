import {Cell, Day, CellTop, AddSchedule} from 'asset/CalendarCells';
import { GoPlus } from "react-icons/go";
import { useState } from 'react';
import { format } from 'date-fns';
import { motion } from "framer-motion";
import { CellObject } from 'model/Cell';
import { Tag } from 'model/Tag';

interface Props {
    day : CellObject;
    index : number;
    onDateClick(day: CellObject): void
}

export const CalendarCell = ({day, index, onDateClick} : Props) => {
    const [isHover, setHover] = useState<boolean>(false);
 
    return (
        <>
            <Cell key={index} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} cellbg={day.isCurrentMoth()}>
                <CellTop>
                    <AddSchedule isHover={isHover} onClick={() => onDateClick(day)}>
                        <motion.button><GoPlus/></motion.button>
                    </AddSchedule>
                    <Day cellColor={day.isCurrentMoth()}>{format(day.startDate, 'd') === "1" ? format(day.startDate, 'M월 d일') : format(day.startDate, 'd')}</Day>
                </CellTop>
            </Cell>
        </>
    )
}