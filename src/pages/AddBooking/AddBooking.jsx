import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LuClock } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";

const AddBooking = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    return (
        <div className="p-2 w-[80%] mx-auto">
            <div>
                <h1 className="text-2xl font-bold">Add Car Booking</h1>
            </div>

            <div className="border-b-2 border-gray-300 mt-5">
            </div>

            {/* Basic Information */}
            <div className="space-y-7 mt-7">
                <h3 className="text-xl text-[#626ee8] font-semibold">Basic Information</h3>
                {/* subject + car select field*/}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col w-[40%] space-y-2">
                        <label className="font-semibold">Subject</label>
                        <input className="p-2 rounded-full border-none bg-base-300 placeholder-black" type="text" name="subject" id="" placeholder=" Write a short note" />
                    </div>
                    <div className="flex flex-col w-[40%] space-y-2">
                        <label className="font-semibold">Select Car</label>
                        <select className="p-2 rounded-full border-none bg-base-300 placeholder-black" id="cars">
                            <option value="toyota">Toyota</option>
                            <option value="bmw">BMW</option>
                            <option value="ford">Ford</option>
                            <option value="audi">Audi</option>
                            <option value="tesla">Tesla</option>
                        </select>
                    </div>
                </div>
                {/* Booking date field */}
                <div className="flex flex-col w-[40%] space-y-2">
                    <label className="font-semibold">Booking Date</label>
                    <DatePicker
                        className="w-full p-2 rounded-full border-none bg-base-300 placeholder-black"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showIcon
                        icon={<MdOutlineCalendarToday className="bottom-0.5" />}
                        placeholderText=" Select a Date"
                    />
                </div>
                {/* Select time field */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col w-[40%] space-y-2">
                        <label className="font-semibold">Start Time</label>
                        <DatePicker
                            className="w-full p-2 rounded-full border-none bg-base-300"
                            selected={startTime}
                            onChange={(time) => setStartTime(time)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={5}
                            dateFormat="h:mm aa"
                            showTimeCaption={false}
                            showIcon
                            icon={<LuClock className="bottom-0.5" />}
                            placeholderText=" Pick time"
                        />
                    </div>
                    <div className="flex flex-col w-[40%] space-y-2">
                        <label className="font-semibold">End Time</label>
                        <DatePicker
                            className="w-full p-2 rounded-full border-none bg-base-300"
                            selected={endTime}
                            onChange={(time) => setEndTime(time)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={5}
                            dateFormat="h:mm aa"
                            showTimeCaption={false}
                            showIcon
                            icon={<LuClock className="bottom-0.5" />}
                            placeholderText=" Pick time"
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
                <div className="flex flex-col w-[40%] space-y-2">
                    <label className="font-semibold">Repeat On</label>
                    <select className="p-2 rounded-full border-none bg-base-300 placeholder-black" id="repeat">
                        <option value="weekly">Weekly</option>
                        <option value="daily">Daily</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
                {/* Days */}
                <div className="flex gap-12">
                    {
                        ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, idx) => <div key={idx} className="items-center flex gap-2">
                            <input className="accent-[#626ee8] size-4 cursor-pointer" type="checkbox" name={day} id={day} /><span>{day[0]}</span>
                        </div>)
                    }
                </div>
                {/* end date */}
                <div className="flex flex-col w-[40%] space-y-2">
                    <label className="font-semibold">End Date</label>
                    <DatePicker
                        className="w-full p-2 rounded-full border-none bg-base-300"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        showIcon
                        icon={<MdOutlineCalendarToday className="bottom-0.5" />}
                        placeholderText=" Select a Date"
                    />
                </div>
            </div>
            <div className="border border-gray-300 mt-16">
            </div>
            {/* buttons */}
            <div className="flex justify-between my-8">
                <input className="btn bg-none border border-[#626ee8] text-[#626ee8] rounded-full" type="submit" value="Advanced" />
                <input className="btn bg-[#626ee8] text-white rounded-full" type="submit" value="Save" />
            </div>
        </div>
    );
};

export default AddBooking;