import { IoNotificationsOutline } from 'react-icons/io5';
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import { GoChevronDown, GoPlus } from 'react-icons/go';
import { BiMessageAltDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=" flex items-center justify-between p-3">
            {/* navbar-left */}
            <div className='flex items-center w-1/3 justify-between'>
                <figure className='flex items-center gap-1'>
                    <img src={logo} alt="" />
                    <p className='text-xl font-semibold text-gray-700'>Car Booking</p>
                </figure>
                <div>
                    <p className='text-3xl font-bold'>Calendar</p>
                </div>
            </div>

            {/* navbar-right */}
            <div className='flex items-center gap-7'>
                <Link to="/add-booking">
                    <button className="flex items-center gap-1 p-2 rounded-lg bg-[#626ee8] text-white cursor-pointer">
                        <GoPlus className='text-2xl' />
                        <span className=''>Add Booking</span>
                    </button>
                </Link>
                <IoNotificationsOutline className='text-2xl cursor-pointer text-gray-700' />
                <BiMessageAltDetail className='text-2xl cursor-pointer text-gray-600' />
                <div className='flex items-center gap-1 cursor-pointer'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={profile} />
                        </div>
                    </div>
                    <GoChevronDown className='text-xl text-gray-700' />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;