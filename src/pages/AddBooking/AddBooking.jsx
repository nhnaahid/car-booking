import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { LuClock } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";


const AddBooking = () => {
    const [bookingDate, setBookingDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [repeatType, setRepeatType] = useState('weekly');
    const [selectedDays, setSelectedDays] = useState([]);

    const handleCarBooking = e => {
        e.preventDefault();
        const form = e.target;
        const subject = form.subject.value;
        const car = form.car.value;
        const postFromData = {
            subject,
            car,
            bookingDate,
            startTime,
            endTime,
            repeatType,
            selectedDays,
            endDate,
        }

        console.log(postFromData);

        // TODO: send form postFromData object by POST method

        toast.success("Car Booking Successful.")
        // form.reset();
    }

    const handleSelectedDay = e => {
        const { name, checked } = e.target;
        // console.log(name, checked);
        if (checked) {
            setSelectedDays([...selectedDays, name])
        }
        else {
            setSelectedDays(selectedDays.filter((day) => day !== name))
        }
    }
    // console.log(selectedDays);
    // console.log(startTime);

    const handleStartTime = (time) => {
        setStartTime(time);
        setEndTime(null);
    }

    const handleEndTime = (time) => {
        if (!startTime) {
            toast.error("Please select a Start Time first.");
            return;
        }

        if (time <= startTime) {
            toast.error("End Time must be later than Start Time!");
            return;
        }

        setEndTime(time);
    }

    const handleEndDate = (time) => {
        if (!bookingDate) {
            toast.error("Please select a Booking Date first.");
            return;
        }
        if (time <= bookingDate) {
            toast.error("End Date must be later than Booking Date!");
            return;
        }
        setEndDate(time);
    }


    return (
        <div className="p-2 w-full md:w-[80%] mx-auto -mt-7">
            <div>
                <h1 className="text-xl md:text-2xl font-bold">Add Car Booking</h1>
            </div>

            <div className="border-b-2 border-gray-300 mt-5">
            </div>

            <form onSubmit={handleCarBooking} className="mt-7 w-full px-2">
                {/* Basic Information */}
                <div className="space-y-5 md:space-y-7">
                    <h3 className="text-lg md:text-xl text-[#626ee8] font-semibold">Basic Information</h3>
                    {/* subject + car select field*/}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
                        <div className="flex flex-col w-full md:w-2/5 space-y-2">
                            <label className="font-semibold">Subject</label>
                            <input className="p-2 w-[70%] md:w-full rounded-full border-none bg-base-300 placeholder-black" type="text" name="subject" id="subject" placeholder=" Write a short note" required />
                        </div>
                        <div className="flex flex-col w-full md:w-[40%] space-y-2">
                            <label className="font-semibold">Select Car</label>
                            <select className="w-[70%] md:w-full p-2 rounded-full border-none bg-base-300 placeholder-black" name="car" id="car" required>
                                <option value="toyota">Toyota</option>
                                <option value="bmw">BMW</option>
                                <option value="ford">Ford</option>
                                <option value="audi">Audi</option>
                                <option value="tesla">Tesla</option>
                            </select>
                        </div>
                    </div>
                    {/* Booking date field */}
                    <div className="flex flex-col w-[70%] md:w-[40%] space-y-2">
                        <label className="font-semibold">Booking Date</label>
                        <DatePicker
                            className="w-full p-2 rounded-full border-none bg-base-300 placeholder-black"
                            selected={bookingDate}
                            onChange={(date) => setBookingDate(date)}
                            minDate={new Date()}
                            showIcon
                            icon={<MdOutlineCalendarToday className="bottom-0.5" />}
                            placeholderText=" Select a Date"
                            required={!selectedDays.length}
                        />
                    </div>
                    {/* Select time field */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
                        <div className="flex flex-col w-[70%] md:w-[40%] space-y-2">
                            <label className="font-semibold">Start Time</label>
                            <DatePicker
                                className="w-full p-2 rounded-full border-none bg-base-300"
                                selected={startTime}
                                onChange={handleStartTime}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={5}
                                dateFormat="h:mm aa"
                                showTimeCaption={false}
                                showIcon
                                icon={<LuClock className="bottom-0.5" />}
                                placeholderText=" Pick time"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-[70%] md:w-[40%] space-y-2">
                            <label className="font-semibold">End Time</label>
                            <DatePicker
                                className="w-full p-2 rounded-full border-none bg-base-300"
                                selected={endTime}
                                onChange={handleEndTime}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={5}
                                dateFormat="h:mm aa"
                                showTimeCaption={false}
                                showIcon
                                icon={<LuClock className="bottom-0.5" />}
                                placeholderText=" Pick time"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 mt-8">
                </div>
                {/* Repeat option */}
                <div className="space-y-7 mt-7">
                    <h3 className="text-xl text-[#626ee8] font-semibold">Repeat Option</h3>
                    {/* repeat type */}
                    <div className="flex flex-col w-[70%] md:w-[40%] space-y-2">
                        <label className="font-semibold">Repeat On</label>
                        <select
                            className="p-2 rounded-full border-none bg-base-300 placeholder-black" name="repeat"
                            id="repeat"
                            required
                            onChange={e => { setRepeatType(e.target.value) }}
                        >
                            <option value="weekly">Weekly</option>
                            <option value="daily">Daily</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    {/* Days */}
                    <div className={`${repeatType !== 'weekly' ? 'hidden' : 'flex gap-3 md:gap-12'} grid grid-cols-4 md:grid-cols-7`}>
                        {
                            ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, idx) => <div key={idx} className="items-center flex gap-2">
                                <input
                                    className="accent-[#626ee8] size-4 cursor-pointer" type="checkbox"
                                    name={day}
                                    id={day}
                                    onChange={handleSelectedDay}
                                    required={!selectedDays.length && repeatType === 'weekly'}
                                />
                                <span>{day[0]}</span>
                            </div>)
                        }
                    </div>
                    {/* end date */}
                    <div className="flex flex-col w-[70%] md:w-[40%] space-y-2">
                        <label className="font-semibold">End Date</label>
                        <DatePicker
                            className="w-full p-2 rounded-full border-none bg-base-300"
                            selected={endDate}
                            onChange={handleEndDate}
                            minDate={bookingDate}
                            showIcon
                            icon={<MdOutlineCalendarToday className="bottom-0.5" />}
                            placeholderText=" Select a Date"
                            required
                        />
                    </div>
                </div>
                <div className="border border-gray-300 mt-16">
                </div>
                {/* buttons */}
                <div className="flex justify-between my-10">
                    <input className="btn bg-none border border-[#626ee8] text-[#626ee8] rounded-full" type="submit" value="Advanced" />
                    <input className="btn bg-[#626ee8] text-white rounded-full" type="submit" value="Save" />
                </div>
            </form>
        </div>
    );
};

export default AddBooking;