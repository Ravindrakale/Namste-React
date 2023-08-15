import Profile from "./Profile";
import useUser from "../hooks/useUser";
import useCustom from "../hooks/useCustomContext";

const About = () => {
  const { user, setUser } = useUser();

  const custom = useCustom();

  return (
    <>
      <h1>About Us</h1>
      <div>This is about us page</div>
      <div>{JSON.stringify(custom)}</div>
      <div>
        <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        ></input>
      </div>
      <Profile name="Ravindra" address={{ add1: "Sangamner", add2: "Pune" }} />
    </>
  );
};

export default About;
