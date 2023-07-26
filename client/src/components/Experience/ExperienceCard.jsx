import React from "react";

const ExperienceCard = () => {
  return (
    <>
      <div className="box p-4 rounded-lg bg-white">
        <img
          className="rounded-md"
          src="https://themeim.com/wp/flynext/wp-content/uploads/2021/11/15-570x400.jpg"
          alt=""
        />
        <h3 className="text-2xl font-medium pt-4">Embraer P-300E</h3>
        <div className="airports flex py-3 justify-evenly items-center gap-2">
        <span className="text-xs">
              MIAMI AIRPORT (MIA)
        </span>
        <div className="" >
          <i class="fa-sharp fa-solid fa-jet-fighter items-center"></i>
          </div>
        <span className="text-xs">
            MIAMI AIRPORT (MIA)
          </span>
        </div>
        <div className="price">
          <ul className="flex justify-between pb-3">
            <li className="text-lg font-semibold">8 - 14 Seats</li>
            <li className="text-lg font-semibold">Price: $9,000/ hr</li>
          </ul>
        </div>
        <div>
          <hr />
        </div>
        <div className="card-footer flex justify-center items-center pt-4">
          <div className="">
            <a className="text-xl text-white py-2 px-4 bg-yellow-800 hover:bg-yellow-900  rounded-md" href="">
              <i class="fa-sharp fa-solid fa-jet-fighter items-center"></i> Book
              Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
