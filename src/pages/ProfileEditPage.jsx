import Wrapper from "../components/Wrapper";
import {useParams, useNavigate} from "react-router-dom";

const ProfileEditPage = () => {
    const {id} = useParams();

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete your profile?")) {
            fetch(`https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/delete-profile.php?id=${id}`, {
                method: "DELETE",
            }).then((rep) => rep.json())
            .then(data => {
                if(data.message === "success") {
                    alert("Profile Deletion Successful");
                    navigate("/");
                } else {
                    alert("Failed to delete profile");
                }
            })
        }
    };

    return (
        <Wrapper>
            <h1> Edit Profile </h1>
            <button onClick={handleDelete}> Delete Profile </button>
        </Wrapper>
    )
}

export default ProfileEditPage;