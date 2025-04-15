import express from 'express';

const articleInfos = [
    {articleName: "learn-react", upVotes: 0, comments: []},
    {articleName: "learn-node", upVotes: 0, comments: []},
    {articleName: "mongodb", upVotes: 0, comments: []},
]

const app = express();
app.use(express.json());

// app.get('/hello', (req, res) => {
//     res.send('Hello '+ req.body.name +' from get');
// })

// app.get('/hello/:name', (req, res) =>{
//     res.send('Hello '+ req.params.name +' from get');
// })

// app.post('/hello', (req, res) =>{
//     res.send('Hello ' + req.body.age +' this message is from post');
// })

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articleInfos.find(a => a.articleName === req.params.name);
    article.upVotes += 1;

    // res.send(' Successfuly! The article ' + req.params.name + ' has ' + article.upVotes + ' upvotes ');

    res.json({article});
})

app.post('/api/articles/:name/comments', (req, res) => {
    const name =req.params.name;
    const {postedBy, text} = req.body;
    const article = articleInfos.find(a => a.articleName === name);
    article.comments.push({
        postedBy,
        text
    });

    res.json({article});
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
}
);