package Sample.LanguageFam;

public class SinoTibetan extends Language {
  public SinoTibetan(String name, int numSpeakers){
    super(name, numSpeakers, "Asia", "subject-object-verb");
    if (name.contains("Chinese")) {
      this.wordOrder = "subject-verb-object";
    }
  }
}