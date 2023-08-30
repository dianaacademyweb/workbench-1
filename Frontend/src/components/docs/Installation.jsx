import React from "react";
import home from "../../assets/Images/layouts/home.jpg";
import { Link } from "react-router-dom";
import download from "../../assets/Images/layouts/download.png";
import installation from "../../assets/Images/layouts/installation.png";
import extract from "../../assets/Images/layouts/extract.png";
import allow1 from "../../assets/Images/layouts/allow1.png";
import allow2 from "../../assets/Images/layouts/allow2.png";
import setup1 from "../../assets/Images/layouts/setup1.png";
import setup2 from "../../assets/Images/layouts/setup2.png";
import install from "../../assets/Images/layouts/install.png";
const sections = [
  {
    title: "Step 1: Installing the System Software",
    content: [
      "Welcome to the DianaSentinel Documentation guide! Let's ensure you have a smooth installation experience by following these steps:",
      "Install the system software by using the below link",
      "https://sentinel.www.dianasentinel.com/api/dashboard/downloaddesktop/",
    ],
    image: `${download}`,
  },
  {
    title: "Step 2: Installation Progress",
    content: [
      "Once the download is complete, navigate to the Downloadings tab in your browser to monitor the installation progress. You will see the app being installed.",
    ],
    image: `${installation}`,
  },
  {
    title: "Step 3: Extracting Files",
    content: ["Upon successful installation, extract the downloaded file. This process is crucial for the next steps."],
    image: `${extract}`,
  },
  {
    title: "Step 4: Permissions",
    content: [
      "To proceed with the installation of the desktop app, certain permissions are required. Follow these steps:",
      "More Info: Click on More Info when prompted. This will provide you with additional details about the installation process.",
    ],
    image: `${allow1}`,
  },
  {
    title: "Run Anyway",
    content: [
      "Run Anyway: Despite the security warning, click on Run Anyway. This action ensures the smooth continuation of the installation process.",
    ],
    image: `${allow2}`,
  },
  {
    title: "Step 5: Setup",
    content: [
      "Now you're ready to configure the installation further",
      "Desktop Icon: During the setup, you can choose whether you want a desktop icon for easy access. Check the checkbox if you wish to have the desktop icon created.",
    ],
    image: `${setup1}`,
  },
  {
    title: "Step 6: Final Setup",
    content: ["With the setup configured, you're almost there:",
  "Install: Click on the Install button to initiate the final steps of the installation process."],
    image: `${setup2}`,
  },
  {
    title: "Step 7: Completing Installation",
    content: [
      "The desktop app will now be installed in the directory you selected. This marks the completion of the installation process.",
      "Congratulations, you've successfully installed the DianaSentinel Desktop App! If you have any questions or need further assistance, refer to the comprehensive documentation or reach out to our support team.",
      "By following these steps, you'll ensure a professional and seamless installation experience for the DianaSentinel Desktop App. If you encounter any issues, feel free to contact our support team for assistance."
    ],
    image: `${install}`,
  },
];

const Installation = () => {
  return (
    <div className="bg-cover min-h-screen" style={{ backgroundImage: `url(${home})` }}>
    <div className="flex justify-between p-4">
      <Link to="/dashboard">
        <button className="px-4 py-2 bg-gray-400 rounded-md">Back</button>
      </Link>
      <Link to="/docsclientapp">
        <button className="px-4 py-2 bg-gray-400 rounded-md">Client App</button>
      </Link>
    </div>
    <div className="p-4 w-full text-lightPrimary">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <ul className="list-disc pl-6">
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-2">{item}</li>
            ))}
          </ul>
          <img src={section.image} alt={section.title} className="my-4 w-2/3 mx-auto" />
        </section>
      ))}
    </div>
  </div>
  
  );
};

export default Installation;
