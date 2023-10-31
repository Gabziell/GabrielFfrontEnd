
const loirinho = {
   nome: 'Naruto Uzumaki',
   nivelChakra: 7,
  habNinja: ["clone das sombras", "jutsu sexy", "mil anos de morte"],
  missoes: 7
}

const emo = {
 nome: 'Sasuke uchiha',
 nivelChakra: 8, 
 habNinja: ["chidori", "sharingan", "bola de fogo"],
 missoes: 10
}

const mulher = {
 nome: 'Sakura Haruno',
 nivelChakra: 4,
 habNinja: ['super força', "jutsus de cura" , "veneno na kunai"],
 missoes: 2
}

function treinarChakra(aspirante) {
 const aumentoChakra = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
 aspirante.nivelChakra += aumentoChakra;
 console.log(`${aspirante.nome} treinou chakra e agora tem um nível de chakra de ${aspirante.nivelChakra}`);
}


function adicionarHabilidade(aspirante, novaHabilidade) {
 aspirante.habilidadesNinjas.push(novaHabilidade);
 console.log(`${aspirante.nome} aprendeu uma nova habilidade ninja: ${novaHabilidade}`);
}


function concluirMissao(aspirante) {
 const recompensaChakra = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
 aspirante.missoesConcluidas++;
 aspirante.nivelChakra += recompensaChakra;
 console.log(`${aspirante.nome} concluiu uma missão e agora tem um nível de chakra de ${aspirante.nivelChakra}`);
}


function exibirProgresso(aspirante) {
 console.log(`${aspirante.nome} - Nível de Chakra: ${aspirante.nivelChakra}`);
 console.log("Habilidades Ninjas:", aspirante.habilidadesNinjas);
 console.log("Missões Concluídas:", aspirante.missoesConcluidas);
 console.log("----------------------------------");
}


for (let i = 0; i < 5; i++) {
 treinarChakra(loirinho);
 adicionarHabilidade(loirinho, "Clone das Sombras");
 concluirMissao(loirinho);

 treinarChakra(emo);
 adicionarHabilidade(emo, "Chidori");
 concluirMissao(emo);

 treinarChakra(mulher);
 adicionarHabilidade(mulher, "Força Sobre-Humana");
 concluirMissao(mulher);
}


const aspirantes = [loirinho, emo, mulher];
let ninjaMaisHabilidoso = aspirantes[0];

for (const aspirante of aspirantes) {
 const habilidadesNinjas = aspirante.habilidadesNinjas.length;
 const nivelTotal = aspirante.nivelChakra + habilidadesNinjas * 10;

 if (nivelTotal > (ninjaMaisHabilidoso.nivelChakra + ninjaMaisHabilidoso.habilidadesNinjas.length * 10)) {
   ninjaMaisHabilidoso = aspirante;
 }
}

console.log(`O ninja mais habilidoso é ${ninjaMaisHabilidoso.nome}!`);
