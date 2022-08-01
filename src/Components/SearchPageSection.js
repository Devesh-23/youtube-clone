import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";


function SearchPageSection() {
  return (
    <div className="SearchPage">
      <div className="SearchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow image="https://newsfrom360.in/wp-content/uploads/2021/04/Round-2-hell-income-and-net-worth.jpg"
      channel="Round2hell" verified subs="660k" noofVideos={382}
      description="YouTuber, Who Define The Real Meaning of Laugh. Managed by
      BrandzUp ( VCOI Digital Media Pvt. Ltd. ) For Business ..."
      />
      <hr/>
      <VideoRow 
      image="https://whatonott.com/wp-content/uploads/2022/05/Round2hell-epl-web-series.jpg"
      channel="Round2hell"
      description="Get 500 bonus by using this Referral code- *R2H500* EPL Season 1 : https://youtu.be/0voI9HJD_Ns For Behind The Scenes ."
      timestamp="2 yrs ago"
      subs="660k"
      title="EPL Season 2 | Round2Hell | R2H"
      views="1.4 M"
      />
      <VideoRow 
      image="https://whatonott.com/wp-content/uploads/2022/05/Round2hell-epl-web-series.jpg"
      channel="Round2hell"
      description="Get 500 bonus by using this Referral code- *R2H500* EPL Season 1 : https://youtu.be/0voI9HJD_Ns For Behind The Scenes ."
      timestamp="2 yrs ago"
      subs="660k"
      title="EPL Season 2 | Round2Hell | R2H"
      views="1.4 M"
      />
      <VideoRow 
      image="https://whatonott.com/wp-content/uploads/2022/05/Round2hell-epl-web-series.jpg"
      channel="Round2hell"
      description="Get 500 bonus by using this Referral code- *R2H500* EPL Season 1 : https://youtu.be/0voI9HJD_Ns For Behind The Scenes ."
      timestamp="2 yrs ago"
      subs="660k"
      title="EPL Season 2 | Round2Hell | R2H"
      views="1.4 M"
      />
      <VideoRow 
      image="https://whatonott.com/wp-content/uploads/2022/05/Round2hell-epl-web-series.jpg"
      channel="Round2hell"
      description="Get 500 bonus by using this Referral code- *R2H500* EPL Season 1 : https://youtu.be/0voI9HJD_Ns For Behind The Scenes ."
      timestamp="2 yrs ago"
      subs="660k"
      title="EPL Season 2 | Round2Hell | R2H"
      views="1.4 M"
      />
      
    </div>
  );
}

export default SearchPageSection;
