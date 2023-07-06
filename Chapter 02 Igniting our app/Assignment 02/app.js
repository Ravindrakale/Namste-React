const root = ReactDOM.createRoot(document.getElementById("root"));
const eleHeader1 = React.createElement("h1", { key: "h1" }, "Header One");
const eleHeader2 = React.createElement("h1", { key: "h2" }, "Header Two");
const eleContainer = React.createElement("div", {}, [eleHeader1, eleHeader2]);
root.render(eleContainer);
