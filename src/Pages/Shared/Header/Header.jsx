import Leftsidenav from "../LeftSideNav/Leftsidenav";
import Rightsidenav from "../RightSideNav/Rightsidenav";

const Header = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className="col-span-2 border-solid border-2 border-sky-500">This is post Grid</div>
                <div>
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default Header;