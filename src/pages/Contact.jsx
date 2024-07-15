const Contact = () => {
  return (
    <div className="flex justify-center  my-20 ">
      <div className="mb-6">
        <label
          for="success"
          className="block mb-2 text-sm font-medium s text-custom-daire dark:text-custom-daire"
        >
          Your name
          <input
            type="text"
            id="success"
            className="bg-custom-headerdaire font-semibold border-2  border-custom-daire placeholder-custom-paragraf dark:placeholder-custom-daire text-sm rounded-lg focus:ring-custom-daire focus:border-custom-daire w-full p-2.5 dark:border-custom-daire"
            placeholder="Your name"
          />
        </label>

        <label
          for="success"
          className="block mb-2 text-sm font-medium text-custom-daire dark:text-custom-daire"
        >
          Your surname
          <input
            type="text"
            id="success"
            className="bg-custom-headerdaire font-semibold border-2  border-custom-daire placeholder-custom-paragraf dark:placeholder-custom-daire text-sm rounded-lg focus:ring-custom-daire focus:border-custom-daire w-full p-2.5 dark:border-custom-daire"
            placeholder="Your surname"
          />
        </label>

        <label
          for="success"
          className="block mb-2 text-sm mt-0 font-medium text-custom-daire dark:text-custom-daire"
        >
          Your message
          <textarea
            type="textarea"
            id="success"
            className="bg-custom-headerdaire font-semibold border-2 h-[200px] border-custom-daire placeholder-custom-paragraf dark:placeholder-custom-daire text-sm rounded-lg focus:ring-custom-daire focus:border-custom-daire w-full p-2.5 dark:border-custom-daire"
            placeholder="Your message"
          />
        </label>
        <button
          type="submit"
          className="mt-4 w-full bg-custom-daire hover:bg-custom-headerdaire text-custom-headerdaire hover:text-custom-daire 
             font-semibold py-2 px-4 border-2 border-custom-daire 
             rounded-lg transition duration-300 ease-in-out 
             focus:outline-none focus:ring-2 focus:ring-custom-daire focus:ring-opacity-50"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
