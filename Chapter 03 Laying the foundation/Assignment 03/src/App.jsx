const App = () => {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        ></input>
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            @
          </span>
        </div>
      </div>
    );
  };
  
  export default App;