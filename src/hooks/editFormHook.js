import { useEffect, useRef, useState, useContext } from "react";

function editForm(currentProfile) {

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

      return {handleSubmit, handleInput, data, submitting, errors}


}

export default editForm;