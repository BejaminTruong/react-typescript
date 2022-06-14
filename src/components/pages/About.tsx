import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

const About = (props: Props) => {
  const [message, setMessage] = useState<string>("");
  const { id } = useParams();
  useEffect(() => {
    if (id) setMessage("The id is: " + id);
    else setMessage("No id was provided");
  }, []);

  return (
    <div>
      This is About page
      <p>{message}</p>
    </div>
  );
};

export default About;
