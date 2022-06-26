import React, { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = "STORE | " + props.title;
  }, [props]);

  return <></>;
};

export default Head;
