import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    designation:""
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.surname === "" || this.state.designation === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", surname: "", designation: ""});
    this.props.history.push("/home");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Employee Contact Details</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={this.state.surname}
              onChange={(e) => this.setState({ surname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Employee ID</label>
            <input
              type="text"
              name="email"
              placeholder="Employee ID"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            </div>
          <div className="field">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={this.state.designation}
              onChange={(e) => this.setState({ designation: e.target.value })}
            />
          </div>
      <div className="field">
          <label> Access Card Status </label>
           <span className="redaobtn">Active</span>
            <input
              type="radio"
              value="Male"
          />
          <span className="space"></span>
          <span className="redaobtn">Inactive</span>
            <input
              type="radio"
              value="Female"
            />
        </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
