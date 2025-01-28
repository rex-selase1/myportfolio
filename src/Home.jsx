import { MdArrowOutward } from "react-icons/md";
// import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          // Ensure we're reading the scroll position from the document body
          setScrollY(window.scrollY || document.documentElement.scrollTop);
      };

      // Attach the scroll event listener to the window
      window.addEventListener('scroll', handleScroll);

      // Cleanup on unmount
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []); // Empty dependency array to ensure this runs once on mount
  
  return (
    // main box
    <div className="main   w-full overflow-y-scroll font-MonaSans scroll-smooth ">
      {/* header section */}
      <header
        id="home"
        className="flex justify-between pb-7 pt-1  mb-3 items-center w-[90%] m-auto"
      >
        <h1 className=" text-2xl font-extrabold ">Shamouah._</h1>
        <nav className="popIn flex items-center gap-9 text-md  ">
          <p className="cursor-pointer hover:underline hover:text-md bg-green-200 p-4">
            Introduction{" "}
          </p>
          <a
            href="#technologies"
            className="cursor-pointer hover:underline hover:text-md "
          >
            Technologies
          </a>
          <p className="cursor-pointer hover:text-md hover:underline bg-red-200 p-4">
            Projects
          </p>
          <p className="cursor-pointer hover:underline hover:text-md">
            Contacts
          </p>
          {/* <div className="lines flex flex-col gap-1 items-center">
            <div className="border-b w-9 border-black border border-[3px] rounded"></div>
            <div className="border-b w-9 border-black border border-[3px] rounded"></div>
          </div> */}
        </nav>
      </header>

      {/* back to top button */}

      {/*introduction section */}

      <div className="introduction w-full flex flex-col gap-10">
        <div className="box1 w-[90%] m-auto">
          <div className="box1-images   grid grid-cols-3 gap-2 ">
            <img
              src="/paints.jpg"
              alt=""
              className="popup  popup1  rounded-lg object-cover"
            />
            <img
              src="/portfolioBg2.avif"
              alt=""
              className="popup popup2  mt-9  rounded-lg object-cover"
            />
            <img
              src="/sim6.jpg"
              alt=""
              className=" popup popup3 mt-[80px] rounded-lg  object-cover"
            />
          </div>
        </div>
        <div className="box2 w-[90%] m-auto flex justify-between">
          <div className="texts ">
            <h2 className="box1-intro-text  text-lg px-1  ">
              I AM SHAMOUAH KUGBLENU👌💕
            </h2>
            <h1 className="box1-hero-text font-MonoSans font-extrabold text-8xl ">
              FULL<span className="  text-md ">sTack</span>
              <br /> DEVELOPER
            </h1>
          </div>
          <div className="text2 w-[33%] px-1  mt-[80px] ">
            <p className="slideInRight text-sm w-[100%] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem autem fugiat quisquam ea recusandae ex distinctio sunt
              nji
            </p>
            <p className="flex rounded-full items-center font-semibold transition ease-in-out duration-500 justify-center border border-black my-6 gap-1 w-[40%]  text-sm p-2 cursor-pointer hover:bg-black hover:text-white hover:font-semibold">
              Hire Me <MdArrowOutward />
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-[70px] w-[40%] m-auto" />
      {/* skills section */}
      <div className="slideUp skills flex w-[90%] m-auto gap-3 px-1 mt-[80px] mb-[60px]">
        <div className="div1 flex flex-col w-[30%] gap-3 ">
          <img
            src="/sim1.jpg"
            alt=""
            className="scale w-full rounded-lg h-[150px]   object-cover"
          />

          <img
            src="/sim5.avif"
            alt=""
            className="scale w-full rounded-lg h-[130px] object-cover"
          />
          {/* <img src="/sim2.jpg" alt="" className="scale w-full rounded-lg h-[320px]" /> */}
          <div id="technologies" className=" text-black  ">
            <h2 className="font-extrabold my-3 bg-neutral-900 text-white flex items-center justify-center rounded-lg">
              Why these technologies?
            </h2>
            <p className="w-full text-sm my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores cupiditate, commodi voluptatibus neque blanditiis
              aspernatur vel modi odio libero quasi expedita unde deserunt
              excepturi iste? Explicabo voluptatibus veniam voluptas blanditiis
              molestiae? Et incidunt nam, alias eaque asperiores voluptates
              aliquam officiis cum commodi provident quas dolores, eos esse
              animi obcaecati placeat!
            </p>
            <p className="text-sm">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              recusandae!
            </p>
          </div>
        </div>
        <div className="div2 w-[70%]">
          {/* <img
            src="/sim4.webp"
            alt=""
            className="scale w-full rounded-lg h-[400px] mb-3"
          /> */}
          <h1 className="font-extrabold text-7xl flex text-center justify-center items-center  bg-neutral-900 text-white w-[100%] rounded-lg h-[400px] mb-3 px-9">
            TECHNOLOGIES I USE
          </h1>

          <div className="div2-images w-full flex gap-3">
            <img
              src="/sim3.jpg"
              alt=""
              className="scale w-[30%] rounded-lg h-[210px]  object-cover"
            />
            <img
              src="/sim6.png"
              alt=""
              className="scale w-[70%] rounded-lg h-[210px]  object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
