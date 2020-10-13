const express = require('express')
const app = express()
const port = 3030

app.get('/badge/:user/:repository', (req, res) => {

    let user = req.params.user;
    let repo = req.params.repository;

    res.redirect(`docable://github.com/${user}/${repo}`);
})


app.get('/', (req, res) => {

    let referrer = req.get('Referrer');

    if( referrer )
    {
        referrer = referrer.replace("https://", "docable://")
                            .replace("http://", "docable://")
        res.redirect(referrer);
    }
    else{
        res.send("Ok");
    }

})

app.listen(port, () => {
  console.log(`Badge service listening on http://localhost:${port}`)
})