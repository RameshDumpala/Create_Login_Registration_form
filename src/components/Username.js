import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Username.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEdit } from "react-icons/md";

const Username = () => {
  const [formValuse, setFormValuse] = useState({
    username: "",
  });
  const [image, setImage] = useState(null);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const onsubmit = (formValuse) => {
    console.log("form submitted", formValuse);

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container">
      <ToastContainer />
      <div class="circle">
        <h1>Hello Again!</h1>
        <span className="explore">Explore More by Connecting with us.</span>

        <form onSubmit={handleSubmit(onsubmit)}>
          {image ? (
            <div>
              <img className="img" alt="preview image" src={image} />
              <img />
              <div className="edit_icon ">
                <MdEdit />
                <input
                  type="file"
                  className="edit_file"
                  onChange={onImageChange}
                />
              </div>
            </div>
          ) : (
            <div onChange={onImageChange}>
              <input type="file" className="file_input" />
            </div>
          )}

          <div >
            <input
              class="userinput"
              placeholder="username"
              type="text"
              id="username"
              {...register("username", {
                required: { value: true, message: "Username is required" },
              })}
            ></input>

            <p className="error">{errors.username?.message}</p>

            <button>Submit</button>
          </div>
          <div className="register">
            <span>
              Not A Number?<a href="/register">Register Now</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Username;
