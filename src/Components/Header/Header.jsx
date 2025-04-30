import { BsCoin } from "react-icons/bs";
import logo from "../../assets/logo.png"
import BgShadow from "../../assets/bg-shadow.png"
import BannerMain from "../../assets/banner-main.png"
const Header = ({ coins, handleAddMoney }) => {
    return (
        <div className="px-20 py-10">
            <div className="flex justify-between items-center mb-10">
                <img src={logo} alt="" />
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-10">
                        <a className="text-slate-600" href="#">Home</a>
                        <a className="text-slate-600" href="#">Fixture</a>
                        <a className="text-slate-600" href="#">Teams</a>
                        <a className="text-slate-600" href="#">Schedules</a>
                    </div>
                    <button className="border border-slate-300 px-4 py-2 text-xl font-bold rounded-xl flex items-center gap-2 ">
                        {coins} coin <BsCoin className="text-yellow-300 bg-amber-600 rounded-full" />
                    </button>
                </div>
            </div>

            <div className="relative">
                <img className="rounded-xl absolute" src={BgShadow} alt="" />
                <div className="relative flex flex-col gap-5 items-center pt-20">
                    <img src={BannerMain} alt="" />
                    <p className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</p>
                    <p className="text-2xl font-bold text-white">Beyond Boundaries Beyond Limits</p>
                    <div className="border border-yellow-300 bg-[#fffc622f] px-2 py-2 rounded-2xl">
                        <button onClick={handleAddMoney} className="rounded-xl bg-yellow-300 px-5 py-3">
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
