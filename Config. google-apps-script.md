## **Escrever o Código Script do Google Apps Localmente em Código VS e Implementá-lo**

### **Pre-requisitos:**

- ### **Instalar [VS Code](https://code.visualstudio.com/download)**
- ### **Instalar [Node.js](https://nodejs.dev/pt/download/)**
- ### **Instalar Autocomplete do Google Apps Script e o NPM**
    - Abra terminal depois de ter instalado o node.js e execute o comando abaixo:
        ```
        npm install --save @types/google-apps-script
        ```
        **Feito isso o autocomplete já está funcionando**
    #

    **Importante: como o Google Apps Script não suporta atualmente módulos de nós, se incluir a importação 'google-apps-script'; linha nos arquivos que for subir para o seu projeto Google Apps Script, o GAS irá lançar um erro.**

    Para corrigir isso usamos o arquivo `.claspignore` que funciona da mesma forma que o `.gitignore`. 

    Dentro desse tipo de arquivo, definimos tudo que não queremos subir para o projeto Google Apps Script. 

    **EX:** Pasta `node_modules` usada para definir configurações do ambiente de desenvolvimento, sendo assim, não é necessário ela ser exibida.
    #
    Antes de instalarmos e usarmos o `clasp`, precisamos de ativar o Google Apps Script API porque é isso que o `clasp` usa em segundo plano. 

    - Acesse o Apps Script no navegador
    - Navegue até à página home, local de definições de Script Apps
    - Configurações
    - Mude a opção para "on".

- ### **Instalar CLI clasp: Usado para sincronizar o seu código GAS**

O clasp é um utilitário de Projetos de Script Apps de Linha de Comando, ou clasp, é uma aplicação terminal que lhe permite utilizar o seu código GAS que escreveu localmente. Esta é a ferramenta que torna possível o desenvolvimento local.

Para instalar execute o comando abaixo:

**Importante: caso esteja pelo linux abra a pasta do projeto como root e acesse o terminal como root**
```
npm i @google/clasp -g
```

**s 4 comandos principais no `clasp` são:**

- `clasp login`
- `clasp clone`
- `clasp push -w`
- `clasp pull`

`clasp login` permite-lhe guardar as suas credenciais de cliente utilizando o Google SSO. Este comando abrirá um separador do navegador onde terá de iniciar sessão com a sua conta Google.

**Depois de criado o projeto, podemos encontrar a indentificação no separador de definições dessa forma:**