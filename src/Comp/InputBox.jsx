import React from "react";

const InputBox = ({ user,postData, getUserData }) => {
  return (
    <>
      <div className="form-box">
        <h3 className="title">create account</h3>

        <form className="my-form" action="" method="post" className="m-3">
          <div className="input-group mb-3">
            <span className="input-group-text" id="fullname">
              Full Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Full Name"
              aria-label="fullname"
              name="fullname"
              aria-describedby="fullname"
              value={user.fullname}
              onChange={getUserData}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="email">
              email
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              aria-label="email"
              aria-describedby="email"
              name="email"
              value={user.email}
              onChange={getUserData}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="mobile">
              mobile no
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Your Mobile Number"
              aria-label="mobile"
              aria-describedby="mobile"
              name="mobile"
              value={user.mobile}
              onChange={getUserData}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="address">
              address
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              aria-label="address"
              aria-describedby="address"
              name="address"
              value={user.address}
              onChange={getUserData}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="password">
              password
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              aria-label="password"
              aria-describedby="password"
              name="password"
              value={user.password}
              onChange={getUserData}
            />
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={postData}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputBox;
