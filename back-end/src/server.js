import express from 'express';

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello '+ req.body.name +' from get');
})

app.get('/hello/:name', (req, res) =>{
    res.send('Hello '+ req.params.name +' from get');
})

app.post('/hello', (req, res) =>{
    res.send('Hello ' + req.body.age +' this message is from post');
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
}
);