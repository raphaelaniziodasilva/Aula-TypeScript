/* Instalação do TypeScript:
    npm init -y
    npm install typescript
    npx nome_projeto –init

    Execução:
    Após criar seu código execute o comando abaixo:
    npx nome_projeto
    Para poder compilar o codigo em JavaScript

*/

/*  Typescript 

    Superset do Javascript:
    Basicamente um superconjunto de ferramentas.
    Tipagem de dados.
    Orientação a objetos.
    Arquitetura de software.
    Iguala o node a outras linguagens orientadas a objeto.

    O typescript traz uma forma de corrigir os problemas relacionados à orientação a objetos que o Javascrtipt tem.
    O typescript adiciona funcionalidades que compiladas, se tornam código Javascript. Porém, o dev lidará apenas com a linguagem TS com uma sintaxe mais simples, mais clara e suportado pelos editores de texto mais modernos.

    Visando ter mais visibilidade e buscando o máximo de colaboração e adesão da comunidade técnica, o TS foi desenvolvido de forma open-source e baseia-se no ECMASCRIPT.

    Typescript VS Javascript

    As principais diferenças são.
    Tipagem de dados
    Uso de classes
    Mecanismo de abstração

    Tipagem estática estática

    TS utiliza o padrão de tipagem estática, onde se tem a necessidade de atribuir os tipos de forma correta.
    Isso possibilita compreender e refatorar códigos com muito mais facilidade.

    Tipos básicos:
    String
    Number
    Boolean
    Array
    Tuple
    Enum(TS)

    Tipos especiais:
    Void
    Any
    Never

    Union Types:
    O union types é usado quando se quer definir mais de um tipo de valor.
    Exemplo: function stringOrNumber(code: string | number) { }

    Type Alias:
    Typescript permite que você possa criar seu próprio tipo personalizado.
    Esses alias podem ser tanto tipos primitivos(básicos), quanto tipos complexos(especiais).
    Exemplo: 
    type name = string
    let nome: name = Fulano da casa”

    Valores nulos:
    O Typescript adiciona novas sintaxe para declarar algo como opcional ou nulo.
    Diferenças primordiais:
    undefined ou indefinido: Algo que não foi encontrado ou definido.
    null ou nulo: Usado intencionalmente para dizer que o valor não existe.

    Em JS todos os valores declarados como argumentos em funções são opcionais, mas em TS, o compilador proíbe omitir argumentos, a menos que eles sejam especificados como opcionais ou tenham um valor padrão.
    Exemplos:
    function getGrades(n1, n2, n3?){}
    function getGrade(n1, n2, n3 = 0){}

    Antes do TS 2.0, undefined e null eram ignorados no sistema de tipagem, isso fazia com o TS pudesse trazer um ambiente mais próximo de um JS sem tipagem.
    A partir da versão TS 2.0, foi adicionada uma flag chamada “strictNullChecks”. Ela serve para forçar null e undefined a serem tratados com tipos, o que na prática, significa que devem ser manipulados.

    Typescript E orientação a objetos

    Paradigmas
    Como resolver o mesmo problema de formas diferentes.
    Estilo, modelo ou metodologia de programação.

    Modelo de organização e funcionamento do código
    Paradigma NÃO é sobre linguagem de programação: existem linguagens multiparadigmas (Go, PHP, Javascript, …)

    Não existe paradigma certo ou errado: todos foram criados para resolver um problema específico.

    Paradigmas Imperativos
    Instruções exatas daquilo que se quer fazer, na ordem que se quer fazer, como uma receita de bolo ou de miojo.

    Programação orientada a objetos
    Um dos paradigmas mais populares do mundo.
    O motivo por trás dessa popularidade se dá por conta de todos os benefícios de se utilizar, como a modularidade do código e a capacidade de associar diretamente problemas reais em código.

    Classes
    Uma classe é uma forma de definir um tipo de dado em uma linguagem orientada a objeto. Ela é formada por dados e comportamentos.
    As classes representam elementos da vida real.

    Para definir os dados, são utilizados os atributos, para definir o comportamento, são utilizados métodos.
    Classes podem ser chamadas e usadas quantas vezes forem necessárias.

    Interface
    Define um padrão para as classes, quando duas classes possuem coisas em comum, se cria uma classe interface que irá servir como padrão para todas as classes comuns.

    Abstração
    Define entidades do mundo real para o código.

    Encapsulamento
    Consiste no conceito de esconder determinados atributos de uma classe, sendo assim, ninguém além da própria classe pode vê-lo.
    Protege os atributos contra acesso direto.

    Herança
    A herança é um tipo de relacionamento que define que uma classe “é um” de outra classe como, por exemplo, a classe funcionária que é uma Pessoa.

    Existem três tipos de acessos aos atributos no conceito de herança:
    public: Todos podem acessar o atributo.
    private: Somente pode ser acessado dentro da própria classe.
    protected: Somente pode acessar dentro da própria classe e em classes filhas

    Polimorfismo
    Nós como seres vivos, somos capazes de nos adaptar e nos moldar de acordo as situações, conforme nossa necessidade, e é dessa adaptabilidade que bem a ideia de polimorfismo na programação.

    Sabemos que classes filhas herdam funcionalidades de sua classe pai. Mas em alguns casos é necessário que as ações para um mesmo método seja diferente.
    Então o poliformismo permite que possamos alterar o comportamento vindo de um método da classe pai.

    Type Assertion
    É uma forma de inferir um tipo de dado no código TS.
    Semelhante a conversão de tipos em outras linguagens, com a diferença que em TS, não se tem perda em tempo de resposta, pois estamos apenas mostrando qual o tipo mais adequado.

*/