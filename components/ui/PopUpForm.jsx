"use client";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faTimes,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const PopUpForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleForm = () => setIsOpen(!isOpen);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef(null);

  // Validate fields individually
  const validateField = (name, value) => {
    switch (name) {
      case "email":
        setFormErrors({
          ...formErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Email is not valid.",
        });
        break;
      case "phone":
        setFormErrors({
          ...formErrors,
          phone: /^\d{10}$/.test(value)
            ? ""
            : "Phone number must be 10 digits.",
        });
        break;
      default:
        break;
    }
  };

  // Handle form value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    validateField(name, value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidForm =
      Object.values(formErrors).every((err) => err === "") &&
      Object.values(formValues).every((value) => value !== "");
    if (isValidForm) {
      {
        handleSubmit;
      }
      console.log("Form is valid: ", formValues);
      formRef.current.submit();
      // Submit form or show success message
    } else {
      console.log("Form has errors: ", formErrors);
      // Show error messages or prevent form submission
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {isOpen && (
        <div className="transition-transform transform duration-500 ease-in-out bg-slate-900 bg-opacity-10 backdrop-blur-xl border border-gray-200 shadow-lg rounded-lg p-4 max-w-sm w-full">
          <div className="text-right">
            <button
              type="button"
              onClick={toggleForm}
              className="hover:text-[#a60000] text-gray-200 hover:scale-150 ease transition-all"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <form
            ref={formRef}
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="access_key"
              value="97ed9b49-9327-4e7a-8eb8-c997e7fff14a"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="hidden"
              name="redirect"
              value="http://www.bluehorizonexteriors.com/contact/success"
            />
            <div>
              <h1 className="text-2xl center text-center bg-clip-text text-transparent bg-gradient-to-t from-red-700 to-red-900">
                Contact Us
              </h1>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#a60000] focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                placeholder="Your name"
                value={formValues.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                placeholder="Your email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-white"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                placeholder="Your Phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              {formErrors.phone && (
                <p className="text-red-500">{formErrors.phone}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                placeholder="Your message"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-bheBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 hover:scale-125 transition-all hover:translate-x-4"
              >
                Send
              </button>
            </div>
            <p className="text-slate-300 text-sm mt-2">
              By submitting this form, you authorize to text, call, and email
              you regarding your inquiry. Message and data rates may apply.
              Message frequeuncy varies.
            </p>
          </form>
        </div>
      )}
      <button
        onClick={toggleForm}
        className={`p-4 bg-[#a60000] rounded-full text-white shadow-lg focus:outline-none hover:scale-125 transition-all duration-100 ease-in-out radarEffect ${
          isOpen ? "transform -rotate-45" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={isOpen ? faEnvelopeOpen : faEnvelope}
          className="w-8 h-8 transition-transform duration-200 ease-in-out"
        />
      </button>
    </div>
  );
};

export default PopUpForm;

const input = ({ type, placeholder, name, value, onChange, error }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full rounded border px-[14px] py-3 text-base text-body-color outline-none ${
            error
              ? "border-red-500"
              : "border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </>
  );
};
