import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex flex-col items-center my-8">
        <div className="border-4 border-yellow-200 p-4 w-full max-w-4xl text-center rounded-lg shadow-md bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white font-mono">About Us</h1>{" "}
          {/* Ensure text is readable */}
        </div>
        <p className="text-gray-200 mt-4 text-center font-mono">
          We are an international group of students from WBS Coding School,
          <br />
          Branch 49. In this project, there are three of us - different in
          <br />
          coding levels and experiences, but the same in our passion for
          <br />
          learning, coding, and creating fascinating things on your screen.
        </p>
      </div>

      {/* Second Main Row */}
      <div className="p-2 rounded-lg shadow-lg bg-yellow-200 bg-opacity-50">
        <img
          src="./src/assets/images/aboutUs_1.jpeg"
          alt="Group Photo"
          className="w-96 h-80 rounded-lg"
        />
      </div>

      {/* Third Main Row */}
      <div className="flex flex-col items-center my-8 space-y-4">
        {/* First Sub Row */}
        <div className="flex flex-row justify-between w-full max-w-7xl">
          <div className="border-4 border-yellow-200 p-4 w-[520px] h-[200px] rounded-lg shadow-md bg-black bg-opacity-50">
            <p className="font-mono text-white">
              Ophelia - amazingly passionate for coding!!! Our expert of Figma,
              UI styling, frontend, backend!!! Collaborating with testing on our
              app!
            </p>
          </div>
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
              Javier - Passionate for gaming and coding!!! Our group expert of
              Pokemons, but also data base, API, frontend, backend!!!
              Collaborating with UI styling.
            </p>
          </div>
        </div>

        {/* Third Sub Row */}
        <div className="flex flex-row justify-between w-full max-w-7xl">
          <div className="border-4 border-yellow-200 p-4 w-[520px] h-[200px] rounded-lg shadow-md bg-black bg-opacity-50">
            <p className="font-mono text-white">
              Adrianna - Follow all instructions of team mates - as all of us!!
              Our expert of Trello, testing, content writing, and frontend!!!
              Collaborating with UI styling!
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
