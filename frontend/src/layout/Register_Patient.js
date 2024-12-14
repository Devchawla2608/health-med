import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../userContext';
import { ToastContainer, toast } from "react-toastify";
import { Buffer } from "buffer";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute, setAvatarRoute} from "../utils/APIRoutes";

const Register = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const api = `https://api.multiavatar.com/4645646`;
    const toastOptions = {
        position: "bottom-right",
        autoClose: 6000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    };
    const [isPatient, setIsPatient] = useState(true);
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, []);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { password, confirmPassword, name, email } = values;
        if (password !== confirmPassword) {
            toast.error(
                "Password and confirm password should be same.",
                toastOptions
            );
            return false;
        } else if (name.length < 3) {
            toast.error(
                "name should be greater than 3 characters.",
                toastOptions
            );
            return false;
        } else if (password.length < 8) {
            toast.error(
                "Password should be equal or greater than 8 characters.",
                toastOptions
            );
            return false;
        } else if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
        }

        return true;
    };

    const setProfilePicture = async (user) => {
        const image = await axios.get(
            `${api}/${Math.round(Math.random() * 1000)}`
        );
        const buffer = new Buffer.from(image.data);
        const avatarImage = buffer.toString("base64");
        if(avatarImage === undefined){
            toast.error("Avatar Error !!", toastOptions);
        }
        else{
            const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
              image: avatarImage,
            });
  
            if(data.isSet){
                user.isAvatarImageSet = true;
                user.avatarImage = data.image;
                
                console.log(user);
            }
            else{
              toast.error("Error setting avatar, Please try again later", toastOptions);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const { email, name, password } = values;
            const { data } = await axios.post(registerRoute, {
                name,
                email,
                password,
                isPatient
            });

            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem("thera-med", JSON.stringify(data.user));
                setUser(data.user);
                await setProfilePicture(data.user);
                navigate("/");
            }
        }
    };

    return (
        <section className="vh-75" style={{ backgroundColor: '#eee', padding: "4vh" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                                        <div className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4" >
                                            <p >Welcome {isPatient ? "User" : "Therapist"}!</p>
                                            <p >SignUp to your account</p>
                                        </div>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <label for="name">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                </label>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name='name' id="name" className="form-control" placeholder='Your Name' onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <label for="email">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                </label>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" name='email' id="email" className="form-control" placeholder='Your Email' onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <label for="password">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                </label>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" name="password" id="password" className="form-control" placeholder='Password' onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <label for="confirmPassword">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                </label>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder='Confirm Password' onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mx-4 mb-3 mb-lg-4">
                                                <button type="submit" onClick={(event) => { handleSubmit(event) }} className="btn btn-primary btn-lg">Register</button>
                                                <button onClick={(event) => { event.preventDefault(); setIsPatient(!isPatient) }} className="btn btn-primary">Sign Up as {isPatient ? "Therapist" : "User"}</button>
                                            </div>
                                        </form>

                                    </div>

                                    <div className="col-md-10 col-lg-8 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                                        <img src="assets/img/blog/register.jpg" className="img-fluid" alt="Sample image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <ToastContainer />
        </section >
    )
}

export default Register;
