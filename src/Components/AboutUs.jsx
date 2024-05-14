import React from "react";
import ophelia from "../assets/images/AboutUs_op.jpeg";

function AboutUs() {
  return (
    <div className="flex flex-col items-center px-4">
      {/* First Main Row */}
      <div className="flex flex-col items-center my-8">
        <div className="border-4 border-yellow-200 p-4 w-full max-w-4xl text-center rounded-lg shadow-md bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white font-mono">About Us</h1>{" "}
          {/* Ensure text is readable */}
        </div>
        <p className="text-custom-yellow mt-4 text-center font-mono">
          We are an international group of students from WBS Coding School,
          Branch 49. In this project, there are three of us - different in
          coding levels and experiences, but the same in our passion for
          learning, coding, and creating fascinating things on your screen.
        </p>
      </div>

      {/* Second Main Row */}
      <div className="my-8 rounded-lg shadow-lg bg-white bg-opacity-50">
        <img
          src="./src/assets/images/aboutUs_1.jpeg"
          alt="Group Photo"
          className="w-[790px] h-[320px] rounded-lg"
        />
      </div>

      {/* Third Main Row */}
      <div className="flex flex-col items-center my-8 space-y-4">
        {/* First Sub Row */}
        <div className="flex flex-row justify-between w-full max-w-7xl">
          <div className="border-4 border-yellow-200 p-4 w-[520px] h-[200px] rounded-lg shadow-md bg-black bg-opacity-50">
            <p className="font-mono text-white">
              Ophelia - amazing passionate of coding!!! Our expert of Figma, UI
              styling, frontend, backend!!! Collaboarting with testing on our
              app!
            </p>
          </div>
          <img
            src={ophelia}
            alt="Ophelia"
            className="w-25 h-40 rounded-lg shadow-lg"
          />
          <div className="bg-white bg-opacity-50 rounded-lg shadow-lg">
            <img
              src="./src/assets/images/AboutUs_op.jpeg"
              alt="Ophelia"
              className="w-[252px] h-[200px] rounded-lg"
            />
          </div>
        </div>

        {/* Second Sub Row */}
        <div className="flex flex-row justify-between w-full max-w-7xl">
          <div className="bg-white bg-opacity-50 rounded-lg shadow-lg">
            <img
              src="./src/assets/images/AboutUs_Ja.jpeg"
              alt="Javier"
              className="w-[252px] h-[200px] rounded-lg"
            />
          </div>
          <div className="border-4 border-yellow-200 p-4 w-[520px] h-[200px] rounded-lg shadow-md bg-black bg-opacity-50">
            <p className="font-mono text-white">
              Javier - Passionate of gaming and coding!!! Our group expert of
              Pokemons, but also data base, API, frontend, backend!!!
              Collaboarting with UI styling.
            </p>
          </div>
        </div>

        {/* Third Sub Row */}
        <div className="flex flex-row justify-between w-full max-w-7xl">
          <div className="border-4 border-yellow-200 p-4 w-[520px] h-[200px] rounded-lg shadow-md bg-black bg-opacity-50">
            <p className="font-mono text-white">
              Adrianna - Follow all instructions of team mates - as all of us!!
              Our expert of Trello, testing, content writing, and frontend!!!
              Collaborainting with UI styling!
            </p>
          </div>
          <div className="bg-white bg-opacity-50 rounded-lg shadow-lg">
            <img
              src="./src/assets/images/AboutUs_Ad.jpeg"
              alt="Adrianna"
              className="w-[252px] h-[200px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
