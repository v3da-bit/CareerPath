import React from "react";
import Navbar from "../Components/common/Navbar";
import InfoCard from "../Components/profile/InfoCard";
import TabSwitcher from "../Components/profile/TabSwitcher";
import FarmerPost from "../Components/profile/FarmerPost";
import styled from "styled-components";

const ProfileWrapper = styled.div``;

const Profile = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <ProfileWrapper className="min-h-screen flex flex-col">
        <InfoCard />
        <TabSwitcher />
        <FarmerPost />
      </ProfileWrapper>
    </div>
  );
};

export default Profile;
