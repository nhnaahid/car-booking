import { GrCalendar } from "react-icons/gr";
import { IoIosGitNetwork } from "react-icons/io";
import { LuCalendarCheck2 } from "react-icons/lu";
import { NavLink, useLoaderData } from "react-router-dom";

import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek, createViewDay, createViewMonthGrid } from "@schedule-x/calendar";
import '@schedule-x/theme-default/dist/calendar.css'
import { createEventsServicePlugin } from "@schedule-x/events-service";

const CalendarPage = () => {
    const allEvents = useLoaderData();
    const events = allEvents["england-and-wales"].events
    // console.log("Loaded events: ", events);

    let calendarEvents = [];
    let id = 1;
    events.forEach(elem => {
        const event = {
            id: id++,
            start: elem.date,
            end: elem.date,
            title: elem.title
        }
        calendarEvents.push(event);
    });

    console.log(calendarEvents);

    // const demo = [
    //     {
    //         title: 'Event 1',
    //         start: '2025-01-20',
    //         end: '2025-01-20',
    //         id: 1
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
        selectedDate: "2025-01-01",
        plugins: [
            createEventsServicePlugin(),
        ],
    });


    return (
        <div className="flex gap-5">
            {/* sidebar */}
            <div className="w-48 h-screen border p-3 space-y-7 text-gray-700">
                <NavLink className="flex items-center gap-2 border rounded-lg p-2"><GrCalendar className="text-xl" /><span>Calendar</span></NavLink>
                <NavLink className="flex items-center gap-2 border rounded-lg p-2"><LuCalendarCheck2 className="text-xl" /><span>Add Booking</span></NavLink>
                <NavLink className="flex items-center gap-2 border rounded-lg p-2"><IoIosGitNetwork className="text-xl rotate-90" /><span>Workflows</span></NavLink>
            </div>

            {/* Main content */}
            <div className="border flex-1">
                <ScheduleXCalendar calendarApp={calendar}></ScheduleXCalendar>
            </div>
        </div>
    );
};

export default CalendarPage;
