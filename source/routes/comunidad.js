const mysql = require('mysql');

//Connection to BD, if i drop this dosent work
let connection = mysql.createConnection({
    host: 'localhost',                      
    user: 'root',                           
    password: '',                           
    database: 'lucaPlatform',
    port: '3306'    
});

module.exports = (app) => {
    let entries = [];
    app.locals.entries = entries;

    //Route /comunidad
    app.get('/comunidad',(req, res) => {
        connection.query('SELECT * FROM preguntas', (err, rows, fields) =>{
            if(err) throw err;
            let preguntas = rows;
            console.log(preguntas);
            res.render('comunidad', {
                entries: preguntas
            });
        });
        
    })
    
    //Get route comunidad/nuevaPregunta
    app.get('/comunidad/nuevaPregunta',(req, res) => {
    res.render('nuevaPregunta', {
        title: 'Nueva Entrada'
        });
    });

    //Post in comunidad/nuevaPregunta
    app.post('/comunidad/nuevaPregunta', (req, res) => {
        //If title or body empty, error 400
        if (!req.body.title || !req.body.body) {
            res.send(400).send('Las publicaciones deben tener un título y un cuerpo');
        }
    
    //Save data in newEntry
    let newEntry = {
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    }

    entries.push(newEntry);

    //Use inputs of title and body whith newEntry date for connection query insert
    connection.query('INSERT INTO preguntas(titulo, cuerpo, fecha) VALUES(?, ?, ?)', [req.body.title, req.body.body, newEntry.published],
        (err, rows, fields) =>{
            if(err) throw err;
                console.log(rows);
        });

res.redirect('/comunidad');
    });
}
