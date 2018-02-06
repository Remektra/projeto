
// tabuleiro
const app = angular.module('jogo', []);

app.controller('QuadradosController', ($scope) => {
    let ultimoQuadradoClicado;

    $scope.quadrados = [
        {id: 1, classe: ''},
        {id: 2, classe: ''},
        {id: 3, classe: ''},
        {id: 4, classe: ''},
        {id: 5, classe: ''},
        {id: 6, classe: ''},
        {id: 7, classe: ''},
        {id: 8, classe: ''},
        {id: 9, classe: ''}
    ];
    
    $scope.ativar = (quadrado) => {
        $scope.escolha = true;
        quadrado.classe = 'ativo';
        ultimoQuadradoClicado = quadrado;                              
    }

    $scope.escolherJogada = (tipo) => {
        ultimoQuadradoClicado.classe = tipo;
    }

});



// animação personagem

let fala = document.querySelector('.fala');
let personagem = document.querySelector('.personagem');
let falando = false;

function animacaoPersonagem(){

    if (falando){
        fala.src = 'astronautaP.png';
        falando = false;
    } else {
        fala.src = 'astronautaP2.png';
        falando = true;
    }  
}

  let batata2 = setInterval(animacaoPersonagem, 400);


//   fala da personagem no balao

    let frase = 'Seja muito bem vindo a estação hack, aqui você terá a oportunidade de obter o conhecimento de um de nossos astros localizado no nosso sistema solar, boa aventura!';      
    // let frase = 'ola sadssad';
    let p = document.querySelector('p');
    let contador = 0;
    let sumir = false;


      function exibirLetra(){
        let letra = frase[contador];

        p.innerHTML += letra;
        contador++;

        if(contador >= frase.length){
          clearInterval(batata);
          clearInterval(batata2);
          fala.src = 'astronautaP2.png';
        //   personagem.style.display = 'none';
          
        }
      }
    
      function sumirPersonagem(){
          personagem.style.display = 'none';
      }
      setInterval(sumirPersonagem, 15000);

      let batata = setInterval(exibirLetra, 70);

  