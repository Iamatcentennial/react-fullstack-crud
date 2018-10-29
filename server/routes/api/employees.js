const express = require('express');
const router = express.Router();
const connection = require('../../db/dbconnection');

// Getting all the Employees
router.get('/',(req,res)=>{
    
    const SELECT_ALL_EMPLOYEES_QUERY = 'SELECT * From employees';
    connection.query(SELECT_ALL_EMPLOYEES_QUERY,(err,results)=>{
        if(err){
            return err;
        }
        else
            res.json({
                employees:results
            });
    });
})

// Inserting a new Employee
router.post('/addEmployee',(req,res)=>{
    const {name,code,profession,color,city,branch,assigned} = req.body;
    const INSERT_INTO_EMPLOYEES = 
    `INSERT into employees(name,code,profession,color,city,branch,assigned) VALUES('${name}','${code}','${profession}','${color}','${city}','${branch}',${assigned})`;
    connection.query(INSERT_INTO_EMPLOYEES,(err,results)=>{
        if(err){
            console.log(err);
        }
        res.json({
            data:results
        });
    });
});
// Deleting an employee
router.delete('/deleteEmployee/:id',(req,res)=>{
    const id = req.params.id;
    const DELETE_EMPLOYEE_QUERY=`DELETE FROM employees WHERE id = ${id}`;
    connection.query(DELETE_EMPLOYEE_QUERY,(err, results)=>{
        if(err){
            console.log(err);
        }
        res.send(results);
    })
});
// Searching an element by id
router.get('/searchEmployee/:id',(req,res)=>{
    const id = req.params.id;
    const SEARCH_EMPLOYEE_QUERY=`SELECT name,code,profession,color,city,branch,assigned FROM employees WHERE id = ${id}`;
    connection.query(SEARCH_EMPLOYEE_QUERY,(err, results)=>{
        if(err){
            console.log(err);
        }
        res.send(results);
    })
});

//Updating an employee
router.put('/updateEmployee/:id',(req,res)=>{
    const id = req.params.id;
    const {name,code,profession,color,city,branch,assigned} = req.body;
    const UPDATE_EMPLOYEE_QUERY =`UPDATE employees SET name = '${name}', code = '${code}', profession = '${profession}', color = '${color}', city = '${city}', branch = '${branch}', assigned = '${assigned}' WHERE id = ${id}`;
    connection.query(UPDATE_EMPLOYEE_QUERY,(err,results)=>{
        if(err){
            console.log(err);
        }
        res.send(results);
    })
});
module.exports = router;