import { IoNotificationsOutline } from 'react-icons/io5';
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import { GoChevronDown, GoPlus } from 'react-icons/go';
import { BiMessageAltDetail } from 'react-icons/bi';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GrCalendar } from 'react-icons/gr';
import { LuCalendarCheck2 } from 'react-icons/lu';
import { IoIosGitNetwork } from 'react-icons/io';

const Navbar = () => {
    const location = useLocation();
    // console.log(location);
    const [close, setClose] = useState(false);

    return (
        <nav className="flex items-center justify-between py-2 px-3 fixed z-20 w-full max-w-screen-2xl bg-white">
            <div onClick={() => setClose(!close)} className="md:text-xl block md:hidden cursor-pointer">
                {
                    close ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
                <div className={`${close ? 'top-[64px] left-0' : '-left-60 top-[64px]'} duration-700 flex flex-col items-start text-start md:hidden absolute text-sm p-4 gap-1 bg-white text-black h-screen shadow`}>
                    <NavLink to="/" className="flex items-center gap-2 rounded-lg p-2"><GrCalendar className="text-xl" /><span>Calendar</span></NavLink>
                    <NavLink to='/add-booking' className="flex items-center gap-2 rounded-lg p-2"><LuCalendarCheck2 className="text-xl" /><span>Add Booking</span></NavLink>
                    <NavLink to='/workflows' className="flex items-center gap-2 rounded-lg p-2"><IoIosGitNetwork className="text-xl rotate-90" /><span>Workflows</span></NavLink>
                </div>
            </div>
            {/* navbar-left */}
            <div className='flex items-center w-1/3 justify-between'>
                <Link to="/">
                    <figure className='flex items-center gap-1'>
                        <img className='w-8 lg:w-12' src={logo} alt="" />
                        <p className='text-sm lg:text-xl font-semibold text-gray-700'>Car Booking</p>
                    </figure>
                </Link>
                {
                    location.pathname === '/' && <div className='hidden md:block'>
                        <p className='text-xl lg:text-3xl font-bold'>Calendar</p>
                    </div>
                }
            </div>

            {/* navbar-right */}
            <div className='flex items-center gap-3 md:gap-4 lg:gap-7'>
                <Link to="/add-booking" className='hidden md:block'>
                    <button className="flex items-center gap-1 p-1 lg:p-2 rounded-lg bg-[#626ee8] text-white cursor-pointer">
                        <GoPlus className='text-xl lg:text-2xl' />
                        <span className='text-sm lg:text-base'>Add Booking</span>
                    </button>
                </Link>

                <IoNotificationsOutline className='text-xl md:text-2xl cursor-pointer text-gray-700' />
                <BiMessageAltDetail className='text-xl md:text-2xl cursor-pointer text-gray-600' />

                <div className='flex items-center gap-1 cursor-pointer'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 md:w-12 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={profile} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <GoChevronDown className='md:text-xl text-gray-700' />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
