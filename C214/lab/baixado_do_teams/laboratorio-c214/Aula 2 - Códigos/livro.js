function Livro(){
    var nome;
    var autor;
    var temas = [];

    this.setarNome = SetNome;
    this.setarTema = SetTema;
    this.setarAutor = SetAutor;
    this.displayInfo = showInfo;

    function SetNome(novoNome){
        nome = novoNome;
    }

    function SetTema(novoTema){
        temas.push(novoTema);
    }

    function SetAutor(novoAutor){
        autor = novoAutor;
    }

    function showInfo(){
        console.log('Nome', nome);
        console.log('Autor', autor);
        console.log('Temas', temas);
    }
}

var livro = new Livro();
livro.setarNome('Harry Potter e a pedra filosofal');
livro.setarAutor('J. K. Rowling');
livro.setarTema('Fantasia');
livro.setarTema('Ficcão');
livro.displayInfo();