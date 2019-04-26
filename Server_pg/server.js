/* =============================================  Requirements  ==============================================
================================================================================================================= */
// const path = require('path');//production related
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Pull in dotenv early - everything beyond here uses it.
require('dotenv').config();

const port = process.env.PORT || 3003; //back end port assigned to 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//TODO: hook up react part; currently only express and postgress are connected && add set up notes to MD


/* =============================================  Pool  =================================================
================================================================================================================= */
// pool manages postgreSQL clients;
const { Pool } = require('pg')
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB_NAME,
    password: process.env.PG_DB_PASS,
    port: process.env.PG_DB_PORT,
  })

// const pool = new Pool({
//     // 'postgres://localhost:5432/database_name'
//     connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/final_project ',
//     // Use SSL but only in production
//     ssl: process.env.NODE_ENV === 'production'
//   });



/* =============================================  Routes  =======================================================
================================================================================================================= */

//test route
app.get('/', (request, response) => { 
    response.json({ info: "Test Message Testing" })
    })

//get all
app.get('/user', async (req, res) => {
    const client = await pool.connect();
    const contactsTable = await client.query('SELECT * FROM user_profile_input');
    res.json(contactsTable.rows);
    client.release();
    console.log('GET QUERY OF APPRENTICES IS WORKING ON BACKEND') ///testing for true connection
})

//second get table

// //cohorts table get all
// app.get('/user, async (req, res) => {
//   const client = await pool.connect();
//   const contactsTable = await client.query('SELECT * FROM cohorts');
//   res.json(contactsTable.rows);
//   client.release();
//   console.log('GET QUERY OF COHORTS IS WORKING ON BACKEND') ///testing for true connection
// })

//return single item by id
app.get('/user/:id', async (req, res) =>{
  const client = await pool.connect();
  const eventsTable = await client.query('SELECT * FROM user_profile_input  WHERE id = $1', [req.params.user_zip_code]); 
  res.json(eventsTable.rows[0]); 
  client.release();
  console.log('GET SINGLE APPRENTICE BY ID QUERY IS WORKING ON BACKEND') ///testing for true connection
})

// //update an array item //TODO: posting all at oncee, only works with 5 given params
// app.put('/techtonica/apprentices/:id', async (req, res) =>{ 
//   const client = await pool.connect();
//   const eventsTable = await client.query("UPDATE apprentices SET first_name=$1, last_name=$2, WHERE id=$3 RETURNING *", [req.body.first_name,req.body.last_name,req.body.id,]);
//   client.release();
//   res.json(eventsTable.rows[0]) 
//   console.log('PUT QUERY IS WORKING ON BACKEND') ///testing for true connection
// })

// // //add a new item //TODO: posting all at once, only works with 5 given params (do I want to return all or everything excluding phone number)
// app.post('/user', async(req, res) => {
//   const client = await pool.connect();
//   const eventsTable = await client.query("INSERT INTO user_profile_input  (id, user_name, email, home_zip_code, phone_number, num_children, child_group, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [req.body.id, req.body.user_name, req.body.email, req.body.home_zip_code, req.body.phone_number, req.body.num_children, req.body.child_group, req.body.description]);
//   res.json(eventsTable.rows[0]);
//   client.release();
//   console.log('POST QUERY IS WORKING ON BACKEND') ///testing for true connection
// })

// //delete an item //TODO: posting all at once
// app.delete('/techtonica/:id', async(req, res) =>{
//   const client = await pool.connect();
//   const eventsTable = await client.query('DELETE FROM !!!!TABLE NAME!!!! WHERE id=$1 RETURNING * ', [req.params.id]);
//   res.json(eventsTable.rows[0]);
//   client.release();
//   console.log('DELETE QUERY IS WORKING ON BACKEND') ///testing for true connection
// });




/* =============================================  Deploying Code  =======================================================
================================================================================================================= */


// if (process.env.NODE_ENV === "production") {  //production means live instead of local
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, "../client/build"))); //build dir will be populated
//     // Handle React routing, return all requests to React app
//     app.get("*", function(req, res) {
//       res.sendFile(path.join(__dirname, "../client/build", "index.html"));
//     });
//   }
  
  /* =============================================  Listening Message  =======================================================
================================================================================================================= */

  app.listen(port, () => console.log(`>>>>>>>>>>>>> Back-End Express Server is Listening on Port ${port}! <<<<<<<<<<<<<`))