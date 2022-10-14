

const conexion = require ('../db/db');



const consultas = (req, res, next) => {
     let sql = 'SELECT * FROM px7xe91xpkgz454v.productos ';

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


