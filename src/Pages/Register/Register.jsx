import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

        const handleRegister = e => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            console.log(form.get('Password'));
        }

    return (
        <div>
            <div className="my-12">
                <Navbar></Navbar>
            </div>
            <div className="mx-60">
                <h3 className="text-center text-5xl font-semibold my-10 pb-10">Register your account</h3>
                <hr />
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto md:w-3/4">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Your Name</span>
                        </label>
                        <input name="Name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Photo URL</span>
                        </label>
                        <input name="Photo" type="text" placeholder="Enter your Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Email Address</span>
                        </label>
                        <input name="Email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Password</span>
                        </label>
                        <input name="Password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Already Have An Account ? <Link className="text-red-600" to="/login">Login</Link></p>
                    
                </form>
            </div>
        </div>
    );
};

export default Register;