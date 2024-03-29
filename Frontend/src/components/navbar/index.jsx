import React, { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/index";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { AiFillHome } from "react-icons/ai";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DashApi from "../../dashboard/auth";
import { IMAGE_API } from "../../config/constant";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { onOpenSidenav, brandtext } = props;
  const name = localStorage.getItem("name");

  const { setUser } = useAuth();
  const { setToken } = useAuth();
  const { setId } = useAuth();
  // const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "U"; // 'U' stands for "User" if no name is available
  };
  const Logout = async () => {
    // await AuthApi.Logout(user);
    await setUser(null);
    await setId(null);
    await setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    return navigate("/login");
  };
  const [profileImage, setProfileImage] = useState(undefined);
  const [profiles, setProfile] = useState([]);
  useEffect(() => {
    const SeeProfile = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.SeeProfile();
        setProfile(response.data[0]);
        console.log(response);
        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    SeeProfile(); // Call the function here
  }, []);

  useEffect(() => {
    // Fetch the image URL or path from the API
    const fetchProfileImage = async () => {
      try {
        const response = await DashApi.Getimage();
        setProfileImage(response.data[0]);
        console.log(response); // Assuming `message` contains the image URL
        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    fetchProfileImage();
  }, []);

  return (
    <nav className="m-2 top-4 z-40 flex flex-row flex-wrap items-center bg-[#C2CAD0]] justify-between  bg-white/10 p-2 backdrop-blur-xl dark:bg-[#4f4f504d]">
      <div className="ml-[6px]">
        <div className=" w-[224px] pt-1">
          {/* <Link
            to="/dashboard"
            className="text-lg font-normal text-white hover:underline dark:text-lightPrimary py-1 px-2 text-center  border border-white rounded-3xl "
          >
            Back
          </Link> */}
          <Link to="/dashboard">
          <button
            type="button"
            className="inline-block rounded dark:text-lightPrimary bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
             <AiFillHome size={20} />
          </button>
          </Link>

          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-lightPrimary dark:hover:text-white"
            to="/"
          ></Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-lightPrimary">
          <Link
            to="/Dashboard"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandtext}
          </Link>
        </p>
      </div>

      <div className="  relative mt-[3px] flex h-[61px] w-[355px] sm:w-[430px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none  md:flex-grow-0 md:gap-1  ">
        <div className="  flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-darktext dark:text-lightPrimary  ">
          <p className="lg:pl-3 lg:pr-2 text-xl">
            <FiSearch className="h-4 w-4  dark:text-navy-800" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className=" block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-white outline-none placeholder:!text-white dark:bg-lightPrimary dark:text-lightPrimary dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-lightPrimary xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-lightPrimary dark:text-lightPrimary" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-lightPrimary dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-lightPrimary dark:text-lightPrimary">
                  Notification
                </p>
                <p className="text-sm font-bold text-lightPrimary dark:text-lightPrimary">
                  Mark all read
                </p>
              </div>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-lightPrimary">
                    this is Diana sentinell
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-lightPrimary">
                    updates are available of new client app
                  </p>
                </div>
              </button>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="font-base text-left text-xs text-gray-900 dark:text-lightPrimary">
                    A new update for your downloaded
                  </p>
                </div>
              </button>
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />
        {/* start Horizon PRO */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-4 w-4 text-lightPrimary dark:text-lightPrimary" />
            </p>
          }
          children={
            <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-lightPrimary dark:shadow-none">
              <div
                style={{
                  backgroundImage: "",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="mb-2 aspect-video w-full rounded-lg"
              />
              <a
                target="blank"
                href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Welcome to diana sentinel
              </a>
              <a
                target="blank"
                href=""
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-lightPrimary dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
              >
                See Documentation
              </a>
              <a
                target="blank"
                href=""
                className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-lightPrimary dark:hover:text-white"
              >
                Try Diana sentinel
              </a>
            </div>
          }
          classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        />
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              setDarkmode(false);
              document.body.classList.remove("dark");
            } else {
              setDarkmode(true);
              document.body.classList.add("dark");
            }
          }}
        >
          {darkmode ? (
            <RiMoonFill className="h-4 w-4 text-lightPrimary dark:text-lightPrimary" />
          ) : (
            <RiSunFill className="h-4 w-4 text-lightPrimary dark:text-lightPrimary" />
          )}
        </div>
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <div className="flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-lightPrimary dark:!border-navy-700">
              {profileImage ? (
                <img
                  className="rounded-full h-full w-full object-cover"
                  src={`${IMAGE_API}${profileImage.image}`}
                  alt="Profile"
                />
              ) : (
                <div className="initial">
                  <p className="text-[40px] font-poppins">
                    {" "}
                    {getInitial(name)}
                  </p>
                </div>
              )}
            </div>
          }
          children={
            <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-lightPrimary dark:shadow-none">
              <div className="mt-3 ml-4">
                <p className="text-sm font-bold text-lightPrimary  dark:text-lightPrimary">
                  {profiles ? (
                    <>👋 Hey, {profiles.name}</>
                  ) : (
                    <>👋 Hey, {name}</>
                  )}
                </p>
              </div>

              <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="mt-3 ml-4 flex flex-col">
                <h1
                  href=" "
                  className="text-sm text-gray-800 dark:text-lightPrimary hover:dark:text-lightPrimary"
                >
                  <Link to="/profile">Profile Settings</Link>
                </h1>
                <h1
                  href=" "
                  className="mt-3 text-sm text-gray-800 dark:text-lightPrimary hover:dark:text-lightPrimary"
                >
                  Newsletter Settings
                </h1>
                <h1
                  href=" "
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  <button onClick={Logout}>Logout</button>
                </h1>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
