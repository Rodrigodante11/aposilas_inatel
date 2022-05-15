class Carro {
    marca = "Sem marca";
    modelo;

    setModelo(novoModelo){
        this.modelo = novoModelo;
    }

    setMarca(novaMarca){
        this.marca = novaMarca;
    }

    showInfo(){
        console.log("Marca", this.marca);
        console.log("Modelo", this.modelo);
    }
}

var carro = new Carro();
//Var: Podem ser criadas e declaradas dentro do escopo da programação
//Let: Podem ser atualizadas mas não podem ser declaradas novamente
//Const: Não podem atualizadas e nem declaradas novamente
carro.setModelo('Ká');
carro.setMarca('Ford');
carro.showInfo();