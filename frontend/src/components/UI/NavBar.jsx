import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "../../styles/NavBar.module.css";
import { UserContext } from "../../context/UserContext";
import { Avatar } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Badge from "@mui/material/Badge";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect } from "react";
import { FetchData } from "../../utils/REST";

function NavBar() {
  const navigate = useNavigate();
  const userDetails = useContext(UserContext).user;
  const [likes, setLikes] = useState(null);

  const fetchLikes = async () => {
    try {
      const results = await FetchData(
        "/bootcamps/liked",
        true,
        window.localStorage.getItem("token")
      );
      setLikes(results.data.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  useEffect(() => {
    fetchLikes();
  }, []);

  return (
    <div className={s.container}>
      <p
        onClick={() => {
          navigate("/home");
        }}
      >
        <LocalLibraryIcon sx={{ fontSize: "3.2rem" }}></LocalLibraryIcon>
        LetsCamp
      </p>
      <div className={s.control}>
        {likes && (
          <Badge
            badgeContent={likes}
            color="error"
            onClick={() => {
              navigate("/wishlist");
            }}
          >
            <FavoriteBorderOutlinedIcon
              sx={{ fontSize: "2.2rem" }}
            ></FavoriteBorderOutlinedIcon>
          </Badge>
        )}

        {userDetails && userDetails.role === "user" && <span>Ongoing</span>}
        {userDetails && userDetails.role === "publisher" && (
          <span
            onClick={() => {
              navigate("/mybootcamps");
            }}
          >
            My Bootcamps
          </span>
        )}
        {userDetails && (
          <Avatar
            {...stringAvatar(userDetails.name)}
            sx={{
              cursor: "pointer",
              bgcolor: "#6741C7",
              height: "3.2rem",
              width: "3.2rem",
            }}
            onClick={() => {
              navigate("/profile");
            }}
          ></Avatar>
        )}
      </div>
    </div>
  );
}

export default NavBar;
