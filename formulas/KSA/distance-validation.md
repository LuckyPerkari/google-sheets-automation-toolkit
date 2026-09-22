## Check if distance is more than 45 km formula

```excel
=IFERROR(IF(AA2="","",IF(VALUE(LEFT(AA2,SEARCH(" KM",AA2)-1))>45,"More than 45 KM","OK")),"Invalid Distance")
```





