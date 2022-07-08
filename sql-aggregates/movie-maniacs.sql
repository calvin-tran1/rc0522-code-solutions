  select concat("customers"."firstName",' ',"customers"."lastName") as "customer",
         sum("payments"."amount") as "totalSpent"
    from "customers"
    join "payments" using ("customerId")
group by "customer"
order by "totalSpent" desc;
