import { HiClipboardCheck, HiQrcode } from "react-icons/hi";

const Banner = () => {
    return (
        <div className="bg-slate-900 text-white pt-10 pb-10 px-3">
            <div className="border-dashed border-white border-2 p-4 md:p-10 md:w-3/5   mx-auto ">
                <h2 className="md:text-2xl text-center font-semibold my-5 md:my-8">Your Temporary Email Address</h2>
                <div className="items-center flex  w-full">
                    <div className="flex items-center bg-gray-800 py-2 px-4 md:py-3 md:px-8 rounded-2xl w-full relative ">
                        <p className="text-sm md:text-lg">jideles514@cwtaa.com</p>
                        <button className=""><HiQrcode className="bg-gray-700   absolute top-0 right-0 h-full w-10 md:w-14 rounded-full p-1 md:p-3 "></HiQrcode></button>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip='Copy'>
                    <button><HiClipboardCheck className="bg-teal-400 hover:bg-gray-700 w-8 h-8 md:h-12  md:w-12 ml-2 md:ml-3 rounded-full p-1 md:p-2"></HiClipboardCheck></button>
                    </div>
                </div>
            </div>
            <div className="md:w-3/5 mx-auto text-gray-400 text-xs md:text-sm text-center mt-10">
                <p>Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.</p>
            </div>
        </div>

    );
};

export default Banner;