import React, { useState } from 'react';
import '../CSS/DetailsForm.css'; // Import your CSS file

function DetailsForm() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-container">
      <h1 className='title'>User Information Form</h1>
      <div className="form-group profile-pic-div">
        <img src={selectedImage} id="photo" alt="Photo" />
        <input type="file" id="file" onChange={handleImageChange} />
        <label htmlFor="file" id="uploadBtn">
          Choose Photo
        </label>
      </div>
      <form>
        <div className="form-group">
          <label>Sex</label>
          <div className="radio-group">
            <label htmlFor="male">
              <input type="radio" id="male" name="sex" value="male" />
              Male
            </label>
            <label htmlFor="female">
              <input type="radio" id="female" name="sex" value="female" />
              Female
            </label>
            <label htmlFor="other">
              <input type="radio" id="other" name="sex" value="other" />
              Other
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select id="location" name="location">
            <option>select country</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default DetailsForm;
