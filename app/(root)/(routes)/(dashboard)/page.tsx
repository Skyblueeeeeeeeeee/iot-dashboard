"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDeviceId, selectDeviceId } from "@/redux/services/device.slice";
import { AppDispatch } from "@/redux/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const deviceId = "ef3dc260-8a21-11ee-ace3-afcb18c2767c";
const keys = "latitude,longitude";

const DashboardPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const deviceById = useSelector(selectDeviceId);

  const token = localStorage.getItem("token");
  if (!token) {
    redirect("/login");
  }

  useEffect(() => {
    if (!deviceById?.data) {
      dispatch(getDeviceId({ token, path: { deviceId } }));
    }
  }, []);

  console.log({ deviceById });

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Device {deviceById?.data?.name} - History</CardTitle>
          <CardDescription>{deviceById?.data?.type}</CardDescription>
        </CardHeader>
        <CardContent>table</CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
