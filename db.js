const express= require('express');
const app= express();
const mysql=require('mysql');
const PORT=8080;

app.get('/',(req,res)=>{
    res.send('conexion a express');
});
app.listen(PORT,()=>{
    console.log('se esta presenciando en el puerto  ${PORT}')
});