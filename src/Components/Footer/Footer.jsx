import bgGlow from "../../assets/bg-glow.png"
import logoFooter from "../../assets/logo-footer.png"
const Footer = () => {
    return (
        <div className="px-20 py-10 bg-blue-950">
            <div className="relative px-5 py-5 rounded-3xl border-2 border-white -mt-65">
              <div className="absolute inset-0 bg-white opacity-30 rounded-3xl z-0 "></div>
              <img src={bgGlow} alt="" className="relative z-10" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-20 px-4 text-center">
                <p className="text-3xl font-bold">Subscribe to our Newsletter</p>
                <p className="text-base">Get the latest updates and news right in your inbox!</p>
                <div className="flex items-center gap-3">
                    <input className="bg-white border border-slate-500 rounded-xl py-3 px-10" placeholder="Enter your email" type="text" />
                    <button className="bg-gradient-to-r from-[tomato] to-slate-100 px-5 py-3 rounded-xl">Subscribe</button>
                </div>
              </div>
            </div>

            <div className=" my-10">
                <div className=" flex justify-center items-center mb-5"><img className="w-24 h-24" src={logoFooter} alt="" /></div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-white font-bold">About Us</p>
                        <p className="text-sm text-slate-400">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-white font-bold">Quick Links</p>
                        <ul>
                            <li className="text-sm text-slate-400">Home</li>
                            <li className="text-sm text-slate-400">Service</li>
                            <li className="text-sm text-slate-400">About</li>
                            <li className="text-sm text-slate-400">Contact</li>
                        </ul>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className="text-sm text-white font-bold">Subscribe</p>
                        <p className="text-sm text-slate-400">Subscribe to our newsletter for the <br /> latest updates.</p>
                        <div className="flex items-center">
                            <input className="rounded-l-xl bg-white px-5 py-3 placeholder:text-slate-500" placeholder="Enter your email" type="text" />
                            <button className="bg-gradient-to-r from-[tomato] to-slate-100 px-5 py-3 rounded-r-xl">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-0 border-b border-b-slate-200 mb-5"  />
            <p className="text-sm text-slate-300 text-center">@2025 Dream 11 Cricket Team All Rights Reserved.</p>
        </div>
    );
};

export default Footer;