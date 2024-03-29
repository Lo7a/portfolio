import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:Lahavk7@gmail.com?=subject${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}(${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-12">
        <h4 className="text-lg md:text-2xl font-semibold text-center ">
          I have got just what you need<span>. </span>
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">054-3032273</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">Afula Sapir 4/19</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">Lahavk7@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full sm:w-32 flex flex-col space-y-2 min-w-fit mx-auto "
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full "
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A]/75 py-5 px-10 rounded-md text-black font-bold text-md md:text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
