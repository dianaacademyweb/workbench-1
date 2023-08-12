import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashApi from "../../dashboard/auth";
import { useNavigate } from "react-router-dom";

function CreateProfile() {
  const navigate = useNavigate();
  // const [agreement, setAgremment] = useState(true);
  const id = localStorage.getItem("id");
  const [name, setName] = useState("");
  const [contact, setcontact] = useState("");
  // const [image , setimage] = useState(" ")
  const [website, setWebsite] = useState("");
  const [address, setaddres] = useState("");
  const [location, setlocation] = useState("");
  const [Gender, setGender] = useState("");
  const [organization_id, setOrganisation] = useState(id);

  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Create profile");
  const Profile = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (name === "") {
      return setError("You must enter your name.");
    }
    try {
      setButtonText("Done");
      let response = await DashApi.Profile({
        name,
        contact,
        website,
        address,
        location,
        Gender,
        organization_id,
      });
      console.log(response);
      if (response.data && response.statusText === "Created") {
        setButtonText("setting Profile");
        setError("profile created succesfuly");
        return navigate("/profile");
      }
    } catch (err) {
      setButtonText("Add Details");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      console.log(err);
      return setError("There has been an error.");
    }
  };
  return (
    <div className="mt-28">
      <h1 className=" text-3xl flex justify-center align-center">
        SetProfile here
      </h1>
      <form action="POST">
        <label htmlFor="Username">Name</label>
        <input
          className="block text-black shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setError(undefined);
          }}
        />
        <label htmlFor="">Contact</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block"
          placeholder="contact"
          type="text"
          name="contact"
          value={contact}
          onChange={(event) => {
            setcontact(event.target.value);
            setError(undefined);
          }}
        />
        <label htmlFor="">Website</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block"
          placeholder="Website url"
          type="text"
          name="organisation"
          value={website}
          onChange={(event) => {
            setWebsite(event.target.value);
            setError(undefined);
          }}
        />
        <label htmlFor="">Address</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block"
          placeholder="Address"
          type="text"
          name="adrres"
          value={address}
          onChange={(event) => {
            setaddres(event.target.value);
            setError(undefined);
          }}
        />
        <label htmlFor="">Location</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block"
          placeholder="location"
          type="text"
          name="location"
          value={location}
          onChange={(event) => {
            setlocation(event.target.value);
            setError(undefined);
          }}
        />
        <label htmlFor="">Gender</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline block"
          placeholder="Enter your password"
          type="text"
          name="gender"
          value={Gender}
          onChange={(event) => {
            setGender(event.target.value);
            setError(undefined);
          }}
        />
        <h1 className="text-green-600">{error}</h1>

        <button
          className="flex mt-10 bg-navy-800 px-4 py-2  rounded-full text-lightPrimary "
          type="submit"
          onClick={Profile}
        >
          {" "}
          {buttonText}{" "}
        </button>
      </form>
    </div>
  );
}

export default CreateProfile;
