package Sample;

import java.util.ArrayList;

class Playlist {
  
  public static void main(String[] args) {
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();
    desertIslandPlaylist.add("abc");
    desertIslandPlaylist.add("def");
    desertIslandPlaylist.add("ghi");
    desertIslandPlaylist.add("klm");
    desertIslandPlaylist.add("nop");
    desertIslandPlaylist.add("pqr");

    System.out.println(desertIslandPlaylist);
    System.out.println(desertIslandPlaylist.size());
    System.out.println(desertIslandPlaylist.remove(5));

    String temp1 = desertIslandPlaylist.get(desertIslandPlaylist.indexOf("def"));
    String temp0 = desertIslandPlaylist.get(0);
    desertIslandPlaylist.set(0, temp1);
    desertIslandPlaylist.set(1, temp0);
    System.out.println(desertIslandPlaylist);


  }
  
}