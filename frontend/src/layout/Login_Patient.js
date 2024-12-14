import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../userContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const toastOptions = {
        position: "bottom-right",
        autoClose: 6000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    };
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

    const validateForm = () => {
        const { email, password } = values;
        if (email === "") {
          toast.error("Email and Password is required.", toastOptions);
          return false;
        } else if (password === "") {
          toast.error("Email and Password is required.", toastOptions);
          return false;
        }
        return true;
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
          const { email, password } = values;
          const { data } = await axios.post(loginRoute, {
            email,
            password,
          });
          if (data.status === false) {
            console.log(data.msg);
            toast.error(data.msg, toastOptions);
          }
          if (data.status === true) {
            localStorage.setItem(
                "thera-med",
                JSON.stringify(data.user)
            );
            setUser(data.user);
            navigate("/");
          }
        }
      };

    return (
        <section className="vh-75" style={{ backgroundColor: '#eee', padding: "8vh" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                                    <div className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4" >
                                            <p >Welcome User!</p>
                                            <p >Login to your account</p>
                                        </div>
                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
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

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Login</button>
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
export default Login
