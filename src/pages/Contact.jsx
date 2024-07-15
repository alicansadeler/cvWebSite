import { PhoneInput } from "react-international-phone";
import { useForm } from "react-hook-form";

import contact from "../assets/contact/contact.png";

import "react-international-phone/style.css";
import { useAxios } from "../hooks/useAxios";
import { reqTypes } from "../api/api";

const Contact = () => {
  const [data, isLoading, error, postMessage] = useAxios([]);
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
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  const handlePhoneChange = (value) => {
    setValue("phone", value, { shouldValidate: true });
  };

  const myHandleSubmit = (data) => {
    postMessage(reqTypes.POST, "/users", data);
    console.log("form message >", data);
    reset(initialState);
  };

  return (
    <div className="flex justify-center">
      <div className=" md:w-[700px] sm:hidden md:block absolute ">
        <img src={contact} alt="contact" />
      </div>
      <div className="flex relative justify-between ">
        <form className="mb-6  mt-20" onSubmit={handleSubmit(myHandleSubmit)}>
          <label className="block mb-2 text-sm font-medium s text-custom-daire dark:text-custom-daire">
            Your name
            <input
              name="isim"
              value={watch("isim")}
              type="text"
              className="bg-custom-headerdaire  border-2  border-custom-daire placeholder-custom-navbartext dark:placeholder-custom-navbartext text-sm rounded-lg focus:ring-custom-daire focus:border-custom-daire w-full p-2.5 dark:border-custom-daire"
              placeholder="Your name"
              onChange={handleChange}
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
              value={watch("surname")}
              onChange={handleChange}
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
            value={watch("phone")}
            onChange={handlePhoneChange}
            defaultCountry="tr"
            inputStyle={{
              backgroundColor: "rgba(238, 235, 255, 1)",
              color: "rgba(107, 114, 128, 1)",
              fontWeight: "bold",
            }}
            className="bg-custom-headerdaire  border-2 border-custom-daire placeholder-custom-navbartext dark:placeholder-custom-navbartext text-sm rounded-lg focus:ring-custom-daire focus:border-custom-daire w-full p-2.5 dark:border-custom-daire"
          />
          {errors.phone && <p>{errors.phone.message}</p>}

          <label className="block mb-2 text-sm mt-0 font-medium text-custom-daire dark:text-custom-daire">
            Your message
            <textarea
              name="textarea"
              type="textarea"
              value={watch("textarea")}
              onChange={handleChange}
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
