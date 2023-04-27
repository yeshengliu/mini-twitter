import React from "react";
import axios from "axios";

function PictureUpload() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="image" name="picUrl" />
        <input type="submit" value="Upload File" />
      </form>
    </div>
  );
}

export default PictureUpload;
