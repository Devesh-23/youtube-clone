import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomandationVideos from "./RecomandationVidoes";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <div className="app_page">
        <Sidebar />
        <RecomandationVideos />
      </div>
    </div>
  );
}

export default HomePage;
