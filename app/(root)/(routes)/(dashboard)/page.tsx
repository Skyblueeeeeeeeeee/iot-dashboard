"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const SetupPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/login");
    } else {
      console.log("get user info");
    }
  }, []);

  return <>This is Dashboard</>;
};

export default SetupPage;
