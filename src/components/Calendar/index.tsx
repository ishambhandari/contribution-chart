import React, { useEffect, useState } from 'react'
import './styles.css';

export interface CalendarProps {
    contributionColor: string,
    nonContributionColor: string,
    size: string | '12px'
}

const Calendar: React.FC<CalendarProps> = ({ contributionColor, nonContributionColor, size }) => {

    const daysInMonth = (year: number, month: number): number => {
        return new Date(year, month + 1, 0).getDate();
    }

    const CalendarDays = () => {

        let dayComponents: JSX.Element[] = [];

        const currentDate: Date = new Date();
        const oneYearAgo: Date = new Date(currentDate);
        oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
        const dateIterator: Date = new Date(oneYearAgo);

        while (dateIterator <= currentDate) {
            const formattedDate: string = dateIterator.toISOString().slice(0, 10);
            let hasContributed = Math.random() < 0.5;

            dayComponents.push(
                <div style={{ backgroundColor: hasContributed ? contributionColor : nonContributionColor, width: size, height: size }} className='day' key={formattedDate}>
                    <span className="date-tooltip">{formattedDate}<br />12 Contributions</span>
                </div>
            )

            dateIterator.setDate(dateIterator.getDate() + 1);
        }

        return dayComponents;
    };

    return (
        <div className='chart' style={{ marginTop: 100, marginLeft: 20, marginRight: 20 }}>
            {CalendarDays()}
        </div>
    )
}

export default Calendar

