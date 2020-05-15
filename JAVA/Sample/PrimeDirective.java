package Sample;

import java.util.ArrayList;

class PrimeDirective {

  public ArrayList<Integer> onlyPrimes(int[] numbers) {
    ArrayList<Integer> primeNos = new ArrayList<Integer>();
    for(int number: numbers){
      if (isPrime(number)) {
        primeNos.add(number);
      }
    }
    return primeNos;
  }
  
  // Add your methods here:
  public boolean isPrime(int num) {
    if (num == 1){
      return true;
    } else {
      int count = num-1;
      while(count > 1) {
        if (num % count == 0) {
          return false;
        } else {
          count--;
        }
      }
      return true;
    }
  }
  
  public static void main(String[] args) {

    PrimeDirective pd = new PrimeDirective();
    int[] numbers = {6, 29, 28, 33, 11, 100, 101, 43, 89};
    System.out.println(pd.onlyPrimes(numbers));
  }   

}