import React from "react";

function MiddleContent() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="pt-4"
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <h1
            className=" text-white font-weight-bold"
            style={{
              fontSize: "calc(100% + 2.5vw + 1vh)",
            }}
          >
            Build your own ecommerce website in 3 easy steps
          </h1>
        </div>

        <div>
          <p className="text-white h2">
            Shopify is trusted by over 1,700,000 businesses worldwide
          </p>
        </div>
      </div>
      <div
        className=" mt-5 "
        style={{
          width: "95vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="Enter your email address"
          style={{
            width: "24vw",
            padding: 14,
            borderRadius: 3,
            border: "none",
          }}
        />
        <button
          style={{
            backgroundColor: "#212326",
            color: "white",
          }}
          className="btn  ml-3 p-4"
        >
          Start free trial
        </button>
      </div>
      <div
        style={{
          text: "center",
          width: "95vw",
          display: "flex",
          justifyContent: "center",
        }}
        className="pt-3"
      >
        <h6 className="text-white ">
          By entering your email, you agree to receive marketing emails from
          Shopify.
        </h6>
      </div>
    </div>
  );
}

export default MiddleContent;

const myStyleSheet = {
  text1: {
    backgroundColor: "red",
  },
};
