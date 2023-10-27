let jogo = { nome: "", descricao: "", imagem: ""};

let jogos = [];

jogos.push({
    nome: "Valorant",
    descricao: "Um FPS tático 5x5 com personagens marcantes, mecânica de tiro precisa e habilidades únicas",
    imagem: "https://static.vecteezy.com/ti/vetor-gratis/p3/19040372-valorant-logo-branco-gratis-vetor.jpg"
})

jogos.push({
    nome: "Rust",
    descricao: "O único objetivo em Rust é sobreviver. Tudo quer que você morra a vida selvagem da ilha e outros habitantes, o meio ambiente, outros sobreviventes.",
    imagem: "data:image/png;base64,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"
})

jogos.push({
    nome: "V Rising",
    descricao: "Desperte após centenas de anos de sono, enfraquecido e sedento de sangue. Reúna um clã de aliados online ou faça o papel de um lobo solitário.",
    imagem: "https://yt3.googleusercontent.com/scP7kvH9G5YAft5GZnW5M3osoMWYFrXV2XYlfjjJRPdM8s6KuNrTL-_LEdVgR2qduUp12PlT6GQ=s900-c-k-c0x00ffffff-no-rj"
})

function mostraJogos(){
    jogos.forEach((joguin) => {
        listJogos.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${joguin.imagem}"
                        class="img-fluid rounded-start" alt="${joguin.nome}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${joguin.nome}</h5>
                        <p class="card-text">${joguin.descricao}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
    }) 
}

let computador = {placaDeVideo: "Gtx 1050 Ti", processador: "Ryzen 5 5600", placaMae: "A520M-A Pro", memoriaRam: "2x 8GB 3600MHz", armazenamento: "HD 1TB, SSD 240GB", fonte: "500w 80 plus bronze", monitor: "Acer Nitro 23.8 LED Full HD 165Hz"}

function mostraComputador(){

    listComputador.innerHTML = `
    <div class="row row-cols-1 row-cols-md-1 g-4 " >
    <div class="col">
        <div class="card" style="max-width: 1000px;">
            <div class="card-body">
            <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Placa de video</th>
                    <th scope="col">Processador</th>
                    <th scope="col">Memoria Ram</th>
                    <th scope="col">Placa Mãe</th>
                    <th scope="col">Fonte</th>
                    <th scope="col">Armazenamento</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Nome</td>
                    <td>${computador.placaDeVideo}</td>
                    <td>${computador.processador}</td>
                    <td>${computador.memoriaRam}</td>
                    <td>${computador.placaMae}</td>
                    <td>${computador.fonte}</td>
                    <td>${computador.armazenamento}</td>
                </tr>
                </tbody>
            </div>
        </div>
    </div>
</div>`

}


// function mostraFilmes(){

//     jogos.forEach((joguin) => {
//         listJogos.innerHTML += `
//         <div class="card mb-3" style="max-width: 540px;">
//             <div class="row g-0">
//                 <div class="col-md-4">
//                     <img src="${joguin.imagem}"
//                         class="img-fluid rounded-start" alt="${joguin.nome}">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">${joguin.nome}</h5>
//                         <p class="card-text">${joguin.descricao}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
//     })

    
// }


export { mostraJogos, mostraComputador };

// export default mostraJogos();