import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  subs,
  noofVideos,
  description,
  verified,
}) {
  return (
    <div className="ChannelRow">
      <Avatar className="ChannelRow_logo" src={image} alt={channel} />
      <div className="ChannelRow_text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} • {noofVideos}{" "}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
