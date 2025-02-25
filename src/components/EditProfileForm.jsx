import { useEffect, useRef, useState } from "react";
import style from '../styles/editprofileform.module.css';
const EditForm = ({darkMode, currentProfile = {}}) => {
  const [data, setData] = useState({ name: "", title: "", email: "", bio: "", image: null });
  const [errors, setErrors] = useState({image: "", general: ""});
  const [submitting, setSubmitting] = useState(false);
  const initialSet = useRef(false);
  useEffect(() => {
    console.log(initialSet);
    if (!initialSet.current  && Object.keys(currentProfile).length > 0 ) {
      console.log(currentProfile)
      setData({
        name: currentProfile.name || "",
        title: currentProfile.title || "",
        email: currentProfile.email  || "",
        bio: currentProfile.bio  || "",
        image: null,
      });
      initialSet.current = true;
    }
    
  }, [currentProfile])

  const handleInput = (e) => {
    if(e.target.name == "image") {
        const imageFile = e.target.files[0];
        if (imageFile.size > 2000000) {
            setErrors({...errors, image:"image file size must be less than 2MB."})
        } else {
            setData({...data, image: imageFile});
        }
        
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); //form data object -> console.log(formData.get("name"));
    setSubmitting(true);
    //sanitizing inputs 
    formData.append("id", currentProfile.id || "");
    formData.append("name", data.name.trim());
    formData.append("email", data.email.trim());
    formData.append("title", data.title.trim());
    formData.append("bio", data.bio.trim());
    if (data.image) formData.append("image", data.image);
    try {
      const response = await fetch(
        "https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/send-data-with-id.php",
        {
          method: "POST",
          body: formData,
        });
      const result = await response.json();
      console.log(result.message);
      if(result.success) {
        setErrors({image:"", general:""});
      } else {
        setErrors({image: "", general: result.message});
      }
    } catch (error) {
      setErrors({image:"", general: error});
    }
  };
  return (
    <div className={`${style["background"]} ${darkMode ? style["darkMode"] : ""}`}>
      <form onSubmit={handleSubmit} className={`${style["container"]} ${darkMode ? style["darkMode"] : ""}`}>
    <input
      name="name"
      placeholder="Name"
      type="text"
      required
      value={data.name}
      className={style["biography"]}
      onChange={handleInput}
    > </input>
    <input
      name="title"
      placeholder="Title"
      type="text"
      required
      value={data.title}
      className={style["biography"]}
      onChange={handleInput}
    ></input>
    <input
      name="email"
      placeholder="Email"
      type="email"
      required
      value={data.email}
      className={style["biography"]}
      onChange={handleInput}
    ></input>
    <textarea
      name="bio"
      placeholder="Enter a Bio"
      className={style["biography"]}
      required
      maxLength={200}
      value={data.bio}
      onChange={handleInput}
    ></textarea>
    <p>{data.bio.length}/200</p>
    <label htmlFor="image">Choose a Profile Picture:</label>
    <input type="file" id="image" name="image" required accept="image/png, image/jpeg, image/jpg" onChange={handleInput}/>
    {errors.image && <p>{errors.image}</p>}
    <button type="submit" className={style["submit"]} disabled={submitting || errors.image !== ""|| data.name  === "" || data.bio  === "" || data.email  === "" || data.title  === "" || data.image === null}>Submit</button>
    {errors.general && <p>{errors.general}</p>}
  </form></div>
    
  );
};

export default EditForm;
