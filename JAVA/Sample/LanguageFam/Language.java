package Sample.LanguageFam;

public class Language {
  protected String name;
  protected int numSpeakers;
  protected String regionsSpoken;
  protected String wordOrder;  

  public Language(String name, int numSpeakers, String regionSpoke, String wordOrder){
    this.name = name;
    this.numSpeakers = numSpeakers;
    this.regionsSpoken = regionSpoke;
    this.wordOrder = wordOrder;
  }

  public void getInfo(){
    System.out.println(this.name + " is spoken by " + this.numSpeakers + " people mainly in " + this.regionsSpoken + ".");
    System.out.println("The language follows the word order: " + this.wordOrder);
    System.out.println("\n");
  }

  public static void main(String args[]){
    Language spanish = new Language("Spanish", 555000000, "Spain, Latin America, and Equatorial Guinea", "subject-verb-object");
    spanish.getInfo();

    Language mayan = new Mayan("Mayan", 23000000);
    mayan.getInfo();    

    Language sino = new SinoTibetan("Mandarin Chinese", 54000000);
    sino.getInfo();      
    
    Language sino2 = new SinoTibetan(" Burmese", 54000000);
    sino2.getInfo();        
  }

}