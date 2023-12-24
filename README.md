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
Crie as rotas de seu `retorno fake` em `src/routes/js`

### Funções Globais
- setLog: escreve a mensagem em arquivo dentro de `storage/logs`, o nome do 
arquivo será a data no formato "ANO-MES-DIA_filename"
exemplo: log( 'seu conteúdo aqui', 'debug teste' ), será criado o arquivo `/storage/logs/2023-12-24_debug_teste.log`.

- getFile: lê um arquivo texto para uma variável.

- dump: printa na tela o texto desejado.

- dd: printa na tela o texto desejado e interrompe o fluxo.

- encryptPassword: retorna uma variável encripitada.

- decryptPassword: retorna a variável desencripitada.

### Testes
- crie seus testes em `/tests/{modulo}/`, veja os exemplos em `/tests/system/`.
- para rodar os testes: `$ yarn test -i`
- para rodar um teste específico: `$ yarn test tests/system/raiz.test.js`
