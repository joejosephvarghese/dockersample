import express from 'express'

const app= express();

const port=3000


 export function serverConnect(){

    app.listen(3000,()=>{
        console.log(`server listening port ${port}`);
    })
}