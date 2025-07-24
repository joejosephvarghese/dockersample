import express from 'express'

import { serverConnect } from './server.js'
import { dbConnect } from './db/connection.js';


const app=express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

dbConnect();

serverConnect();
