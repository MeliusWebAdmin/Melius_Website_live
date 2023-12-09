import { Link } from "react-router-dom";
import Arrow from "../../Public/arrow-right.png";


export default function Home() {
  return (
    <>
      <div className=" flex justify-between items-center px-4 pb-10 pt-24  md:pt-24 md:mx-12">
        <div id="info" className=" py-14 lg:py-10">
          <h1 className="p-2 font-poppins text-3xl leading-[3rem] font-bold text-white md:p-8 md:text-6xl md:leading-[4.5rem] ">Empowering Success <br></br>through<br></br> Expert Guidance</h1>
          <p className="p-2 font-inter font-light text-white text-md w-[25ch] md:text-xl md:px-8 md:w-[35ch]">
            Fueling success through <br />insightful strategies and bold innovations
          </p>
          <div className="mt-5 p-2 md:text-xl md:px-8">
            <Link to="/contact"><button href="" className="px-4 py-2 flex items-center gap-2 bg-blue rounded-[50px] font-inter font-bold  text-white md:px-5 md:py-1">Get in touch
              <img src={Arrow} alt="" className="animate-pulse w-12 md:w-16" /></button></Link>
          </div>

          <div id="social-mob" className="px-3 gap-2 flex items-center">
            <Link to="https://www.instagram.com/mcac.msi/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="96"
                height="96"
                className="w-10 fill-white md:fill-black  md:hidden"
                viewBox="0 0 24 24"
              >
                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
              </svg>
            </Link>
            <Link to="https://www.linkedin.com/company/meliuscac/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="w-10 fill-white md:fill-black  md:hidden"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div id="socials" className="hidden md:flex flex-col gap-5 fill-black">
          <Link to="https://www.instagram.com/mcac.msi/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-10 fill-white md:fill-black"
              viewBox="0 0 24 24"
            >
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
          </Link>
          <Link to="https://www.linkedin.com/company/meliuscac/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-10 fill-white md:fill-black"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
