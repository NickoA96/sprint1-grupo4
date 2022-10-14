

const conexion = require ('../db/db');



const consultas = (req, res, next) => {
     let sql = 'SELECT * FROM kznss1or9svmzpk3.productos ';

     conexion.query(sql,  (err, result) => {
         if (err) throw err;
    res.render('consultas', {
        
        result : result
    })
    })
}



module.exports = {
    consultas
};


