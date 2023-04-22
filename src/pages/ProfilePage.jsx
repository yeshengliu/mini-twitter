import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Feeds from "../components/Feeds";

function ProfilePage() {
  const { username } = useParams();

  return (
    <Feeds usernames={[username]} />
  )
}

export default ProfilePage;