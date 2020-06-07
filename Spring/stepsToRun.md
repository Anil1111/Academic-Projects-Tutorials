## Ruuning Project - Sample/book/spring-book

### Run Steps

1. From the `Spring-Boot-Dashboard` sidebar, click on the run icon
2. Sleect athe app to run `spring-book` and click `ok`
3. wait and select `com.richard...SpringBookApplication`
4. The application will start running and Debug console will see the output

### Observing outputs

1. Use the URL `http://localhost:8080/books` to view the book defined in the REST Controller `BookController`
2. Use the URL `http://localhost:8080/h2-console` to view the H2 db console, where enter the `JDBC URL` as `jdbc:h2:mem:testdb`
3. Perform `Select * from book` to see the list of books set by each `CommandLineRunners`


