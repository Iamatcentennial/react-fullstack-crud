# Plexxis Interview Exercise
## Requirements
Create a simple but __impressive__ (looks good, works well, has intuitive design, etc.) CRUD application that can do the following:

1) Retrieve employees from a REST API  
    a) Going to create the backend first. For the backend server, we are using the express and for database, i am using the relational database MySql.
    b) Create a database in MySql server, create an 'employees' table and insert some dummy data.
    c) Use 'mysql' client in our project to interact with the database by creating an instance of the database and
    use the db instance methods to call upon the database and obtain the query results.
    d) For all the routing of backend, i have used the Router for creating different CRUD end points for employees.
    e) All the endpoints can be tested using the Postman.
2) Display the employees in a React application  
    a) Application has been divided into layout and component. Layout has header, footer , navigation and a landing component.
    b) Bootstrap 4 is used for designing the React components UI.
3) Has UI mechanisms for creating and deleting employees 
    a) Forms has been used creating deleting and updating of employees.
4) Has API endpoints for creating and deleting employees.
    a) Axios.js has been used for connecting front end and backend points.
5) Edit your version of the `README.md` file to explain to us what things you did, where you focussed your effort, etc.

*Read over the `Bonus` objectives and consider tackling those items as well*

## Bonus (Highly Encouraged)

1) Use a relational database to store the data (SQLite, MariaDB, Postgres)
    a) Used MySql relational database 
2) UI mechanisms to edit/update employee data
    a) React-router-dom has been used for creating routing to different edit/update forms.
3) Add API endpoint to update employee data 
    a) Separte endpoint added 
4) Use [React Table](https://react-table.js.org) 
    a) Used react-table for displaying the data using the 'employees' link.
    b) Data is shown separately with react-table.

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The front-end app runs off localhost:3000. The REST API is located in the /server folder and runs off localhost:8080. The data is being served from a JSON file located in the /server/data folder. Run `npm start` to start both servers.

Note: Please configure the dbconnection.js for making a connection with the database.

## Getting it Done
* You are free to use whatever libraries that you want. Be prepared to defend your decisions.
* There is no time limit. Use as little or as much time as is necessary to showcase your abilities.
* You should fork or clone our repository into your own repository.
  * Send us the link when you are done the exercise (pglinker at plexxis dot com).

If you do well on the test, we will bring you in for an interview. Your test results will be used as talking points.  

 __This is your chance to amaze us with your talent!__
