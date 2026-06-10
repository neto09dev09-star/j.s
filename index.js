const fs= require ( 'fs') // guarda o sistema de arquivos do js

const dados= fs.readFileSync('dados.json','utf-8');

const usuarios = JSON.parse(dados)

console.log("usuarios cadastrados no json", usuarios)

usuarios.push({id :3, nome: 'patrocinio', idade:29 })

console.log("usuarios atualizado no .json", usuarios)

fs.writeFileSync('dados.json',JSON.stringify(usuarios,null,2))

console.log('usuario cadastrado')



