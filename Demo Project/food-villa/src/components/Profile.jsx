import React from "react";
import UserContext from "../utils/UserContext";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Mount");
  }
  componentDidUpdate() {
    console.log("Update");
  }
  render() {
    let {user} = this.context;
    return (
      <div>
        <h3>Profile Component</h3>
        <div>This is sample profile class base component 🐱</div>
        <div>
          {this.state.count}{" "}
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            +
          </button>
          <div>{JSON.stringify(user)}</div>
        </div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}
Profile.contextType = UserContext;
export default Profile;
