package Sample;

public class HelloWorld {
  
	public static void main(String[] args) {
    
    String str = "Hello, World!";
    
    // Examples:

    System.out.println(str.length());   //13
    System.out.println(str.substring(4)); //o, World!
    System.out.println(str.toUpperCase());
		System.out.println(str.concat("hello"));  //Hello, World!hello
  }
  
}
