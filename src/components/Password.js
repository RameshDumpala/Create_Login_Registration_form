import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "./Password.css";

const Password = () => {
  const [formPassword, setFormPassword] = useState({
    Password: "",
  });
  const [image, setImage] = useState(null);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onsubmit = (formPassword) => {
    console.log("formPassword", formPassword);
    toast.success('Password is successfully', {
      position: toast.POSITION.TOP_CENTER
  });
  };
  return (
    <div className="container">
      <ToastContainer />
      <div class="circle">
        <h1>Hello Again!</h1>
        <span className="explore">Explore More by Connecting with us.</span>

        <form onSubmit={handleSubmit(onsubmit)}>
          <div onChange={onImageChange}>
            <input type="file" className="file_input"></input>
            <img className="img" alt="preview image" src={image} />
          </div>

          <div>
            <input
              placeholder="password"
              type="password"
              class="userinput"
              id="Password"
              {...register("Password", {
                required: "Password is requied",
                pattern: {
                  value: /^[a-z]{1}[a-z0-9_]{3,13}$/,
                  message: "Please enter a valid Password",
                },
              })}
            ></input>

            <p className="error">{errors.Password?.message}</p>

            <button>Sign In</button>
          </div>
          <div>
            <span>
              Forgot password ? <a href="/recovery">Recover Now</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
