import React from 'react'
import { Container, Icon, Item } from './style'

type Props = {
  selectedYear: number
  setSelectedYear: (year: number) => void;
  setDaysOfMonth: (year: number[]) => void;
  getFebDays: (year: number) => number
}
const YearPagination = ({ getFebDays, selectedYear, setSelectedYear, setDaysOfMonth }: Props) => {
  const numberOfYears = 10000;
  const MAX_ITEMS = 5;
  const maxLeft = (MAX_ITEMS - 1) / 2;

  const current = selectedYear - 1

  const handleYear = (year: number) => {
    setDaysOfMonth([
      30,
      getFebDays(year),
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
    console.log(getFebDays(year))
    setSelectedYear(year)
  }

  const maxFirst = Math.max(numberOfYears - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(current - (maxLeft - 1), 1),
    maxFirst
  );
  return (
    <Container>
      <Icon onClick={() => handleYear(selectedYear - 1)} className="left" src="arrow.svg" />
      {Array.from({ length: Math.min(MAX_ITEMS, numberOfYears) })
        .map((_, index) => index + first)
        .map((year) => (
          <Item isActive={current === (year - 1)}
            onClick={() => handleYear((year))}
            key={year}>
            {year}
          </Item>
        ))
      }
      <Icon onClick={() => handleYear((selectedYear + 1))} className="right" src="arrow.svg" />
    </Container>
  )
}

export default YearPagination