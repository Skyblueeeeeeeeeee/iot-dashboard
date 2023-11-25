"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useWindowDimensions from "@/hooks/useWindowDimention";
import { getDeviceId, selectDeviceId } from "@/redux/services/device.slice";
import { AppDispatch } from "@/redux/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbEntity } from "thingsboard-api-client";
import TelemetryTable from "./components/telemetry-table";

const deviceId = "ef3dc260-8a21-11ee-ace3-afcb18c2767c";
const keys = "latitude,longitude";

const DashboardPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const deviceById = useSelector(selectDeviceId);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/login");
    }

    if (!deviceById?.data) {
      dispatch(getDeviceId({ token, path: { deviceId } }));
    }
  }, []);

  const now = Date.now();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{deviceById?.data?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <TelemetryTable
          entityId={deviceId}
          entityType={TbEntity.DEVICE}
          keys={keys}
          startTs={0}
          endTs={now}
        />
      </CardContent>
    </Card>
  );
};

export default DashboardPage;
