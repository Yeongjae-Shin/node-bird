import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const UserProfile = () => {
  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <AppLayout>내 프로필</AppLayout>
    </>
  );
};

export default UserProfile;