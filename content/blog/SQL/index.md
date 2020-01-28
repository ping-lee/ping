---
title: SQL
date: "2020-01-27T19:11:32.169Z"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
profile: "./salty_egg.jpg"
---

## select
select 语句用来从一个或多个表中或其他数据库对象中提取数据，一般的select语句就像这样：
```sql
select c.customer_id, 
       count(o.order_id) as orders_ct
from oe.customers c
join oe.orders o
on c.customer_id = o.customer_id
where c.gender = 'F'
group by c.customer_id
having count(o.order_id) > 4
order by orders_ct, c.customer_id
```

select列表列出查询的返回最终结果集中需要显示哪些列，这些列可以是数据表中一个实际的列、一个表达式、<u>或者甚至是一个select语句的结果</u>。
```sql
select c.customer_id,
       c.cust_first_name||' '||c.cust_last_name,
       (select e.last_name from hr.employees e where e.employee_id = c.account_mgr_id) as acct_mgr
from oe.customers c
```

### insert
insert语句用来向表、分区或视图中添加行。
```sql
insert into hr.jobs j (j.job_id, j.job_title, j.min_salary, j.max_salary)
values('IT_PM', 'Project Manager', 5000, 11000);

rollback;

insert into scott.bonus (ename, job, sal)
select ename,
       job, 
       sal * .10
from scott.emp

-- 多表插入
insert all
when sum_orders < 10000 then
into small_customers
when sum_orders >= 10000 and sum_orders < 100000 then
into medium_customers
else
into large_customers
select customer_id, sum(order_total) as sum_orders
from oe.orders
group by customer_id
```

### update