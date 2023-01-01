import React from "react";
import anime from "../assets/images/animeImage.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Chip } from "@mui/material";
const AnimeCard = (props) => {
  return (
    <>
      <div className="anime_card">
        <div className="combiner">
          <div className="image_wrapper">
            <img src={props.image} alt="" />
          </div>
          <div className="details_wrapper">
            <h3>{props.name}</h3>
            <div className="chip_wrapper">
              {props.nicknames.map((nickname) => {
                return (
                  <>
                    <Chip label={nickname} />
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="redirect_wrapper">
          <a href={props.url}>
            <ArrowForwardIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default AnimeCard;
