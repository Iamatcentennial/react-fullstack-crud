import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class UpdateEmployee extends Component {
    constructor(){
        super();
        this.state ={
          id:0,
          name: '',
          code: '',
          profession: '',
          color: '',
          city: '',
          branch: '',
          assigned: false,
          msg:'',
          idmsg:''
        }
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit =(e)=>{
        e.preventDefault();
        const id=this.state.id;
        console.log(id);
        if(!id){
          this.setState({idmsg:'Enter a valid id'});
          return;
        }
        
        axios.get(`http://localhost:8080/api/employees/searchEmployee/${this.state.id}`)
        .then(res=>{
          const [first]=res.data;
          if(!first){
            this.setState({msg:'Employee id does not exists'});
            return;
          }
          this.setState({
            name:first.name,
            code: first.code,
            profession:first.profession,
            color:first.color,
            city: first.city,
            branch:first.branch,
            assigned:first.assigned
          });
        })
        .catch(err=>{
          console.log(err);
        });
    }
    
    onUpdate =(e)=>{
      e.preventDefault();
      const updatedEmployeeData ={
        id:this.state.id,
        name:this.state.name,
        code: this.state.code,
        profession:this.state.profession,
        color:this.state.color,
        city: this.state.city,
        branch:this.state.branch,
        assigned:this.state.assigned
      }
      axios.put(`http://localhost:8080/api/employees/updateEmployee/${this.state.id}`,updatedEmployeeData)
      .then(
        this.setState({
          id:0,
          name: '',
          code: '',
          profession: '',
          color: '',
          city: '',
          branch: '',
          assigned: false,
          msg:'Employee Updated Successfully'
        })
      )
      .catch(err=>console.log(err));
    }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <h1 className="display-6 text-center">Update an Employee</h1>
             <div>{this.state.idmsg}</div>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" value={this.state.id} onChange={this.onChange} placeholder="Enter id of the employee to update" name="id" required />
                </div>
                <input type="submit" value="Find Employee" className="btn btn-info btn-block mt-4" />
                <Link to="/" className="btn btn-danger btn-block mt-4 ">Cancel</Link>
              </form>
            </div>

            <div className="col-md-8 m-auto">
              <form onSubmit={this.onUpdate}>
                  <div className="form-group">
                  {this.state.msg?this.state.msg:''}
                  </div>
                  <div className="form-group">
                    <h2>Employee Information</h2>
                  </div>
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
                  <input type="submit" value="Update" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
          </div>
          
        </div>
    )
  }
}
export default UpdateEmployee;