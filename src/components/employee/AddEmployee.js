import React, { Component } from 'react';
import axios from 'axios';

class AddEmployee extends Component {

    constructor(){
        super();
        this.state={
            name: '',
            code: '',
            profession: '',
            color: '',
            city: '',
            branch: '',
            assigned: false,
            errors:{},
            msg:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const newEmployee = {
            name: this.state.name,
            code: this.state.code,
            profession: this.state.profession,
            color: this.state.color,
            city: this.state.city,
            branch: this.state.branch,
            assigned: this.state.assigned
        }
        axios.post('http://localhost:8080/api/employees/addEmployee',newEmployee)
        .then(res=>{
                this.setState({
                    msg:'Employee added successfully',
                    name: '',
                    code: '',
                    profession: '',
                    color: '',
                    city: '',
                    branch: '',
                    assigned: false
                });           
        })
        .catch(err=>console.log(err));
    }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add a new employee</h1>
              {this.state.msg!==''?<div>{this.state.msg}</div>:this.state.msg}
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={this.state.name} onChange={this.onChange} placeholder="Name" name="name" required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={this.state.code} onChange={this.onChange} placeholder="Code" name="code" required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={this.state.profession} onChange={this.onChange} placeholder="Profession" name="profession" required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={this.state.color} onChange={this.onChange} placeholder="Color" name="color" required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={this.state.city} onChange={this.onChange} placeholder="City" name="city" required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={this.state.branch} onChange={this.onChange} placeholder="Branch" name="branch" required/>
                </div>
                
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Assigned</label>
                </div>
                <select className="custom-select" value={this.state.assigned} name="assigned" onChange={this.onChange}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
    )
  }
}

export default AddEmployee;
