import { NavLink, Outlet } from "react-router-dom";
import { GrCalendar } from "react-icons/gr";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoIosGitNetwork } from "react-icons/io";

const LayoutWithSideBar = () => {
    return (
        <div className="flex mt-8">

            {/* sidebar */}
            <aside className="w-48 h-screen px-1 lg:px-3 space-y-5 text-gray-700 hidden md:block bg-white">
                <NavLink to="/" className="flex items-center gap-1 rounded-lg p-2 hover:bg-base-300"><GrCalendar className="lg:text-lg" /><span className="text-sm lg:text-md ">Calendar</span></NavLink>
                <NavLink to='/add-booking' className="flex items-center gap-1 rounded-lg p-2 hover:bg-base-300"><LuCalendarCheck2 className="lg:text-lg" /><span className="text-sm lg:text-md">Add Booking</span></NavLink>
                <NavLink to='/workflows' className="flex items-center gap-1 rounded-lg p-2 hover:bg-base-300"><IoIosGitNetwork className="lg:text-lg rotate-90" /><span className="text-sm lg:text-md">Workflows</span></NavLink>
            </aside>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LayoutWithSideBar;