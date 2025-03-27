import style from '../styles/editprofileform.module.css';
import editForm from "../hooks/editFormHook";
import { useSelector } from "react-redux";

const EditForm = ({currentProfile = {}}) => {

  const {data, errors, submitting, successMessage, handleInput, handleSubmit} = editForm(currentProfile);
  const mode = useSelector((state => state.mode.mode))

  
  return (
    <div className={`${style["background"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
      <form onSubmit={handleSubmit} className={`${style["container"]} ${mode === "dark" ? style["darkMode"] : ""}`}>
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
