import React from "react";
import Navbar from "../components/navbar";
import Notice from "../components/noticelist";
import Noticemodal from "../components/noticemodal";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
      </div>
    </>
  );
}

export default Dashboard;
