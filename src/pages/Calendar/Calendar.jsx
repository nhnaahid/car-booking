import { useLoaderData } from "react-router-dom";

import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek, createViewDay, createViewMonthGrid } from "@schedule-x/calendar";
import '@schedule-x/theme-default/dist/calendar.css'
import { createEventsServicePlugin } from "@schedule-x/events-service";

const CalendarPage = () => {
    const allEvents = useLoaderData();
    // console.log("Loaded events: ", allEvents);

    let calendarEvents = [];
    let id = 1;
    for (let key in allEvents) {
        allEvents[key].events.forEach(elem => {
            const event = {
                id: id++,
                start: elem.date,
                end: elem.date,
                title: elem.title,
                calendarId: key === 'england-and-wales' ? 'personal' : key === 'scotland' ? 'work' : 'leisure',
            }
            calendarEvents.push(event);
        });
    }


    // console.log(calendarEvents);

    // const demoEvent = [
    //     {
    //         id: 1
    //         title: 'Event 1',
    //         start: '2025-01-20',
    //         end: '2025-01-20',
    //     }
    // ]

    const calendar = useCalendarApp({
        views: [
            createViewMonthGrid(),
            createViewDay(),
            createViewWeek(),
        ],
        defaultView: createViewMonthGrid,
        events: calendarEvents,
        plugins: [
            createEventsServicePlugin(),
        ],

        calendars: {
            personal: {
                colorName: 'personal',
                lightColors: {
                    main: '#f9d71c',
                    container: '#fff5aa',
                    onContainer: '#594800',
                },
                darkColors: {
                    main: '#fff5c0',
                    onContainer: '#fff5de',
                    container: '#a29742',
                },
            },
            work: {
                colorName: 'work',
                lightColors: {
                    main: '#f91c45',
                    container: '#ffd2dc',
                    onContainer: '#59000d',
                },
                darkColors: {
                    main: '#ffc0cc',
                    onContainer: '#ffdee6',
                    container: '#a24258',
                },
            },
            leisure: {
                colorName: 'leisure',
                lightColors: {
                    main: '#1c7df9',
                    container: '#d2e7ff',
                    onContainer: '#002859',
                },
                darkColors: {
                    main: '#c0dfff',
                    onContainer: '#dee6ff',
                    container: '#426aa2',
                },
            },
        },
    });


    return (
        <div className="mb-16">
            <ScheduleXCalendar calendarApp={calendar}></ScheduleXCalendar>
        </div>
    );
};

export default CalendarPage;