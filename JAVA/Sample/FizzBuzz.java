package Sample;

public class FizzBuzz {

  public static void main(String args[]) {
    System.out.println("Starting execution...");
      int count = 1;

      while (count <= 100) {
        int modulo3 = count % 3;
        int modulo5 = count % 5;

        if(modulo3 == 0 && modulo5 == 0) {
          System.out.println("FizzBuzz");
        } else if(modulo3 == 0 || modulo5 == 0) {
          if (modulo3 == 0) {
            System.out.println("Fizz");
          }
          if(modulo5 == 0) {
            System.out.println("Buzz");         
          }
        } else {
          System.out.println(count);
        }

        count++;

      }
  }
}