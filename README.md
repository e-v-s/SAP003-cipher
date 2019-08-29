# Crypt

* [1. Introdução](#1. Introdução)
* [2. Ideia do produto]
* [3. Como funciona]

## 1. Introdução

Primeiro projeto do bootcamp de Front-end dev da Laboratoria teve como objetivo usar JavaScript (ES6), HTML-5 e CSS-3 para fazer uma Cifra de César, mas não só. Também foi necessário o desenvolvimento de um produto ao redor da ideia da cifra.

A [Cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é uma técnica de criptografia por substituição, onde um caractere é substituído por outro utilizando uma chave de deslocamento. esta chave indica quantas em quantas este caractere deve ser trocado.

#2-Ideia do produto

O resultado deste projeto foi o **Crypt**, um gerador de mensagens criptografadas para comunicação interna de empresas. Utilizando uma página de login, o usuário acessa sua conta e pode enviar uma mensagem criptografada para algum usuário da empresa, que receberá esta mensagem e poderá fazer a ação inversa. O usuário deve escolher uma chave de criptografia e escrever o texto nos campos correspondentes.

O site possui página Sobre e Contato, onde respectivamente o usuário pode ler um pouco sobre o projeto ou enviar alguma mensagem para a desenvolvedora com alguma sugestão, reclamação ou elogio.

#3-Como funciona

A página de login é meramente ilustrativa, onde o botão *Login* redireciona para a página da cifra. 

Na cifra, o usuário indica a chave a ser utilizada e redige o texto a ser cifrado. **Não pode usar valor negativo na chave.** Com o aparecimento do texto, o usuário pode enviar a mensagem através do botão *Enviar*, o qual também é ilustrativo e redireciona para a página *Mensagem enviada com sucesso*.

Letras maiúsculas, minúsculas, números e caracteres especiais podem ser utilizados no texto a ser cifrado.

O usuário que recebe a mensagem pode descriptografá-la na página da cifra após o *Login*, e a chave deve ser indicada.



