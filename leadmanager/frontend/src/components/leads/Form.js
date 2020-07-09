import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";
export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-row">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.onChange}
                className="form-control"
              />
            </div>

            <div className="form-row">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.onChange}
                className="form-control"
              />
            </div>

            <div className="form-row">
              <label>Message</label>
              <input
                type="text"
                name="message"
                value={message}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <div className="form-row">
              <input type="submit" name="submit" className="btn btn-success " />
            </div>
          </form>
        </div>
        <div className="card-footer"></div>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
