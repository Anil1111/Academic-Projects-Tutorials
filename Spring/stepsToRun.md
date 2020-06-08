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

---

## Ruuning Project - TODO

### Run Steps - Backend

1. From the `Spring-Boot-Dashboard` sidebar, click on the run icon
2. Sleect athe app to run `restful-web-services` and click `ok`
3. wait and select `com.richard...RestfulWebServicesApplication`
4. The application will start running and Debug console will see the output

### Observing outputs

1. Run the requests present in the `requests.http` file to fire the REST API Calls
    - append the right `Authorization` value that you can generate from RESTlet Client
2. Alternatively, You can run the requests using the Restlet Client which is a chrome extension.
    - You may construct the basic authorization on it using the `Add Authorization` option along with Origin
3. By default, use the credential to log as Form authentication in the spring security login form: `Username`: richard and `Password`: dummy
3. Use the URL `http://localhost:8085/h2-console` to view the H2 db console, where enter the `JDBC URL` as `jdbc:h2:mem:testdb`


### Run Steps - Frontend

1. ng serve --open

### Observing outputs

1. Use the URL `http://localhost:4200` 
2. Use the credential: `Username`: richard and `Password`: dummy
