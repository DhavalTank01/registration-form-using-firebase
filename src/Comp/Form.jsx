import React, { useState } from "react";
import ErorrBox from "./ErorrBox";
import InputBox from "./InputBox";

const Form = () => {
  document.title = "Registration Form";
  const [errorMsg, setErrMsg] = useState(null);
  const [errorFlag, setErrFlag] = useState(false);
  const [user, SetUser] = useState({
    fullname: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    SetUser({ ...user, [name]: value });
  };
  const HideError = () => {
    setTimeout(() => {
      setErrFlag(false);
    }, 10000);
  };
  const closeErr = () => {
    setErrFlag(false);
  };
  const postData = async (e) => {
    e.preventDefault();
    const { fullname, email, mobile, address, password } = user;
    if (!fullname || !email || !mobile || !address || !password) {
      setErrFlag(true);
      setErrMsg("plz fill all the fields.");
      HideError();
      
    } else {
      const date =
        new Date().getDate().toString() +
        "-" +
        new Date().getMonth().toString() +
        "-" +
        new Date().getFullYear().toString() +
        "_";
      const time =
        new Date().getHours().toString() +
        ":" +
        new Date().getMinutes().toString() +
        ":" +
        new Date().getSeconds().toString();
      try {
        const dateTime = date + time;
        
        const res = await fetch(`https://registration-form-935ac-default-rtdb.firebaseio.com/users-data.json`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            email,
            mobile,
            address,
            password,
            dateTime,
          }),
        });
        SetUser({
          fullname: "",
          email: "",
          mobile: "",
          address: "",
          password: "",
        });
        setErrFlag(true);
        setErrMsg("account create successfully.");
        HideError();
      } catch (err) {
        console.log(`Error is: ${err}`);
      }
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container-lg main-box">
          <ErorrBox
            errorFlag={errorFlag}
            errorMsg={errorMsg}
            closeErr={closeErr}
          />
          <InputBox postData={postData} getUserData={getUserData} user={user} />
        </div>
      </div>
    </>
  );
};

export default Form;
