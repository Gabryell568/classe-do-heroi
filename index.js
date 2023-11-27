let nomeHeroi = 'roger'
let idadeDoHeroi = 20
let classes = ['mago', 'guerreiro', 'ninja', 'monge']
let classeEscolhida = 'monge'
class ClasseDOJogo{
    constructor(mago, guerreiro, ninja, monge){
        this.mago = 'mago'
        this.guerreiro = 'guerreiro'
        this.ninja = 'ninja'
        this.monge = 'monge'
    }
        magia(){
            console.log(`o ${this.mago} atacou de maneira perspecaz usando magia.`) 
        }
        espadada(){
            console.log(`o ${this.guerreiro} atacou agressivamente usando a espada.`)
        }
        shuriken(){
            console.log(`o ${this.ninja} atacou furtivamente com sua shuriken.`)
        }
        artesMarciais(){
            console.log(`o ${this.monge} atacou de maneira sagaz usando suas artes marciais.`)
        }
}

let heroMago = new ClasseDOJogo(`o heroi ${nomeHeroi} com ${idadeDoHeroi} anos é um ${this.mago} se preparou e `)
let heroWarrior = new ClasseDOJogo(`o heroi ${nomeHeroi} com ${idadeDoHeroi} anos é um ${this.guerreiro} se preparou e `)
let heroNinja = new ClasseDOJogo(`o heroi ${nomeHeroi} com ${idadeDoHeroi} anos é um ${this.ninja} se preparou e `)
let heroMonge = new ClasseDOJogo(`o heroi ${nomeHeroi} com ${idadeDoHeroi} anos é um ${this.monge} se preparou e `)



if (classeEscolhida == 'mago'){
    console.log(`o heroi ${nomeHeroi} com ${idadeDoHeroi} anos é um ${classes[0]}, e então `)
    heroMago.magia()
}else if (classeEscolhida == 'guerreiro'){
    console.log(`o heroi ${nomeHeroi} com ${idadeDoHeroi} anos é um ${classes[1]}, e então `)
    heroWarrior.espadada()    
}else if (classeEscolhida == 'ninja'){
    console.log(`o heroi ${nomeHeroi} com ${idadeDoHeroi} anos é um ${classes[2]}, e então `)
    heroNinja.shuriken()
}else if (classeEscolhida == 'monge'){
    console.log(`o heroi ${nomeHeroi} com ${idadeDoHeroi} anos é um ${classes[3]}, e então `)
    heroMonge.artesMarciais()
}