import React, { useEffect, useState } from 'react'

import {
  Container,
  Header,
  YearAndMonth,
  Icon,
  Month,
  SelectYear,
  Days,
  Day,
  Main,
  Number,
  Year,
  IconYear
} from './style'
import YearPagination from './YearPagination'

type Props = {
  currentDate: {
    year: string
    month: string
    day: string
  }
  setCurrentDate: (
    currentDate: {
      year: string
      month: string
      day: string
    }) => void;
};
type Day = string | number | null;

const Calendar = ({ currentDate, setCurrentDate }: Props) => {
  const [selectedYear, setSelectedYear] = useState(parseInt(currentDate.year));
  const [selectedMonth, setSelectedMonth] = useState(parseInt(currentDate.month) - 1);
  const [selectedDay, setSelectedDay] = useState<Day>(parseInt(currentDate.day));

  const [activeYear, setActiveYear] = useState(false);

  const days = ["Sun", "Mun", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  const getFebDays = (year: number) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 28;
    }
    return 27;
  }
  const [daysOfMonth, setDaysOfMonth] = useState([
    30,
    getFebDays(selectedYear),
    30,
    29,
    30,
    29,
    30,
    30,
    29,
    30,
    29,
    30
  ])
  const [monthDays, setMonthDays] = useState<(Day)[]>()
  useEffect(() => {
    let startDay = new Date(selectedYear, selectedMonth);
    let cont = 1;
    let tempDays = [];
    for (let i = 0; i < daysOfMonth[selectedMonth] + startDay.getDay() + 1; i++) {
      if (i >= startDay.getDay()) {
        tempDays.push(cont);
        cont++;
      } else {
        tempDays.push(null);
      }
    }
    setMonthDays(tempDays);
   
  }, [selectedMonth, selectedYear, selectedDay])

  const changeMonth = (type: string) => {
    setSelectedDay("");
    if (type === "next") {
      if (selectedMonth === 11) {
        setSelectedMonth(0)
        if (0 === parseInt(currentDate.month) - 1) {
          setSelectedDay(parseInt(currentDate.day));
        }
      } else {
        setSelectedMonth(selectedMonth + 1);
        if (selectedMonth + 1 === parseInt(currentDate.month) - 1) {
          setSelectedDay(parseInt(currentDate.day));
        }
      }
      return;
    }
    if (selectedMonth === 0) {
      setSelectedMonth(11)
      if (11 === parseInt(currentDate.month) - 1) {
        setSelectedDay(parseInt(currentDate.day));
      }
    } else {
      setSelectedMonth(selectedMonth - 1);
      if (selectedMonth - 1 === parseInt(currentDate.month) - 1) {
        setSelectedDay(parseInt(currentDate.day));
      }
    }

  }

  const saveDate = (day: Day) => {
    setSelectedDay(day);
    setCurrentDate({
      year: `${selectedYear}`,
      month: selectedMonth + 1 >= 10 ? `${selectedMonth + 1}` : `0${selectedMonth + 1}`,
      day: day != null && day >= 10 ? `${day}` : `0${day}`,
    })
  }

  return (
    <Container activeYear={activeYear}>
      <Header activeYear={activeYear}>
        <YearAndMonth>
          <Icon onClick={() => changeMonth("prev")} className="left" src="arrow.svg" />
          <Month>
            {months[selectedMonth]}
          </Month>
          <SelectYear onClick={() => setActiveYear(!activeYear)}>
            <IconYear activeYear={activeYear} className="bottom" src="arrowBottomWhite.svg" />
            {selectedYear}
          </SelectYear>
          <Icon onClick={() => changeMonth("next")} className="right" src="arrow.svg" />
        </YearAndMonth>
        {activeYear &&
          <Year>
            <YearPagination getFebDays={getFebDays}
              setDaysOfMonth={setDaysOfMonth}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
          </Year>
        }
        <Days>
          {days && days.map((day, index) => (
            <Day key={index}>{day}</Day>
          ))}
        </Days>
      </Header>
      <Main>
        {monthDays && monthDays.map((day, index) => (
          day === selectedDay ?
            <Number className="selected" key={index}>{day}</Number>
            :
            <Number onClick={() => saveDate(day)} key={index}>{day}</Number>
        ))}
      </Main>
    </Container>
  )
}

export default Calendar