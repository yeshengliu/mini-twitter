import React from "react";
import cookie from "js-cookie";

function IndexPage() {
  return (
    <div>
      {
        cookie.get("username") ?
          (<h1>{`You are logged in as ${cookie.get("username")}`}</h1>) :
          (<h1>You are not logged in</h1>)
      }
    </div>
  );
}

export default IndexPage;