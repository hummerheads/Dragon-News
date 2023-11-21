import {  FcGoogle } from 'react-icons/fc';
import {  BsGithub,BsFacebook,BsTwitter,BsInstagram } from 'react-icons/bs';
import qZone1 from '../../../../src/assets/qZone1.png';
import qZone2 from '../../../../src/assets/qZone2.png';
import qZone3 from '../../../../src/assets/qZone3.png';


const Rightsidenav = () => {
    return (
        <>
            <div className="p-4">
                <p className="font-bold text-xl py-5">Login With</p>
                <div className="px-4 py-2">
                <button className="btn w-full ">
                    <FcGoogle></FcGoogle>
                    Login With Google
                </button>
                </div>
                <div className='px-4'>
                <button className="btn w-full">
                    <BsGithub></BsGithub>
                    Login With Github
                </button>
                </div>
            </div>
            <div className='p-4 py-5'>
                <p className='font-bold text-xl py-5'>Find us On</p>
                <ul className='text-xl'>
                    <li className='p-6 flex items-center border rounded-t-lg'><BsFacebook className='mr-3'></BsFacebook> Facebook</li>
                    <li className='p-6 flex items-center border'><BsTwitter className='mr-3'></BsTwitter> Twitter</li>
                    <li className='p-6 flex items-center border rounded-b-lg'><BsInstagram className='mr-3'></BsInstagram> Instagram</li>
                </ul>
            </div>
            <div className='bg-gray-100	'>
                <p className='font-bold text-xl p-5'>Q-Zone</p>
                <div className='p-5'>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </>
    );
};

export default Rightsidenav;