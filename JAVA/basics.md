# Java

## Java Program Structure

### Syntax

```java
public class HelloYou {
  public static void main(String[] args) { 
  }
}
```
`String[] args` is a placeholder for information we want to pass into our program. 

### Commenting Code
When comments are short we use the single-line syntax: `//`.
```java
// calculate customer satisfaction rating
```

When comments are long we use the multi-line syntax: `/* and */`.
```java
/*
We chose to store information across multiple databases to
minimize the possibility of data loss. We'll need to be careful
to make sure it does not go out of sync!
*/
```

### Semicolons and Whitespace
Java does not interpret whitespace, the areas of the code without syntax

### Compilation: Catching Errors
Java is a compiled programming language, meaning the code we write in a `.java `file is transformed into byte code by a compiler before it is executed by the Java Virtual Machine on your computer.   
A **compiler** is a program that translates human-friendly programming languages into other programming languages that computers can execute.
The compiling process catches mistakes before the computer runs our code.

compile it with the terminal command:   
`javac Plankton.java`

A successful compilation produces a `.class` file: `Plankton.class`, that we execute with the terminal command:   
`java Plankton`



### Case-Sensitivity
Java is a case-sensitive language. Case sensitivity means that syntax, the words our computer understands, must match the case. For example, the Java command for outputting text to the screen is `System.out.println()`. If you were to type `system.out.println()` or `System.Out.println()`, the compiler would not know that your intention was to use System or out.

#### Main()
Every Java program must have a method called `main()`. A method is a sequence of tasks for the computer to execute. This main() method holds all of the instructions for our program.

#### System.out.println()
`println()` comes from an object called `out`, which is responsible for various types of output. Objects are packages of state and behavior, and they’re often modeled on real-world things.
`out` is located within System, which is another object responsible for representing our computer within the program!


### JAVA: VARIABLES
 We store information in variables, named locations in memory.
Naming a piece of information allows us to use that name later, accessing the information we stored.   
Variables also give context and meaning to the data we’re storing. The value 42 could be someone’s age, a weight in pounds, or the number of orders placed. 

In Java, we specify the type of information we’re storing. Primitive datatypes are types of data built-in to the Java system.
We must declare a variable to reference it within our program. Declaring a variable requires that we specify the type and name:
```java
// datatype variableName
int age;
double salaryRequirement;
boolean isEmployed;
```

#### ints
In Java, whole numbers are stored in the int primitive data type.
ints hold positive numbers, negative numbers, and zero. They do not store fractions or numbers with decimals in them.
The int data type allows values between _-2,147,483,648 and 2,147,483,647, inclusive._

#### doubles
The double primitive data type can help. double can hold decimals as well as very large and very small numbers. The maximum value is `1.797,693,134,862,315,7 E+308`, which is approximately 17 followed by 307 zeros. The minimum value is 4.9 E-324, which is 324 decimal places!
double price = 8.99;

#### booleans
These questions are answered with a boolean, a type that references one of two values: true or false.
```java
boolean javaIsACompiledLanguage = true;
boolean javaIsACupOfCoffee = false;
```

#### char
The char data type can hold any character, like a letter, space, or punctuation mark.
It must be surrounded by single quotes, '.
`char grade = 'A';`

#### String
Strings, which are objects, instead of primitives. Objects have built-in behavior.
Strings hold sequences of characters. 
`String greeting = "Hello World";`


####Static Checking
The Java programming language has `static typing`. Java programs will not compile if a variable is assigned a value of an incorrect type.
Static typing helps because bugs are caught during programming rather than during execution of the code.
```java
int greeting = "Hello World";

error: incompatible types: String cannot be converted to int
    int greeting = "Hello World";
```


### Naming
A **variable starts with a valid letter, or a $, or a _**. No other symbols or numbers can begin a variable name. 1stPlace and *Gazer are not valid variable names.
Variable names of only one word are spelled in all **lowercase letters**. Variable names of more than one word have the first letter lowercase while the beginning letter of each subsequent word is capitalized. This style of capitalization is called `camelCase`.



### MANIPULATING VARIABLES
- `+` to add! - `int numPicturesOfCats = 60 + 24;`   
- Modulo - `int cookiesLeftover = 10 % 3;` //cookiesLeftover holds 1
Java has relational operators for numeric datatypes that make boolean comparisons. These include less than `<` and greater than `>`

#### Equals and Not Equals
- `==` will tell us if two variables are equal:   
- To check if two variables are not equal, we can use `!=`

#### *Difference between == and .equals() method in Java
Main difference between `.equals()` method and `==` operator is that one is method and other is operator.
**We can use == operators for reference comparison (address comparison) and .equals() method for content comparison.** In simple words, `==` checks if both objects point to the same memory location whereas `.equals()` evaluates to the comparison of values in the objects.
```java
       String s1 = new String("HELLO"); 
        String s2 = new String("HELLO"); 
        System.out.println(s1 == s2);  //false
        System.out.println(s1.equals(s2));  //true
```
Both s1 and s2 refers to _different objects_.
When we use == operator for s1 and s2 comparison then the result is false as both have different addresses in memory.
Using equals, the result is true because its only comparing the values given in s1 and s2.


#### .equals()
 To test equality with Strings, we use a built-in method called .equals().
 ```java
 String person1 = "Paul";
String person2 = "John";
String person3 = "Paul";

System.out.println(person1.equals(person2));
//prints false, since "Paul" is not "John"

System.out.println(person1.equals(person3));
//prints true, since "Paul" is "Paul"
```

#### String Concatenation
The + operator, which we used for adding numbers together, can be used to concatenate Strings. In other words, we can use it to join two Strings together!
```java
String username = "PrinceNelson";
System.out.println("Your username is: " + username);
```

## Class
We represent each student as an instance, or object, of the Student class.
This is object-oriented programming because programs are built around objects and their interactions. An object contains state and behavior.
Classes are a blueprint for objects. Blueprints detail the general structure. For example, all students have an ID, all courses can enroll a student, etc.
An instance is the thing itself. This student has an ID of 42, this course enrolled that student, etc.


### Classes: Constructors
We create objects (instances of a class) using a constructor method. The constructor is defined within the class.
The constructor, Car(), shares a name with the class.

```java
public class Car {
  public Car() {
  //constructor method starts after curly brace
    //instructions for creating a Car instance
  }
  //constructor method ends after curly brace
  public static void main(String[] args) {
    // program tasks
  }
}
```

### Classes: Instance Fields
printing an instance of Store, which looked something like `Store@6bc7c054`. The first part, `Store`, refers to the class, and the second part `@6bc7c054` refers to the instance’s location in the computer’s memory.
We’ll add associated data to an object by introducing instance variables, or instance fields. Instance fields are the state in our objects.
The declaration is within the class and the instance variable will be available for assignment inside the constructor.


### Classes: Constructor Parameters
The parameter carColor references the value passed in during a method call:
```java
public class Car {
  String color;

  // constructor method with a parameter
  public Car(String carColor) {
    // parameter value assigned to the field
    color = carColor;
  }
  public static void main(String[] args) {
    // program tasks
  }
}

new Car("blue");
// carColor references "blue" inside constructor
```

Classes define the state and behavior of their instances. Behavior comes from methods defined in the class. State comes from instance fields declared inside the class.


### Defining Methods

This method looks like:
```java
public void startEngine() {
  System.out.println("Starting the car!");
  System.out.println("Vroom!");
}
```
`public` means that other classes can access this method.
`void` keyword means that there is no specific output from the method.



### Scope
A method is a task that an object of a class performs.
We mark the domain of this task using curly braces: {, and }. Everything inside the curly braces is part of the task. This domain is called the scope of a method.
```java
public void deposit(double amountToDeposit){
  double updatedBalance = balance + amountToDeposit;
  balance = updatedBalance;
}
```

Now, when we call deposit(), it should change the value of the instance field balance:

```java
public static void main(String[] args){
  SavingsAccount myAccount = new SavingsAccount(2000);
  System.out.println(myAccount.balance);
  myAccount.deposit(100);
  System.out.println(myAccount.balance);
}
```

### Returns
Remember, variables can only exist in the scope that they were declared in.
We can use a value outside of the method it was created in if we return it from the method.
We return a value by using the keyword return:

```java
public int numberOfTires() {
   int tires = 4;
   return tires;
}
```

This method, called numberOfTires, returns 4. In past exercises, when creating new methods, we used the keyword void. Here, we are replacing void with int, to signify that the return type is an int.

### The toString() Method
When we print out Objects, we often see a String that is not very helpful in determining what the Object represents. We saw that when we printed our Store objects, we would see output like:
`Store@6bc7c054`
where Store is the name of the object and 6bc7c054 is its position in memory.

When we define a `toString()` method for a class, we can return a String that will print when we print the object:
```java
class Car {
    String color;
    public Car(String carColor) {
        color = carColor;
    }
    public static void main(String[] args){
        Car myCar = new Car("red");
        System.out.println(myCar);
    }
   public String toString(){
       return "This is a " + color + " car!";
   }
}
```

## Control Flow
Conditional statements check a boolean condition and run a block of code depending on the condition. Curly braces mark the scope of a conditional block similar to a method or class.
```java
if (true) {
  System.out.println("Hello World!");
}
```

The `if-then` statement is the most simple control flow we can write. It tests an expression for truth and executes some code based on it.
```java
if (course.equals("Biology")) {
  // Enroll in Biology course
} else if (course.equals("Algebra")) {
  // Enroll in Algebra course
} else {
  System.out.println("Course not found!");
}
```

### Switch:
```java
String course = "History";

switch (course) {
  case "Algebra": 
    // Enroll in Algebra
    break; 
  case "Theatre":
    // Enroll in Theatre
    break;
  default:
    System.out.println("Course not found");
}
```

### Conditional Operators
- For example, what if we want to run a code block only if multiple conditions are true. We could use the AND operator: `&&.`
- Or, we want to run a code block if at least one of two conditions are true. We could use the OR operator: `||`.
- The unary operator NOT, `!`, works on a single value. This operator evaluates to the opposite boolean to which it’s applied:

`Conditional-AND, &&`, evaluates to true if the booleans on both sides are true.
```java
if (true && false) {
  System.out.println("You won't see me print!");
} else if (true && true) {
  System.out.println("You will see me print!");
}
```

`Conditional-OR, ||`, evaluates to true if one or both of the booleans on either side is true.
```java
if (false || false) {
  System.out.println("You won't see me print!");
} else if (false || true) {
  System.out.println("You will see me print!");
}
```

`Logical-NOT, !`, evaluates to the opposite boolean value to which it is applied.
```java
if (!false) {
  System.out.println("You will see me print!");
}
```

## ARRAYS
An array holds a fixed number of values of one type. Arrays hold doubles, ints, booleans, or any other primitives. Arrays can also contain Strings, or any other objects!
Notice that the indexes start at 0! 

To create an array, we first declare the type of data it holds:
```java
double[] prices = {13.15, 15.87, 14.22, 16.66};
String[] clothingItems = {"Tank Top", "Beanie", "Funny Socks", "Corduroys"};
```

### Importing Arrays
`import java.util.Arrays;`
If we want to have a more descriptive printout of the array itself, we need a toString() method that is provided by the Arrays package in Java.
```java
import java.util.Arrays;

public class Lottery(){
  public static void main(String[] args){
    int[] lotteryNumbers = {4, 8, 15, 16, 23, 42};
    String betterPrintout = Arrays.toString(lotteryNumbers);
    System.out.println(betterPrintout);
  }
}
```

#### Get Element By Index
```java
double[] prices = {13.1, 15.87, 14.22, 16.66};
System.out.println(prices[1]);
```

#### Creating an Empty Array
`String[] menuItems = new String[5];` //Once you declare this size, it cannot be changed! This array will always be of size 5.

After declaring and initializing, we can set each index of the array to be a different item:
```java
menuItems[0] = "Veggie hot dog";
menuItems[1] = "Potato salad";
menuItems[2] = "Cornbread";
menuItems[3] = "Roasted broccoli";
menuItems[4] = "Coffee ice cream";
```

This group of commands has the same effect as assigning the entire array at once:
`String[] menuItems = {"Veggie hot dog", "Potato salad", "Cornbread", "Roasted broccoli", "Coffee ice cream"};`

We can also change an item after it has been assigned! Let’s say this restaurant is changing its broccoli dish to a cauliflower one:
`menuItems[3] = "Baked cauliflower";`

#### Length
```java
String[] menuItems = new String[5];
System.out.println(menuItems.length); //prints 5
```

#### String[] args
The args parameter is another example of a String array. In this case, the array args contains the arguments that we pass in from the terminal when we run the class file. (So far, args has been empty.)

```java
public class HelloYou {
  public static void main(String[] args) {
    System.out.println("Hello " + args[0]);  
  }
}
```

## ArrayList
When we work with arrays in Java, we’ve been limited by the fact that once an array is created, it has a fixed size. We can’t add or remove elements.
But what if we needed to add to the book lists, newsfeeds, and other structures we were using arrays to represent?

To represent dynamic lists, we can use Java’s ArrayLists. ArrayLists allow us to:
- Store elements of the same type (just like arrays)
- Access elements by index (just like arrays)
- Add elements
- Remove elements

`import java.util.ArrayList;`


### Creating ArrayLists
we need to declare the type of objects it will hold, just as we do with array
`ArrayList<String> babyNames;`

```java
ArrayList<Integer> ages;
// Initializing:
ages = new ArrayList<Integer>();

ArrayList<String> toDoList = new ArrayList<String>();
```

*We use angle brackets < and > to declare the type of the ArrayList. These symbols are used for generics. `Generics` are a Java construct that allows us to define classes and objects as parameters of an ArrayList. For this reason, **we can’t use primitive types in an ArrayList:**
```java
// This code won't compile:
ArrayList<int> ages;

// This code will compile:
ArrayList<Integer> ages;
```

The `<Integer>` generic has to be used in an ArrayList instead. 
You can also use `<Double>` and `<Char>` for types you would normally declare as doubles or chars.


### Adding an Item
ArrayList comes with an `add()` method that takes an argument to add to the end of the ArrayList:
```java
ArrayList<Integer> sudokuRow1 = new ArrayList<Integer>();
sudokuRow1.add(4);
// sudokuRow1 now holds [4]
sudokuRow1.add(8);
// sudokuRow1 now holds [4, 8]
sudokuRow1.add(3);
// sudokuRow1 now holds [4, 8, 3]
```

### ArrayList Size
If we wanted to display the number of items in the cart, we could find the size of it using the size() method:
```java
ArrayList<String> shoppingCart = new ArrayList<String>();

shoppingCart.add("Trench Coat");
System.out.println(shoppingCart.size());
// 1 is printed
```

### Accessing an Index
For ArrayLists, bracket notation won’t work. Instead, we use the method get() to access an index:
```java
ArrayList<String> shoppingCart = new ArrayList<shoppingCart>();
shoppingCart.add("Trench Coat");
shoppingCart.add("Tweed Houndstooth Hat");
shoppingCart.add("Magnifying Glass");
System.out.println(shoppingCart.get(2)); //prints "Magnifying Glass"
```


### Changing a Value
When we were using arrays, we could rewrite entries by using bracket notation to reassign values:
```java
String[] shoppingCart = {"Trench Coat", "Tweed Houndstooth Hat", "Magnifying Glass"};
shoppingCart[0] = "Tweed Cape";
```

#### using the set() method:
```java
ArrayList<String> shoppingCart = new ArrayList<shoppingCart>();
shoppingCart.add("Trench Coat");
shoppingCart.add("Tweed Houndstooth Hat");
shoppingCart.add("Magnifying Glass");
shoppingCart.set(0, "Tweed Cape");
```

#### Removing an Item
ArrayLists allow us to remove an item by specifying the index to remove:
```java
ArrayList<String> shoppingCart = new ArrayList<String>();
shoppingCart.add("Trench Coat");
shoppingCart.add("Tweed Houndstooth Hat");
shoppingCart.add("Magnifying Glass");
shoppingCart.remove(1);
or
shoppingCart.remove("Trench Coat"); //Note: This command removes the FIRST instance of the value "Trench Coat".
```



#### Getting an Item's Index
```java
// detectives holds ["Holmes", "Poirot", "Marple", "Spade", "Fletcher", "Conan", "Ramotswe"];
System.out.println(detectives.indexOf("Fletcher"));
```


## LOOPS

### While loop:
a while loop will continue running the code over and over until the condition evaluates to false   
while loops are extremely useful when you want to run some code until a specific change happens. 

```java
int attempts = 0;

while (passcode != 0524 && attempts < 4) {
  System.out.println("Try again.");
  passcode = getNewPasscode();
  attempts += 1;
}
```

### Incrementing While Loops
When looping through code, it’s common to use a counter variable. A counter (also known as an `iterator`) is a variable used in the conditional logic of the loop and (usually) incremented in value during each iteration through the code.
```java
int wishes = 0;
while (wishes < 3) {
  System.out.println("Wish granted.");
  wishes++;
}
```

### For Loops
A for loop brings together the following steps in a single line, separated by semicolons:
- Initializing a counter variable.
- Defining the looping condition.
- Incrementing the counter.


Iterating Over Arrays and ArrayLists
```java
for (int i = 0; i < secretCode.length; i++) {
  secretCode[i] += 1;
}

for (int i = 0; i < secretCode.size(); i++) {
  int num = secretCode.get(i);
  secretCode.set(i, num + 1);
}
```

### For-Each Loops
Sometimes we need access to the elements’ indices or we only want to iterate through a portion of a list. If that’s the case, a regular for loop is a great choice. But sometimes we couldn’t care less about the indices; we only care about the element itself. At times like these, for-each loops come in handy.

For-each loops allow you to directly loop through each item in a list of items (like an array or ArrayList) and perform some action with each item
```java
for (String inventoryItem : inventoryItems) {
  System.out.println(inventoryItem);
}
```

## String Methods
String, which is widely used in Java, is an object that represents a sequence of characters
String class provides a lot of useful methods to help us perform operations on strings and data manipulation.


`length()` - would return its length.
```java
String str = "Hello World!";  
System.out.println(str.length());
```

`concat()` - Concatenation is the operation of joining two strings together. doesn’t actually change the value of the original string.
```java
String name = "Code";
name = name.concat("cademy");
```

`equals()` - 
With objects, such as Strings, we can’t use the primitive equality operator == to check for equality between two strings. To test equality with strings, we use a built-in method called equals().
```java
String flavor1 = "Mango";
String flavor2 = "Peach";

System.out.println(flavor1.equals("Mango"));
// prints true
```

`equalsIgnoreCase()` with case ignore

`indexOf() `
 string method will return -1 if the substring doesn’t exist within a String.

```java
String letters = "ABCDEFGHIJKLMN";
System.out.println(letters.indexOf("C")); //prints 2

String letters = "ABCDEFGHIJKLMN";
System.out.println(letters.indexOf("EFG")); //prints 4
```

`charAt()`
The charAt() method returns the character located at a String‘s specified index.
```java
String str = "qwer";
System.out.println(str.charAt(2));
```

`substring()`
There may be times when we only want a part of a string. In such cases, we may want to extract a substring from a string.
```java
String line = "The Heav'ns and all the Constellations rung";
System.out.println(line.substring(23)); //output Constellations rung because that’s what begins at index 23 and ends at the end of line

String line = "The Heav'ns and all the Constellations rung";
System.out.println(line.substring(23, 38)); //It would output Constellations because that’s the substring that begins at index 23 and ends at index 38.
```

`toUpperCase()` / `toLowerCase()`
```java
String input = "Cricket!";
String upper = input.toUpperCase(); // stores "CRICKET!"
String lower = input.toLowerCase(); // stores "cricket!"
```

## Inheritance
a Java class can also inherit traits from another class. Because a Triangle is a Shape, we can define Triangle so that it inherits fields and methods directly from Shape. The object-oriented principle of inheritance saves us the headache of redefining the same class members all over again.

There are several terms you’ll encounter frequently:   
**Parent class, superclass, and base class** refer to the class that another class inherits from (like Shape).
**Child class, subclass, and derived class** refer to a class that inherits from another class (like Triangle).

```java
class Shape {
  // Shape class members
}

class Triangle extends Shape {
  // additional Triangle class members
}
```

### Inheriting the Constructor
if the child class inherits its parent’s fields and methods, does it also inherit the constructor? It does indeed, 

Let’s say Shape has a numSides field that is set by passing an integer into the constructor. If we’re instantiating a Triangle, we would want that number to always be 3, so we’d want to modify the constructor to automatically assign numSides with a value of 3
By passing 3 to super(), we are making it possible to instantiate a Triangle without passing in a value for numSides.
using the super() method which acts like the parent constructor inside the child class constructor:
```java
class Triangle extends Shape {
  Triangle() {
    super(3);
  }
}
```

It is also possible to just completely override a parent class constructor by writing a new constructor for the child class:
```java
class Triangle extends Shape {
  Triangle() {
    this.numSides = 3;
  }
}
```

## Parent Class Aspect Modifiers
You may recall that Java class members use private and public access modifiers to determine whether they can be accessed from outside the class. So does a child class inherit its parent’s private members?
Well, no. But there is another access modifier we can use to keep a parent class member accessible to its child classes and to files in the package it’s contained in — and otherwise private: protected.

Modifier    | Class | Package | Child Class | Global
---         | ---   | ---     | ---         | ---|
public      |   Y   |     Y   |   Y         | Y
protected   |   Y   |     Y   |   Y         | N
default     |   Y   |     Y   |   N         | N
private     |   Y   |     N   |   N         | N

In addition to access modifiers, there’s another way to establish how child classes can interact with inherited parent class members: using the final keyword. If we add final before a parent class method’s access modifier, we disallow any child classes from changing that method. This is helpful in limiting bugs that might occur from modifying a particular method.



## Polymorphism

The main advantages of polymorphic programming:
- Simplifying syntax
- Reducing cognitive overload for developers

### Method Overriding
One common use of polymorphism with Java classes is something we mentioned earlier — overriding parent class methods in a child class. Like the + operator, we can give a single method slightly different meanings for different classes. This is useful when we want our child class method to have the same name as a parent class method but behave a bit differently in some way.
```java
class BankAccount {
  protected double balance;
  public void printBalance() {
    System.out.println("Your account balance is $" + balance);
  }
}

class CheckingAccount extends BankAccount {
  @Override
  public void printBalance() {
    System.out.println("Your checking account balance is $" + balance);
  }
}
```

Notice that in order to properly override `printBalance()`, in CheckingAccount the method has the following in common with the corresponding method in BankAccount.
- Method name
- Return type
- Number and type of parameters

You may have also noticed the `@Override` keyword above printBalance() in CheckingAccount. This annotation informs the compiler that we want to override a method in the parent class. If the method doesn’t exist in the parent class, we’ll get a helpful error when we compile the program.


### Using a Child Class as its Parent Class
An important facet of polymorphism is the ability to use a child class object where an object of its parent class is expected.

One way to do this explicitly is to instantiate a child class object as a member of the parent class. We can instantiate a CheckingAcount object as a BankAccount(Parent Class) like this:
`BankAccount kaylasAccount = new CheckingAcount(600.00);`
We can use kaylasAccount as if it were an instance of BankAccount, in any situation where a BankAccount object would be expected. (This would be true even if kaylasAccount were instantiated as a CheckingAccount, but using the explicit child as parent syntax is most helpful when we want to declare objects in bulk.)

It is important to note here that the compiler just considers kaylasAccount to be any old BankAccount. But because method overriding is handled at runtime, if we call `printBalance()`, we’ll see something CheckingAccount specific:
This is because at runtime, kaylasAccount is recognized as the CheckingAccount it is. So, what if CheckingAccount has a method `transferToSavings()` that BankAccount does not have? Can kaylasAccount still use that method?
Well, no. The compiler believes that kaylasAccount is just a BankAccount that doesn’t have some fancy child class `transferToSavings()` method, so it would throw an error

### Child Classes in Arrays and ArrayLists
In fact, we can put instances of different classes that share a parent class together in an array or ArrayList! For example, let’s say we have a Monster parent class with a few child classes: Vampire, Werewolf, and Zombie. We can set up an array with instances of each:
```java
dracula = new Vampire();
wolfman = new Werewolf();
zombie1 = new Zombie();
Monster[] monsters = {dracula, wolfman, zombie1};
```

We can even iterate through the list of items — regardless of subclass — and perform the same action with each item:
```java
for (Monster monster : monsters) {
  monster.attack();
}
```

## Debugging

In Java, there are many different ways of classifying errors, but they can be boiled down to three categories:
- `Syntax errors:` Errors found by the compiler.
- `Run-time errors: `Errors that occur when the program is running.
- `Logic errors:` Errors found by the programmer looking for the causes of erroneous results.

### Syntax Errors
When we are writing Java programs, the compiler is our first line of defense against errors. It can catch syntax errors.
Syntax errors represent grammar errors in the use of the programming language.

### Run-time Errors
Errors which happen during program execution (run-time) after successful compilation are called run-time errors.
Some common run-time errors:
- Division by zero also known as division error
- Trying to open a file that doesn’t exist

## Exceptions
Java uses exceptions to handle errors and other exceptional events. Exceptions are the conditions that occur at runtime and may cause the termination of the program.

When an exception occurs, Java displays a message that includes the name of the exception, the line of the program where the exception occurred, and a stack trace. The stack trace includes:
>The method that was running   
The method that invoked it   
The method that invoked that one

Some common exceptions that you will see in the wild:
- `ArithmeticException`: Something went wrong during an arithmetic operation; for example, division by zero.
- `NullPointerException`: You tried to access an instance variable or invoke a method on an object that is currently null.
- `ArrayIndexOutOfBoundsException`: The index you are using is either negative or greater than the last index of the array (i.e., array.length-1).
- `FileNotFoundException`: Java didn’t find the file it was looking for.

### Exception Handling
One way to handle exceptions is using the try/catch:

The `try` statement allows you to define a block of code to be tested for errors while it is being executed.   
The `catch` statement allows you to define a block of code to be executed if an error occurs in the try block.
```java
try {
  //  Block of code to try
} catch (NullPointerException e) {
  // Print the error message like this:
  System.err.println("NullPointerException: " + e.getMessage());
  // Or handle the error another way here
}
```
Notice how we used `System.err.println()` here instead of System.out.println(). `System.err.println()` will print to the standard error and the text will be in red.

You can also chain exceptions together:
```java
try {
  //  Block of code to try
} catch (NullPointerException e) {
  //  Code to handle a NullPointerException
} catch (ArithmeticException e) {
  //  Code to handle an ArithmeticException
}
```

### Logic Errors
These types of errors which provide incorrect output, but appears to be error-free, are called logic errors. Logic errors occur when there is a design flaw in your programz