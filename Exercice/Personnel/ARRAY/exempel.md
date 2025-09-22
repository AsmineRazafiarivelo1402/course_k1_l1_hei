# cours sur les users et les roles en Postgres

## Introduction
Par défaut, le seul utilisateur qui existe dans postgresql c'est: postgres. Il a droit à toutes les permissions (créer,effacer,..........)
Roles: groupe des users

On peut créer d'autres avec la commande suivante dans `psql` :

``` sql 
CREATE USER non_utilisateur WITH PASSWORD 'son_mot_de_passe';
```

Pour se connecter à une base de données avec un autre compte, il suffit de taper la commande suivante
```
\c nom_base nom_utilisateur

```
## Gérer les permisssions avec GRANT et REVOKE.

Exercice: créer un utilisateur nommé student.
1. Que peut faire ce tout nouveau utilisateur ?
2. Comment peut on lui donner la permission de faire des SELECT 
sur une table  spécifique ?
3. Comment peut on lui donner toutes les permissions sur une table ?
4. Comment peut on retirer une permission ?

## Introduction to PostgreSQL GRANT statement

After creating a role with the LOGIN attribute, the role can log in to the PostgreSQL database server.

However, it cannot do anything to the database objects like tables, views, functions, etc. For example, the role cannot select data from a table or execute a specific function.

To allow a role to interact with database objects, you need to grant privileges on the database objects to the role using the GRANT statement.

The following shows the simple form of the GRANT statement that grants one or more privileges on a table to a role:

GRANT privilege_list | ALL
ON  table_name
TO  role_name;

In this syntax:

    First, specify the privilege_list that can be SELECT, INSERT,UPDATE, DELETE,TRUNCATE, etc. Use the _ALL PRIVILEGES_ option to grant all privileges on a table to the role.
    Second, provide the name of the table after the ON keyword.
    Third, indicate the name of the role to which you want to grant privileges.

Pour afficher des utilisateurs
```
\du
```
