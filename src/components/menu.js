import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPeople ,BsCalendar,BsGift} from "react-icons/bs";
function Menu() {
  return (
    <>
       <div className="mb-10">
        <img src="assests/timesquare.jpg" alt="" className="w-full h-[561px]" />
       </div>
      
        <div className="grid sm:grid-cols-2 grid-cols-1 my-5 mx-10 gap-8   ">
          <div className=" p-5 w-full h-auto ">
            <h1 className="mb-5 font-bold">Premium Brunch</h1>
            <img
              src="assests/brunch.jpg"
              alt=""
              className="w-full sm:w-[80%] h-[300px]  rounded-lg"
            />
            <h1 className="my-2 font-bold">About this gift</h1>
            <p>this giftbox is best way to experience the NY brunch scene.</p>
            <p>
              Includes a full brunch for 2 in same of the best NY resturant.
            </p>
            <p className="font-bold mt-5">
              Where can gifty recipient go with this gift box?
            </p>
            <p>Gifty recipient can choose one of these 13 experiences</p>
          </div>
          <div className="pt-5 ">
            <div className="h-auto rounded-lg  shadow-gray-400 shadow-lg p-5 sm:w-[75%] md:w-[65%] w-full    ">
              <div className="divide-y divide-solid space-y-5 ">
              <h1 className="font-bold mb-5">More details</h1>
              <div className="flex flex-row items-center pt-2 ">
                  <BsPeople className="mr-2"></BsPeople><span className="text-[12px]">For 1/2 people</span>
                </div>
              <div className="flex flex-row items-center pt-2  ">
                  <BsCalendar className="mr-2"></BsCalendar><span className="text-[12px]">Can be used up to 6 months from date purchased</span>
                </div>
              <div className="flex flex-row items-center pt-2  ">
                  <BsGift className="mr-2"></BsGift><span className="text-[12px]">Includes 10 different options</span>
                </div>

              </div>
              <div className="divide-y divide-solid  my-10 ">
                <p className="text-[12px]">Price</p>
                <h1 className="font-bold">$120</h1>
              </div>
              <div className="my-5 space-y-3">

              <button className="rounded-md w-full p-2 bg-blue-700 text-white">Buy the new Package Now</button>
              <button className="rounded-md w-full p-2 bg-blue-700 text-white">Add to Cart</button>
              </div>

              
            </div>

          </div>
        </div>
        <hr className="w-[92%] h-[2px] mx-auto my-auto bg-gray-300 "></hr>
        <div className="p-5">
          <div className="px-10 my-10">
            <h1 className="font-bold ">Please choose one</h1>
            <p>choose any of the following experiences</p>
          </div>

          <div className="grid w-full  h-auto lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-5 px-10 gap-x-8 gap-y-8 ">
            <div className="w-full rounded-[20px] overflow-hidden ease-in shadow-gray-400 shadow-lg ">
              <img
                src="assests/brunch.jpg"
                alt=""
                className="w-full h-[200px] hover:scale-105 duration-300 mb-2  ease-in rounded-[20px] "
              />
              <div className="flex flex-row items-center justify-between px-2">
                <h2 className="font-bold">Il mulino prime</h2>

                <div className="flex flex-row items-center justify-between text-blue-500">
                  <AiFillStar></AiFillStar>New
                </div>
              </div>
              <p className=" px-2 text-[12px] text-gray-600">soha,NY</p>
              <p className="px-2 py-5">
                Discover this amazing restaurant in the heart of city
              </p>
            </div>
            <div className=" w-full h-auto rounded-[20px] overflow-hidden ease-in shadow-gray-400 shadow-lg ">
              <img
                src="assests/upper.jpg"
                alt=""
                className="w-full h-[200px] hover:scale-105 duration-300  mb-2  ease-in rounded-[20px] "
              />
              <div className="flex flex-row items-center justify-between px-2">
                <h2 className="font-bold">Tito's unlimited drag brunch</h2>

                <div className="flex flex-row items-center justify-between text-blue-500">
                  <AiFillStar></AiFillStar>New
                </div>
              </div>
              <p className=" px-2 text-[12px] text-gray-600">Time Squre,NY</p>
              <p className="px-2 py-5">
                Experience a Show like no equal in the city that never sleep.
              </p>
            </div>
            <div className=" w-full h-auto rounded-[20px] overflow-hidden ease-in shadow-gray-400 shadow-lg ">
              <img
                src="assests/timesquare.jpg"
                alt=""
                className="w-full h-[200px] hover:scale-105 duration-300  mb-2 ease-in rounded-[20px] "
              />
              <div className="flex flex-row items-center justify-between px-2">
                <h2 className="font-bold">Old john's</h2>

                <div className="flex flex-row items-center justify-between text-blue-500">
                  <AiFillStar></AiFillStar>New
                </div>
              </div>
              <p className=" px-2 text-[12px] text-gray-600">
                Upper west side,NY
              </p>
              <p className="px-2 py-5">
                Enjoy an amazing brunch in one of the oldest standing restaurant
                in the city.
              </p>
            </div>
            <div className="w-full rounded-[20px] overflow-hidden ease-in shadow-gray-400 shadow-lg ">
              <img
                src="assests/soha.jpg"
                alt=""
                className="w-full h-[200px] hover:scale-105 duration-300 mb-2  ease-in rounded-[20px] "
              />
              <div className="flex flex-row items-center justify-between px-2">
                <h2 className="font-bold">Olio e Piu</h2>

                <div className="flex flex-row items-center justify-between text-blue-500">
                  <AiFillStar></AiFillStar>New
                </div>
              </div>
              <p className=" px-2 text-[12px] text-gray-600">West village,NY</p>
              <p className="px-2 py-5">
                {" "}
                NY's classic, one of the oldest and more traditional brunch spot
                in NYC
              </p>
            </div>{" "}
            <div className="w-full rounded-[20px] overflow-hidden ease-in shadow-gray-400 shadow-lg ">
              <img
                src="assests/ny.jpg"
                alt=""
                className="w-full h-[200px] hover:scale-105 duration-300 mb-2  ease-in rounded-[20px] "
              />
              <div className="flex flex-row items-center justify-between px-2">
                <h2 className="font-bold">Jack's Wife Freda</h2>

                <div className="flex flex-row items-center justify-between text-blue-500">
                  <AiFillStar></AiFillStar>New
                </div>
              </div>
              <p className=" px-2 text-[12px] text-gray-600">soha,NY</p>
              <p className="px-2 py-5">
                NY's classic, one of the oldest and more traditional brunch spot
                in NYC
              </p>
            </div>{" "}
            <div className="w-full rounded-[20px] overflow-hidden ease-in shadow-gray-400 shadow-lg ">
              <img
                src="assests/west.jpg"
                alt=""
                className="w-full h-[200px] hover:scale-105 duration-300 mb-2  ease-in rounded-[20px] "
              />
              <div className="flex flex-row items-center justify-between px-2">
                <h2 className="font-bold">Jacob's Pickles</h2>

                <div className="flex flex-row items-center justify-between text-blue-500">
                  <AiFillStar></AiFillStar>New
                </div>
              </div>
              <p className=" px-2 text-[12px] text-gray-600">
                Upper west side,NY
              </p>
              <p className="px-2 py-5">
                Specially brunch ,pickled eggs, pickled beets and much more!
              </p>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Menu;
