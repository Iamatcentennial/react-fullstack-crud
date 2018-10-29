import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class DeleteEmployee extends Component {
    constructor(){
        super();
        this.state ={
            id:'',
            msg:'',
        }
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit =(e)=>{
        e.preventDefault();
        const id=this.state.id;
        console.log(id);
        axios.delete(`http://localhost:8080/api/employees/deleteEmployee/${this.state.id}`)
        .then(res=>{
          const affectedRows = res.data.affectedRows;
          if(affectedRows){
            this.setState({
              id:'',
              msg:'Employee deleted successfully'
          });
          }else{
            this.setState({
              id:'',
              msg:'No such id exists'
            })
          }
          console.log(affectedRows);
          
        })
        .catch(err=>console.log(err));
    }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Delete an Employee</h1>
             <div>{this.state.msg}</div>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" value={this.state.id} onChange={this.onChange} placeholder="id" name="id" required />
                </div>
                <input type="submit" value="Delete" className="btn btn-info btn-block mt-4" />
                <Link to="/" className="btn btn-danger btn-lg btn-block mt-4 ">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
    )
  }
}
export default DeleteEmployee;