import React from "react";
import home from "/src/assets/Images/layouts/home.jpg";
import { Link } from "react-router-dom";
const sections = [
  {
    title: "Getting Started",
    content: [
      "Welcome to the DianaSentinel Documentation guide ! To begin, follow these steps:",
      "Install the system software by using the below link",
      "https://sentinel.www.dianasentinel.com/api/dashboard/downloaddesktop/",
    ],
    image: "/src/assets/Images/download.png",
  },
  {
    title: "Installing",
    content: [
      "you can check the downloadings tab and verify that the app is installing",
    ],
    image: "/src/assets/Images/installation.png",
  },
  {
    title: "Extracting",
    content: ["After installing the app extract the file"],
    image: "/src/assets/Images/extract.png",
  },
  {
    title: "Permissions",
    content: [
      "After extracting to install the desktopapp you to allow to install",
      "Click on the more info",
    ],
    image: "/src/assets/Images/allow1.png",
  },
  {
    title: "Run Anyway",
    content: [
      "After clicking on the more info it asks to run the app",
      "click on the run anyway",
    ],
    image: "/src/assets/Images/allow2.png",
  },
  {
    title: "Setup",
    content: [
      "Now in the click the checkbox if you want to get the dektop icon",
    ],
    image: "/src/assets/Images/setup1.png",
  },
  {
    title: "Final Setup",
    content: ["Now th app is ready to install and click on the install button"],
    image: "/src/assets/Images/setup2.png",
  },
  {
    title: "Installing",
    content: [
      "Finally the desktopapp will be installing in the selected directory",
    ],
    image: "/src/assets/Images/install.png",
  },
];

const Installation = () => {
  return (
    <div
      className="bg-cover  min-h-screen"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="flex justify-between">
        <Link to="/dashboard">
          <button className="px-2 py-1 bg-gray-400 rounded-md">Back</button>
        </Link>
        <Link to="/docsclientapp">
          <button className="px-2 py-1 bg-gray-400 rounded-md">
            Client App
          </button>
        </Link>
      </div>
      <div className="p-4 w-full text-lightPrimary text-center">
        {sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-xl font-bold mb-2">{section.title}</h2>
            <ul className="list-disc ml-6">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
            <img
              src={section.image}
              alt={section.title}
              className="my-4 w-2/3 mx-auto"
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Installation;
