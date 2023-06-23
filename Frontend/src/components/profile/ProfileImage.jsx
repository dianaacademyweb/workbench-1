import React , {useState , useEffect} from 'react'
import banner from "../../assets/Images/layouts/banner.png";
import Card from "../card";
import DashApi from '../../dashboard/auth';

import axios from 'axios';

function ProfileImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


    const id = localStorage.getItem("id");
    const [organization_id, setOrgnization] = useState(id);
    const [error, setError] = useState(undefined);
    const [image, setimage] = useState();
    const [profileImage, setProfileImage] = useState(null);


    useEffect(() => {
        // Fetch the image URL or path from the API
        const fetchProfileImage = async () => {
          try {
            const response = await DashApi.Getimage();
            setProfileImage(response.data[0]);
            console.log(response) // Assuming `message` contains the image URL
            if (response.data && response.data.success === true) {
                return setError(response.data.msg);
              }
            } catch (err) {
              console.log(err);
              if (err.response) {
                return setError(err.response.data.msg);
              }
              return setError('There has been an error.');
          }
        };
    
        fetchProfileImage();
      }, []);

const handleUpload = async (event) => {  
  if (event) {
    event.preventDefault();
  }
  if (selectedFile) {
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('organization_id', organization_id);

    axios
      .post('http://127.0.0.1:8001/api/users/imageupload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('Image uploaded successfully');
        // Handle the response from the backend
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        // Handle the error
      });
  }
};


















    // if (event) {
    //     event.preventDefault();
    //   } 
    //       // Make a POST request to the server
    //       try{
    //       const response = await DashApi.uploadimage({
    //         image,
    //         organization_id,
    //       });
    //       if (response.data && response.data.success === true) {
    //         setButtonText("Signing  up");
    //         setError(response.data.msg);
    //       console.log('Image uploaded successfully:', response.data);
    //       }
    //     }
    //      catch (error) {
    //         setError(error)
    //       console.error('Error uploading image:', error);
    //     }
    //   };
    

  
  return (
    <div>
        <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
       <div
               className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
               style={{ backgroundImage: `url(${banner})` }}
             >
               <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
               {profileImage && (
                
       <div key={profileImage.id}>
         <img className='rounded-[80px]' src={`http://127.0.0.1:8001/${profileImage.image}`} alt="Profile Image" />
       </div>
      )}
               </div>
               
    
             </div>
             </Card>
             <form  encType="multipart/form-data">
      {/* <div className='flex justify-center mt-20'> */}
        {/* <label className="text-navy-800 dark:text-white" htmlFor="image">Select Image:</label>
        <input
        
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(event) => {
            setimage(event.target.value);
            setError(undefined);
          }}
        />
      </div>
      <button className='flex justify-center' type="submit" onClick={upload}>Upload</button> */}

      <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      </div>
    </form>
             {error && <p>{error.message}</p>}
    </div>
  )
}

export default ProfileImage
