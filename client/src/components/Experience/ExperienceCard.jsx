import React from "react";

const ExperienceCard = () => {
  return (
    <>
      <div className="box p-4 mx-4 rounded-lg bg-white">
        <img
          className="rounded-md"
          src="https://themeim.com/wp/flynext/wp-content/uploads/2021/11/15-570x400.jpg"
          alt=""
        />
        <h3 className="text-3xl font-normal pt-4">Embraer P-300E</h3>
        <div className="routes flex justify-center align-middle mt-2">
          <div className="from-routes w-1/3 text-center ">
          <span className="text-sm  py-4">
           From
          </span>
          </div>
          <div className="air-icon w-1/3 text-center" >
          <i class="fa-sharp fa-solid fa-jet-fighter items-center"></i>
          </div>
          <div className="to-routes w-1/3 text-center">
          <span className="text-sm  py-4">
            To
          </span>
          </div>
          
        </div>
        <div className="airports flex justify-start gap-4">
        <span className="text-sm  py-4">
              MIAMI INTERNATIONAL AIRPORT (MIA)
        </span>
        <span className="text-sm  py-4">
            MIAMI INTERNATIONAL AIRPORT (MIA)
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
        <div className="card-footer flex justify-between pt-4">
          <div className="btnn">
            <a className="text-xl font-bold" href="">
              <i class="fa-sharp fa-solid fa-jet-fighter items-center"></i> Book
              Now
            </a>
          </div>
          <div className="play">
            <span>
              <a href="#">
                <i class="fa-sharp fa-solid fa-circle-play text-2xl"></i>
              </a>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
