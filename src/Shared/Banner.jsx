import { HiClipboardCheck, HiQrcode } from "react-icons/hi";

const Banner = () => {
    return (
        <div className="bg-slate-400">
            <div className="border-dotted border-black border-2 p-10 md:w-2/5  mx-auto ">
                <h2 className="text-3xl font-semibold my-10">Your Temporary Email Address</h2>
                <div className="items-center flex gap-10">
                    <div className="flex items-center relative">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-accent  md:w-[300px]  pr-12"
                        />
                        <button className="ml-[200px] md:ml-[250px] absolute "><HiQrcode className="bg-slate-300 h-[45px] w-[45px] rounded-2xl p-2 "></HiQrcode></button>
                    </div>

                    <button><HiClipboardCheck className="bg-teal-400 h-10 w-10 rounded-2xl p-2"></HiClipboardCheck></button>
                </div>
            </div>
        </div>

    );
};

export default Banner;