import { PhoneInput } from "react-international-phone";
import { useForm } from "react-hook-form";
import { useAxios } from "../hooks/useAxios";
import { reqTypes } from "../api/api";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact/contact.png";

import "react-international-phone/style.css";

const Contact = () => {
  const [data, isLoading, error, postMessage] = useAxios([]);
  const emailRef = useRef();
  const initialState = {
    isim: "",
    surname: "",
    phone: "",
    textarea: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const myHandleSubmit = (formData) => {
    postMessage(reqTypes.POST, "/users", formData);
    console.log("form message >", formData);

    emailjs
      .sendForm(
        "service_ds43nbs",
        "template_u3at45q",
        emailRef.current,

        "medX0XRjILOWCrjwd"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );

    reset(initialState);
  };

  return (
    <div className="flex justify-center">
      <div className=" md:w-[700px] sm:hidden md:block absolute ">
        <img src={contact} alt="contact" />
      </div>
      <div className="flex relative justify-between ">
        <form
          className="mb-6  mt-20"
          onSubmit={handleSubmit(myHandleSubmit)}
          ref={emailRef}
        >
          <label className="block mb-2 text-sm font-medium s text-custom-daire dark:text-custom-daire">
            Your name
            <input
              name="isim"
              type="text"
              className="bg-custom-headerdaire  border-2  border-custom-daire placeholder-custom-navbartext dark:placeholder-custom-navbartext text-sm rounded-lg focus:ring-custom-daire focus:border-custom-daire w-full p-2.5 dark:border-custom-daire"
              placeholder="Your name"
              {...register("isim", {
                required: true,
                minLength: {
                  value: 3,
                  message: "Must be at least three characters",
                },
              })}
            />
            {errors.isim && <p>{errors.isim.message}</p>}
          </label>

          <label className="block mb-2 text-sm font-medium text-custom-daire dark:text-custom-daire">
            Your surname
            <input
              name="surname"
              type="text"
              className="bg-custom-headerdaire  border-2  border-custom-daire placeholder-custom-navbartext dark:placeholder-custom-navbartext text-sm rounded-lg focus:ring-custom-daire focus:border-custom-daire w-full p-2.5 dark:border-custom-daire"
              placeholder="Your surname"
              {...register("surname", {
                required: true,
                minLength: {
                  value: 3,
                  message: "Must be at least three characters",
                },
              })}
            />
            {errors.surname && <p>{errors.surname.message}</p>}
          </label>
          <label className="block text-sm font-medium text-custom-daire dark:text-custom-daire">
            Your Phone
          </label>
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="tr"
            inputStyle={{
              backgroundColor: "rgba(238, 235, 255, 1)",
              color: "rgba(107, 114, 128, 1)",
              fontWeight: "bold",
            }}
            className="bg-custom-headerdaire  border-2 border-custom-daire placeholder-custom-navbartext dark:placeholder-custom-navbartext text-sm rounded-lg focus:ring-custom-daire focus:border-custom-daire w-full p-2.5 dark:border-custom-daire"
            {...register("phone", {
              required: true,
              minLength: {
                value: 11,
                message: "Must be at least ten characters",
              },
            })}
          />
          {errors.phone && errors.phone.message && (
            <p>{errors.phone.message}</p>
          )}

          <label className="block mb-2 text-sm mt-0 font-medium text-custom-daire dark:text-custom-daire">
            Your message
            <textarea
              name="textarea"
              type="textarea"
              className="bg-custom-headerdaire  border-2 h-[200px] border-custom-daire placeholder-custom-navbartext dark:placeholder-custom-navbartext text-sm rounded-lg focus:ring-custom-daire focus:border-custom-daire w-full p-2.5 dark:border-custom-daire"
              placeholder="Your message"
              {...register("textarea", {
                required: true,
                minLength: {
                  value: 3,
                  message: "Must be at least three characters",
                },
              })}
            />
            {errors.textarea && <p>{errors.textarea.message}</p>}
          </label>
          <button
            className="mt-4 w-full bg-custom-daire hover:bg-custom-headerdaire text-custom-headerdaire hover:text-custom-daire 
              py-2 px-4 border-2 border-custom-daire 
             rounded-lg transition duration-300 ease-in-out 
             focus:outline-none focus:ring-2 focus:ring-custom-daire focus:ring-opacity-50"
            disabled={!isValid}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
