const html = `    <!DOCTYPE html>
<html>
    <head>
            <meta charset="UTF-8">
            <title>Погода</title>
            <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Погода</h1>
        <section id="container">
            <article>
                <h3>Город</h3>
                <div class="pic"></div>
                <div class="t">25℃</div>
                <div class="info">Информация</div>
            </article>
            <article>
                <h3>Город</h3>
                <div class="pic"></div>
                <div class="t">25℃</div>
                <div class="info">Информация</div>
            </article>
            <article>
                <h3>Город</h3>
                <div class="pic"></div>
                <div class="t">25℃</div>
                <div class="info">Информация</div>
            </article>
        </section>
    </body>
</html>`
const css = `article {
    border: 1px solid;
    border-radius: 20px;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 50px;
    gap: 30px;
}
#container {
    width: 700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
body {
    font: 24px sans-serif;
}
h1 {
    margin: 0 0 50px;
    text-align: center;
}
h3 {
    margin: 0;
    grid-column: 1 / 3;
    text-align: center;
}
.info {
    grid-column: 1 / 3;
}
.pic {
    width: 50px;
    border-radius: 50%;
    background-color: blueviolet;
}`
const http = require('http');
http.createServer((req, res) => {
    switch(req.url){
        case '/':
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
            break;
        case '/style.css':
            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(css);
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.end('404 Не найдено')
            break;
    }

} ).listen(3000, () => console.log('Сервер работает'))