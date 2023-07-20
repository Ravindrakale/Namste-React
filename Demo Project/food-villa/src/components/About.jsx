import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <div>This is about us page</div>
      {/* <Outlet /> */}
      <Profile name="Ravindra" address={{add1:"Sangamner", add2:"Pune"}}/>
    </>
  );
};

export default About;
