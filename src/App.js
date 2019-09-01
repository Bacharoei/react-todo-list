import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "wake-up"
      },
      {
        id: 2,
        title: "take a shower"
      },
    ],
    id: uuid(),
    task: '',
    editItem: false
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };



  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8.mt-5">
              <h3 className="text-capitalize text-center">
                Task input
              </h3>
              <TodoInput item={this.state.item} />
              <TodoList/>

            </div>
          </div>

        </div>

    );
  }
}

export default App;
