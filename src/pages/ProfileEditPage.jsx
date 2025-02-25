import Wrapper from "../components/Wrapper";
import EditForm from '../components/EditProfileForm';
import {useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const ProfileEditPage = () => {
    const {id} = useParams();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/fetch-data-with-id.php?id=${id}`, {
            }).then((res) => res.json())
            .then(data => {
                setProfile(data);
            }, [id]);
    })

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
            <EditForm currentProfile={profile}></EditForm>
            <button onClick={handleDelete}> Delete Profile </button>
        </Wrapper>
    )
}

export default ProfileEditPage;