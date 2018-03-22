# Gerenciamento clientes e seus limites de crédito (CCM User Interface)
UI para uso no sistema CCM.

## A solução
Esta solução visa disponibilizar uma ui que consume os serviços relativos ao sistema de gerenciamento de crédito de clientes (CCM). Para construir este projetos foram utilizados [Vue js](https://vuejs.org/) como framework progressivo de javascript numa single application model.

## Iniciando
Clone de [GIT Hub](https://github.com/danielbarcellos/credit-client-manager-ui). É necessário ter instalado o [Node.js](https://nodejs.org/en/):

``` bash
# clone o repositório
git clone https://github.com/danielbarcellos/credit-client-manager-ui
cd credit-client-manager-ui

# instalar as dependencias
npm install

# o servidor estará disponivel em localhost:8080
npm run dev

```
O sistema estará disponível em [http://localhost:8080](http://localhost:8080)

> By default a porta 8080 estará ativa, mas é possível caso já esteja ocupada que o bundler defina nova porta progressivamente, ou seja, 8081 será a próxima porta caso a default esteja ocupada.

## O que fazer quando estiver iniciado?

Você pode testar se está tudo ok tentando acesso à interface de gerenciamento de clientes em [http://localhost:9000](http://localhost:9000).

## Built With

* [Vue js](https://vuejs.org/) - The Progressive JavaScript Framework.
* [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime.
* [Bootstrap + Vue](https://bootstrap-vue.js.org) - Ui component framework.

## Versionamento

We use [Github](https://github.com) for versioning. For the versions available, see the [tags on this repository](https://github.com/danielbarcellos/credit-client-manager). 

## Authors

* **Daniel Barcellos** - *Intial work* - [Daniel Barcellos](https://github.com/danielbarcellos)

## Agradecimentos

* My family
* Google
