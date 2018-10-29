import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Landing extends Component {
    state ={
        employees:[]
      }
    componentWillMount=()=>{
        axios.get('http://localhost:8080/api/employees')
        .then((res)=>{
          const employees = res.data.employees;
          this.setState({employees});
        })
        .catch(err=>console.log(err));
      }
  
    render() {
    return (
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Plexxis Employees</h1>
                <p className="lead"> List of our all woriking employees</p>
                <hr />
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Code</th>
                            <th scope="col">Profession</th>
                            <th scope="col">Color</th>
                            <th scope="col">City</th>
                            <th scope="col">Branch</th>
                            <th scope="col">Assigned</th>
                        </tr>
                      </thead>
                      
                      <tbody>
                      {this.state.employees.map((employee)=>
                        <tr>
                          <td>{employee.id}</td>
                          <td>{employee.name}</td>
                          <td>{employee.code}</td>
                          <td>{employee.profession}</td>
                          <td>{employee.color}</td>
                          <td>{employee.city}</td>
                          <td>{employee.branch}</td>
                          <td>{Boolean(employee.assigned).toString()}</td>
                        </tr>)}
                      </tbody> 
                    </table>
                  </div>
                <div className="form-group mt-3">
                  <Link to="/addemployee" className="btn btn-lg btn-info mr-2">Add Employee</Link>
                  <Link to="/deleteemployee" className="btn btn-danger btn-lg mr-2 ">Delete Employee</Link>
                  <Link to="/updateemployee" className="btn btn-success btn-lg ">Update Employee</Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Landing;
