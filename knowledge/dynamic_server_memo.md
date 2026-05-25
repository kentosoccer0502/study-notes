## localhost mysql user add

```sql
mysql> CREATE USER 'kento.natsuyama'@'localhost' IDENTIFIED BY 'mangegho'
    -> ;
Query OK, 0 rows affected (0.010 sec)

mysql> GRANT ALL PRIVILEGES ON *.* TO 'kento.natsuyama'@'localhost';
Query OK, 0 rows affected (0.004 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.001 sec)

```

- パスワード変更

```sql
mysql> ALTER USER 'kento.natsuyama'@'localhost' IDENTIFIED BY 'manegeho';
Query OK, 0 rows affected (0.001 sec)
```
