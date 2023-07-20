import React from "react";
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
        </div>
        <div>{this.props.name}</div>
        <div>{JSON.stringify(this.props.address)}</div>
      </div>
    );
  }
}
export default Profile;
