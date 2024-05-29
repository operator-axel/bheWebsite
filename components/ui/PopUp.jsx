"use client";
import React, { useState } from "react";

export default function PopUp() {
  const [open, setOpen] = useState(true);
  const [resultMessage, setResultMessage] = useState("");
  const [resultMessageClass, setResultMessageClass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    setResultMessage("Please wait...");
    setResultMessageClass("text-gray-500");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (response.status === 200) {
        setResultMessage(result.message);
        setResultMessageClass("text-green-500");
      } else {
        setResultMessage(result.message);
        setResultMessageClass("text-red-500");
      }
    } catch (error) {
      setResultMessage("Something went wrong!");
      setResultMessageClass("text-red-500");
    }
  };

  return (
    <>
      {open && (
        <div className="fixed flex flex-col z-50 bottom-[100px] top-0 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md">
          <div className="flex p-5 flex-col justify-center items-center h-32 bg-red-600">
            <h3 className="text-lg text-white">How can we help?</h3>
            <p className="text-white opacity-50">
              We usually respond in a few hours
            </p>
          </div>
          <div className="bg-gray-50 flex-grow p-6">
            <form
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                id=""
                style={{ display: "none" }}
              />
              {/* Form Fields */}
              <div className="mb-4">
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="full_name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-100 focus:border-red-300"
                />
              </div>
              {/* Additional form fields */}
              <div className="mb-3">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-red-500 rounded-md focus:bg-red-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              <p
                className={`text-xs text-center ${resultMessageClass}`}
                id="result"
              >
                {resultMessage}
              </p>
            </form>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="fixed z-40 right-5 bottom-5 shadow-lg flex justify-center items-center w-14 h-14 bg-purple-500 rounded-full focus:outline-none hover:bg-red-600 focus:bg-red-600 transition duration-300 ease"
      ></button>
      <style jsx>{`
        .invalid-feedback,
        .empty-feedback {
          display: none;
        }

        .was-validated :placeholder-shown:invalid ~ .empty-feedback {
          display: block;
        }

        .was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
          display: block;
        }

        .is-invalid,
        .was-validated :invalid {
          border-color: #dc3545;
        }

        .is-invalid,
        .was-validated :invalid:focus {
          --tw-ring-color: rgba(220, 53, 69, 0.2);
        }
      `}</style>
    </>
  );
}
