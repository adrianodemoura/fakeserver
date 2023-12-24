# Fake Server

## Requisitos

-   node
-   yarn


## Instalação 
### Código
```shell
$ git clone git@github.com:adrianodemoura/fakeserver.git
$ cd fakeserver
$ yarn install
```
### Para rodar a aplicação
```shell
$ yarn start
ou
$ yarn start:local
```

### Customizações
Crie as rotas de seu seu retorno fake em `src/routes/js`

### Funções Globais
- setLog: escreve a mensagem em arquivo dentro de `storage/logs`, o nome do 
arquivo será a data no formato "ANO-MES-DIA_filename"
exemplo: log( 'testeo aqui', 'nome do arquivo' )

- getFile: lê um arquivo texto para uma variável.

- dump: printa na tela o texto desajado.

- dd: printa na tela o texto desejado e interrompe o fluxo.

- encryptPassword: retorna uma variável encripitada.

- decryptPassword: retorna a variável desencripitada.