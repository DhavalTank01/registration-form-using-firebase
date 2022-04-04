import React from "react";

const ErorrBox = ({ closeErr,errorFlag, errorMsg }) => {
  return (
    <>
      {errorFlag ? (
        <div className="error-box">
          <p>
            {errorMsg}
            <i className="fa fa-close closebtn " onClick={closeErr}></i>
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default ErorrBox;
