import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { username } = useParams();

  return (
    <div>
      <h1>{username}</h1>
    </div>
  )
}

export default ProfilePage;