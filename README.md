SEQUÊNCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia requisições, rotas e URLs, entre outras funcionalidades
### npm install express

Rodar o projeto
### node app.js

Acessar o projeto
### http://localhost:8080

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significaglobalmente
### npm install -g nodemon

Instalar o banco de dados

Verificar o banco de dados MySQL no prompt de comando
### mysql -h localhost -u root -p

Instalar o Workbench para gerenciar o banco de dados de forma gráfica

COMANDOS BÁSICOS DO MYSQL

-------------------------
Criando o banco de dados
-------------------------
### create database celke character set utf8mb4 collate utf8mb4_unicode_ci;

---------------------------------
Criando tabelas no banco de dados
---------------------------------
### CREATE TABLE `users` (
###	   `id` int NOT NULL AUTO_INCREMENT,
###    `name` varchar(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
###    `email` varchar(220) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
###    PRIMARY KEY (`id`)
### )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

----------------------------------------
Selecionar um registro no banco de dados
----------------------------------------
### SELECT id, name, email FROM users;

-------------------------------------
Cadastrar registros no banco de dados
-------------------------------------
### INSERT INTO users (name, email) VALUES ('Idinei', 'idineig@gmail.com');

------------------------------------------------------------------
Fazer consulta com limite de linhas selecionadas no banco de dados
------------------------------------------------------------------
### SELECT id, name, email FROM users LIMIT 3;

---------------------------------------------------------------------------------
Limitar quantidade de registros selecionados no banco de dados e indicar o início
---------------------------------------------------------------------------------
### SELECT id, name, email FROM users LIMIT 2 OFFSET 4;
Exemplos: página 1 que retorna os registros 1 e 2
          página 2 que retorna os registros 3 e 4
          página 3 que retorna os registros 5 e 6
Nestes casos se utiliza o OFFSET para limitar a partir de qual registro
começa a busca, no caso do exemplo aqui, começa do registro 5 que é a página 3, 
tendo em vista que limitamos a consulta em 2 linhas por página.

------------------------------------------
Acrescentar condição na busca de registros
------------------------------------------
### SELECT id, name, email FROM users WHERE email='idineig@gmail.com' LIMIT 1;
Neste exemplo faço a seleção de um email específico no banco de dados dando limite de uma
linha apenas na consulta.
Caso a consulta seja feita para um CRUD na condição de visualizar, deve-se utilizar o LIMIT
caso contrário ele pode ser suprimido do código.

------------------------------------------------------
Acrescentar mais de uma condição na busca de registros
------------------------------------------------------
### SELECT id, name, email FROM users WHERE email='idineig@gmail.com' AND name ='idinei' LIMIT 1;
### SELECT id, name, email FROM users WHERE email='idineig@gmail.com' OR name ='idinei2' LIMIT 1;

----------------------------------------------
Ordenar registros retornados no banco de dados
----------------------------------------------
### SELECT id, name, email FROM users ORDER BY id ASC;
### SELECT id, name, email FROM users ORDER BY id DESC;

----------------------------------
Editar registros no banco de dados
----------------------------------
### UPDATE users SET name = 'idinei3a', email = 'idinei3ag@gmail.com' WHERE id =3;

------------------
Apagar um registro
------------------
### DELETE FROM users WHERE id = 7;
Neste caso, estou indicando que quero apagar o registro número 7 da tabela.

-----------------------
Instalação do SEQUELIZE
-----------------------
Sequelize é uma biblioteca Javascript que facilita o gerenciamento de um banco
de dados SQL
### npm install --save sequelize

-----------------------------------
Instalar o driver do banco de dados
-----------------------------------
### npm install --save mysql2
