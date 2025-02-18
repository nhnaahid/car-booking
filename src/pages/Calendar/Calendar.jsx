import { GrCalendar } from "react-icons/gr";
import { IoIosGitNetwork } from "react-icons/io";
import { LuCalendarCheck2 } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Calendar = () => {
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem eveniet libero id qui nobis enim accusamus laudantium nisi laborum, aut blanditiis nostrum vitae, officiis quos cumque eum voluptatum reiciendis. Earum iste dolore iusto impedit facilis numquam incidunt illo neque ab reiciendis accusantium expedita, ad deserunt aut quae enim odio minima commodi vero maiores explicabo modi pariatur architecto non. Consectetur vero, laborum, nisi iste accusantium placeat quis tenetur doloremque, unde aperiam est qui distinctio voluptas similique commodi expedita. Excepturi omnis cum beatae ad? Dolorem facere, quas modi corporis dolores vel fugiat repudiandae placeat voluptate tempore laudantium, at minus assumenda iure recusandae praesentium doloremque nostrum suscipit tempora, nisi a labore. Ipsa eum cum, eos similique fuga rerum eius veritatis recusandae consequatur aliquam ad sapiente quas neque deleniti iusto adipisci error quasi officia, quibusdam asperiores. Quisquam maiores magnam ad minima quo illo, eius, repellendus animi necessitatibus doloribus facere? Quo quos facere, perferendis quam veritatis harum saepe molestiae accusantium, aliquid fugit tenetur eveniet, corporis rem officia doloribus blanditiis qui totam provident mollitia eius nihil autem itaque pariatur! Ipsam voluptas excepturi totam fugiat, a amet. Aliquid neque soluta architecto itaque tempora, ipsa molestiae cupiditate unde sed ipsam blanditiis ex! Eum alias beatae animi nostrum.</p>
            </div>
        </div>
    );
};

export default Calendar;    