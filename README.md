# Teste prático - NED DIGITAL

Esse projeto foi construído com intuito de ser contratado pela N.E.D DIGITAL.

## Começando

O objetivo dessas instruções é de ajudar-lhe a obter uma cópia do projeto rodando 100% na sua máquina local com
propósito de testes e avaliação.

### Pré-requisito

Para funcionamento do projeto é necessário o uso de servidores MySQL e Apache Web Server; PHP Versão 7 ou superior. Também necessário o uso do Composer que é uma
ferramenta para manuseio de dependencias PHP.

### Instalando

Para servidores MySQL e Apache recomendo a utilização do XAMPP

* [XAMPP](https://www.apachefriends.org/pt_br/download.html) - O XAMPP é uma distribuição do Apache fácil de instalar contendo PHP, MySQL e Perl.

* [Composer](https://getcomposer.org/doc/00-intro.md) - Obtenha e instale o composer

Após instalação do composer, na pasta raiz do projeto execute o comando:

```
composer install
```

O Composer irá instalar as dependencias listadas no arquivo package.json

Inicie os servidores MySQL e Apache. Crie um banco de dados pelo phpMyAdmin ou outra ferramenta preferencial.
Abra o arquivo '.env.example' da pasta raíz e procure por 'DB_DATABASE=laravel', edite para o nome do banco de dados criado por você.
Também edite 'DB_USERNAME=root' e 'DB_PASSWORD=' com os dados apropriados (usuário e senha do seu MySQL). Agora renomeie o arquivo de '.env.example' para '.env'

exemplo:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_ned
DB_USERNAME=root
DB_PASSWORD=root
```




Agora execute o seguinte comando na pasta raiz do projeto:

```
php artisan migrate --seed
```
Esse comando irá executar as migrations do projeto laravel (inserir no banco de dados as tabelas criadas) 
e ja inserirá os dados iniciais que estão num arquivo semente (seed).

Agora execute o seguinte comando para executar o servidor de desenvolvimento do projeto.

```
php artisan serve
```
Utilize o link fornecido no terminal para utilizar-se do projeto.

## Rodando os testes

Testes unitários se encontram dentro da pasta '/tests/Unit/UserTest.php'.
O nome de cada teste indica o seu propósito.
Para executar toda essa classe de teste rode o seguinte comando dentro da pasta raiz do projeto:
```
php artisan test --filter=UserTest
```

O resultado dos testes aparecerão no terminal.


## Construído com

* [Laravel](https://laravel.com/) - Framework utilizado para o back-end
* [Composer](https://getcomposer.org/) - Gerenciador de dependencias
* [React](https://reactjs.org/) - Framework utilizado para o front-end
* [reactstrap](https://reactstrap.github.io/) - componentes do Boostrap 4 para react
* [MySQL](https://www.mysql.com/) - Banco de dados

## Versionamento

Utilizado o  [GitHub](https://github.com/) para versionamento de projeto. 

## Autor

* **Nylo Figueira Pinto** - *Projeto inicial* - [mastercoy](https://github.com/mastercoy)

## Considerações finais

* Muito obrigado a [N.E.D DIGITAL](https://github.com/mastercoy) pela oportunidade e incentivo de estudo!
* Foi sugerido o uso do React para desenvolvimento do projeto.
 Utilizei-me de conhecimento prévio para desenvolver o banco de dados por isso a escolha do Laravel framework.
 Em primeiro momento pensei em utilizar o Blade (ferramenta do Laravel para desenvolvimento de frontend) porém aproveitei a oportunidade
 para iniciar meus estudos com o React. É na parte do frontend do projeto onde encontrei as maiores dificuldades.

