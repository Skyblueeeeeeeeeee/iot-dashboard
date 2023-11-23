"use client";

import Heading from "@/components/heading";
import ChangePasswordForm from "./components/change-password-form";
import { Separator } from "@/components/ui/separator";

const SettingsPage = () => {
  return (
    <>
      <div className="space-y-6">
        <Heading title="Settings" description="Manage your account settings" />
        <Separator />
        <ChangePasswordForm />
      </div>
    </>
  );
};

export default SettingsPage;
