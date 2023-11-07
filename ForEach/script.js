
const bancoDados = [
    {
        nome: "jose",
        idade: 23,
        genero: "M",
        id: '010101'
    },
    {
        nome: "maria",
        idade: 24,
        genero: "F",
        id: '123456'
    },
    {
        nome: "carlos",
        idade: 32,
        genero: "M",
        id: '985432'
    }
]
function addDados() {
    const tabela = document.getElementById("minhaTabela")
    bancoDados.forEach((item) => {

        const linha = tabela.insertRow();
        const idCelula = linha.insertCell(0);
        const nomeCelula = linha.insertCell(1);
        const idadeCelula = linha.insertCell(2);
        const generoCelula = linha.insertCell(3);


        nomeCelula.textContent = item.nome;
        idadeCelula.textContent = item.idade;
        generoCelula.textContent = item.genero;
        idCelula.textContent = item.id;


        console.log("deu certo")



    })



    /*  console.log("Map :")
  
      bancoDados.map(function (nome, i) {
          console.log(nome, i)
  
          return nome, i
      })*/
}

