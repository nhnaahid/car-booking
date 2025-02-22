import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="w-full flex flex-col">
                <figure className="w-32 md:w-64 lg:w-128 my-auto mx-auto">
                    <img src="/error.jpg" alt="" />
                </figure>
            </div>
            <div className="w-full  flex items-center justify-center">
                <Link to='/' className="btn bg-[#626ee8] text-white">Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;