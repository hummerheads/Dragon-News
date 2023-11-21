import moment from "moment/moment";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./Marquee/BreakingNews";


const Home = () => {
    return ( 
        <div className="font-poppins">
            <div>
                <img className="mx-auto mt-12" src="/src/assets/logo.png" alt="" />
            </div>
            <p className="text-lg font-normal text-center mt-5 mb-3 text-[#706F6F]">Journalism Without Fear or Favour</p>
            <div className="text-center font-medium	text-xl	pb-8">
                {moment().format('LLLL')}
            </div>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <Header></Header>
            
            <p className="font-poppins">This is Home</p>
            
 
        </div>
    );
};

export default Home;