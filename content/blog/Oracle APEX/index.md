---
title: APEX
date: "2019-12-30T11:43:03.284Z"
description: ""
---

安装和配置Oracle APEX
### 安装前准备
- 数据库版本大于11.2.0.4
- SGA　&& PGA > 300 MB
- 浏览器：Google Chrome，Mozilla Firefox，Apple Safari
- 网络监听器：首选ORDS
- 硬盘
- Oracle XML DB

- 数据库版本大于11
- JDK版本大于8
- 浏览器

### 安装 Application Express
1. 把下载的`apex_19.2.zip `解压，覆盖原来的`OracleHome\product\11.2.0\dbhome_1\apex`，切换到`apex`目录并登录数据库`sys`用户，执行命令`@apexins.sql tablespace_apex tablespace_files tablespace_temp images`，比如：`@apexins.sql SYSAUX SYSAUX TEMP /i/`；
2. 创建或更新你的实例管理账号，执行命令`@apxchpwd.sql`;
3. 解锁`APEX_PUBLIC_USER`账号并更改密码，执行命令：`ALTER USER APEX_PUBLIC_USER ACCOUNT UNLOCK `、`ALTER USER APEX_PUBLIC_USER IDENTIFIED BY`；
4. 配置`RESTful`服务，执行命令`@apex_rest_config.sql`。

5. 下载，解压，禁用`Oracle XML DB`端口服务，执行命令`EXEC DBMS_XDB.SETHTTPPORT(0);`
6. 在11g后的数据库中启用网络服务
```sql
DECLARE  
ACL_PATH  VARCHAR2(4000); 
BEGIN  
-- Look for the ACL currently assigned to '*' and give APEX_190200  
-- the "connect" privilege if APEX_190200 does not have the privilege yet.
  SELECT ACL INTO ACL_PATH FROM DBA_NETWORK_ACLS   
  WHERE HOST = '*' AND LOWER_PORT IS NULL AND UPPER_PORT IS NULL;  
  IF DBMS_NETWORK_ACL_ADMIN.CHECK_PRIVILEGE(ACL_PATH, 'APEX_190200',
     'connect') IS NULL THEN
      DBMS_NETWORK_ACL_ADMIN.ADD_PRIVILEGE(ACL_PATH,
     'APEX_190200', TRUE, 'connect');
  END IF;
EXCEPTION
  -- When no ACL has been assigned to '*'.
  WHEN NO_DATA_FOUND THEN
  DBMS_NETWORK_ACL_ADMIN.CREATE_ACL('power_users.xml',
    'ACL that lets power users to connect to everywhere',
    'APEX_190200', TRUE, 'connect');
  DBMS_NETWORK_ACL_ADMIN.ASSIGN_ACL('power_users.xml','*');
 END;
 / 
COMMIT;
```

### 安装 Oracle REST Data Services