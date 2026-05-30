## localhost postgre user add

```sql
natsuyamak01@COAMACHF5272QLQM ~ % echo 'export PATH="/opt/homebrew/opt/postgresql@16/bin:$PATH"' >> ~/.zshrc

natsuyamak01@COAMACHF5272QLQM ~ % source ~/.zshrc
natsuyamak01@COAMACHF5272QLQM ~ % psql --version
psql (PostgreSQL) 16.14 (Homebrew)
natsuyamak01@COAMACHF5272QLQM ~ % psql postgres
psql (16.14 (Homebrew))
"help"でヘルプを表示します。

postgres=# CREATE DATABASE practice_db;
CREATE DATABASE
postgres=# show databases;
ERROR:  unrecognized configuration parameter "databases"
postgres=# show database
postgres-# l
postgres-# \l
                                                                         データベース一覧
    名前     |    所有者    | エンコーディング | ロケールプロバイダー |  照合順序   | Ctype(変換演算子) | ICUロケール | ICUルール: |         アクセス権限
-------------+--------------+------------------+----------------------+-------------+-------------------+-------------+------------+-------------------------------
 postgres    | natsuyamak01 | UTF8             | libc                 | en_US.UTF-8 | en_US.UTF-8       |             |            |
 practice_db | natsuyamak01 | UTF8             | libc                 | en_US.UTF-8 | en_US.UTF-8       |             |            |
 template0   | natsuyamak01 | UTF8             | libc                 | en_US.UTF-8 | en_US.UTF-8       |             |            | =c/natsuyamak01              +
             |              |                  |                      |             |                   |             |            | natsuyamak01=CTc/natsuyamak01
 template1   | natsuyamak01 | UTF8             | libc                 | en_US.UTF-8 | en_US.UTF-8       |             |            | =c/natsuyamak01              +
             |              |                  |                      |             |                   |             |            | natsuyamak01=CTc/natsuyamak01
(4 行)

postgres-#
```
