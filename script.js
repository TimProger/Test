// let a = `<h1>Погода</h1>
// <section id="container">
//     <article>
//         <h3>Город</h3>
//         <div class="pic"></div>
//         <div class="t">25℃</div>
//         <div class="info">Информация</div>
//     </article>
//     <article>
//         <h3>Город</h3>
//         <div class="pic"></div>
//         <div class="t">25℃</div>
//         <div class="info">Информация</div>
//     </article>
//     <article>
//         <h3>Город</h3>
//         <div class="pic"></div>
//         <div class="t">25℃</div>
//         <div class="info">Информация</div>
//     </article>
// </section>`
// document.body.innerHTML = a

///////////////////////////////////////
// document.body.appendChild(h1)



// let article = document.createElement('article')
// article.appendChild(h3)
// article.appendChild(divpic)
// article.appendChild(divt)
// article.appendChild(divinfo)

// let section = document.createElement('section')
// section.classList.add('container')
// section.appendChild(article);
// console.log(section.childNodes)
// document.body.appendChild(section)

let h1 = document.createElement('h1')
h1.innerHTML = "Погода"
document.body.appendChild(h1)

let section = document.createElement('section')
section.classList.add('container')
for(let i = 0; i < 3; i++){

    let h3 = document.createElement('h3')
    h3.innerHTML = "Город"

    let divpic = document.createElement('div');
    divpic.classList.add('pic');

    let divt = document.createElement('div');
    divt.classList.add('t');
    divt.innerHTML = "25℃";

    let divinfo = document.createElement('div')
    divinfo.classList.add('info')
    divinfo.innerHTML = "Информация"

    var article = document.createElement('article');
    article.appendChild(h3);
    article.appendChild(divpic);
    article.appendChild(divt);
    article.appendChild(divinfo);
    section.appendChild(article);
}
console.log(article.childNodes)
console.log(section.childNodes)
console.log(section.firstChild)
document.body.appendChild(section)