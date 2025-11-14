let express= require('express');
let app= express();

app.get('/',(req,res)=>{
    res.send('conexion a express');
});
app.listen('3000',()=>{
    console.log('se esta presenciando en el puerto 3000')
});