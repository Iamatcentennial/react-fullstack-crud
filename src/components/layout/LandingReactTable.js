import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class LandingReactTable extends Component {
    state ={
        employees:[],
        arrayLength:0
      }
    
      componentWillMount=()=>{
        axios.get('http://localhost:8080/api/employees')
        .then((res)=>{
          const employees = res.data.employees;
          this.setState({employees,arrayLength:employees.length});
        })
        .catch(err=>console.log(err));
      }
  render() {
      const columns =[
          { Header: 'Id',
          accessor: 'id'},
          { Header: 'Name',
          accessor: 'name'},
          { Header: 'Code',
          accessor: 'code'},
          { Header: 'Profession',
          accessor: 'profession'},
          { Header: 'Color',
          accessor: 'color'},
          { Header: 'City',
          accessor: 'city'},
          { Header: 'Branch',
          accessor: 'branch'},
          { Header: 'Assigned',
          accessor: 'assigned'}]
    return (
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Plexxis Employees
                </h1>
                <p className="lead"> List of our all woriking employees</p>
                <hr />
                <ReactTable
                    data={ this.state.employees }
                    columns={ columns }
                    showPagination={ true }
                    defaultPageSize={ 5 }
                />
                <div className="form-group mt-3">
                <Link to="/addemployee" className="btn btn-lg btn-info mr-2">Add Employee</Link>
                <Link to="/deleteemployee" className="btn btn-danger btn-lg mr-2 ">Delete Employee</Link>
                <Link to="/updateemployee" className="btn btn-success btn-lg ">Update Employee</Link>
              </div>
              </div>
            </div>
          </div>  
    )
  }
}
export default LandingReactTable;
