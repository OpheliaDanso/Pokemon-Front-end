import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col items-center px-4">
      {/* First Main Row */}
      <div className="flex flex-col items-center my-8">
        <div className="border-4 border-yellow-200 p-4 w-full max-w-4xl text-center rounded-lg shadow-md">
          <h1 className="text-4xl font-bold font-mono">About Us</h1>
        </div>
        <p className="text-custom-yellow mt-4 font-mono">
          We are an international group of students from WBS Coding School,
          Branch #49. In this project, there are three of us - different in
          coding levels and experiences, but the same in our passion for
          learning, coding, and creating fascinating things on your screen.
        </p>
      </div>

      {/* Second Main Row */}
      <div className="my-8">
        <img
          src="./src/assets/images/aboutUs_1.jpeg"
          alt="Group Photo"
          className="w-790 h-320 rounded-lg shadow-lg"
        />
      </div>

      {/* Third Main Row */}
      <div className="flex flex-col items-center my-8 space-y-4">
        {/* Rows and Columns with Frames */}
        <div className="flex flex-row justify-between w-full max-w-7xl">
          <div className="border-4 border-yellow-200 p-4 w-520 h-255 rounded-lg shadow-md">
            <p className="font-mono">
              Ophelia - amazing passionate of coding!!! Our expert of Figma, UI
              styling, frontend, backend!!!
            </p>
          </div>
          <img
            src="./src/assets/images/AboutUs_op.jpeg"
            alt="Ophelia"
            className="w-25 h-40 rounded-lg shadow-lg"
          />
        </div>

        {/* Second Sub Row */}
        <div className="flex flex-row justify-between w-full max-w-7x1">
          <img
            src="./src/assets/images/AboutUs_Ja.jpeg"
            alt="Javier"
            className="w-25 h-40 rounded-lg shadow-lg"
          />
          <div className="border-4 border-yellow-200 p-4 w-520 h-255 rounded-lg shadow-md">
            <p className="font-mono">
              Javier - Passionate of gaming and coding!!! Our group expert of
              Pokemons, but also data base, API, frontend, backend!!!
            </p>
          </div>
        </div>

        {/* Third Sub Row */}
        <div className="flex flex-row justify-between w-full max-w-7xl">
          <div className="border-4 border-yellow-200 p-4 w-520 h-255 rounded-lg shadow-md">
            <p className="font-mono">
              Adrianna - Follow all instructions of team mates - as all of us!!
              Our expert of Trello, testing, content writting and frontend!!!
            </p>
          </div>
          <img
            src="./src/assets/images/AboutUs_Ad.jpeg"
            alt="Adrianna"
            className="w-25 h-40 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
