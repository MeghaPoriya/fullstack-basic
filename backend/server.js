// get a list of 5 jokes

app.get('/api/kokes', (req, res) => {
    res.send('sever is ready');
});

// get list of 5 jokes


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server at http://localhost:${port}');
    }
);