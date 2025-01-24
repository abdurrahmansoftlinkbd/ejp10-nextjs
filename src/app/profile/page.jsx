"use client";

import Loading from "@/components/Loading";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/api/auth/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold font-lustria text-default flex justify-center items-center min-h-screen">
        Welcome to your profile!
      </h2>
    </div>
  );
};

export default ProfilePage;
