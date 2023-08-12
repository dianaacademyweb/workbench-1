import React, { useState, useEffect } from 'react';
import banner from '../../assets/Images/layouts/banner.png';
import Card from '../card';
import DashApi from '../../dashboard/auth';
import { IMAGE_API } from '../../config/constant';

import axios from 'axios';

function ProfileImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false); // Track image upload status
  const [updateMode, setUpdateMode] = useState(false); // Track update mode status
  const [selectFileUpload, setSelectedFileUpload] = useState(null)
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileUpload  = (event) => {
    setSelectedFileUpload(event.target.files[0]);
  };
  const id = localStorage.getItem('id');
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
        console.log(response); // Assuming `message` contains the image URL
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
        .post(`${IMAGE_API}/api/users/imageupload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log('Image uploaded successfully');
          setIsUploaded(true); // Set image upload status to true
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
          // Handle the error
        });
    }
  };

  const handleUpdate = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (selectFileUpload) {
      const formData = new FormData();
      formData.append('image', selectFileUpload);
      formData.append('organization_id', organization_id);
      const id = profileImage.id;
      try {
        console.log(formData)
        console.log(selectFileUpload)
        await axios.put(`${IMAGE_API}/api/users/imageupload/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response)
        console.log('Image updated successfully');
        setUpdateMode(false); 
        setIsUploaded(true);
      } catch (error) {
        console.error('Error updating image:', error);
        // Handle the error
      }
    
    }
  };
  

  const handleRemove  =async (event) => {
    if (event) {
      event.preventDefault();
    }
    
      try {
        const id = profileImage.id;
        await axios.delete(`${IMAGE_API}/api/users/imageupload/${id}`,  {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response)
        console.log('Image updated successfully');
        setUpdateMode(false); 
        setIsUploaded(true);
      } catch (error) {
        console.error('Error updating image:', error);
        // Handle the error
      }
    
    
    setIsUploaded(false); // Reset image upload status
  };

  return (
    <div>
      <Card extra={'items-center w-full h-full p-[16px] bg-cover'}>
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute  -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-lightPrimary dark:!border-navy-700">
            {profileImage && (
              <div key={profileImage.id}>
                <img
                  className="rounded-full h-[87px] w-[87px] "
                  src={`${IMAGE_API}/${profileImage.image}`}
                  alt="Profile Image"
                />
              </div>
            )}
          </div>
        </div>
      </Card>
      
        <div>
        {profileImage ? (
        <div>
        <button className="border p-1 rounded-3xl border-navy-800" onClick={() => setUpdateMode(true)}>
          Update Image
        </button>
        <button className="border p-1 rounded-3xl border-red-800" onClick={handleRemove}>
          Remove Image
        </button>
      </div>
      ) : (
        
        <div>
      
              <input type="file" onChange={handleFileChange} />
              <button className="border p-1 rounded-3xl border-navy-800" onClick={handleUpload}>
                Upload Image
              </button>
              </div>
            
      )}
         <form encType="multipart/form-data">
          {updateMode && (
            <>
              <input type="file" onChange={handleFileUpload} />
              <button className="border p-1 rounded-3xl border-navy-800" onClick={handleUpdate}>
                Confirm Update
              </button>
            </>
          )}
          </form>
        </div>
        
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default ProfileImage;
