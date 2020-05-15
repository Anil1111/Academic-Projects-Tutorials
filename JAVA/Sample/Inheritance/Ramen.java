package Sample.Inheritance;

public class Ramen extends Noodle {
  
  Ramen() {
    super(30.0, 0.3, "flat", "wheat flour");
  }

  //cannot override the isTasty method as it is final
}