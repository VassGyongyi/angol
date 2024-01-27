import { szenvedoMondatok } from "./angol";
export default class AngolModel {
  #lista = [];
  #aktIndex = 2;
  #aktMondat = {};

  constructor() {
    this.#lista = szenvedoMondatok;
    this.setMondat();
  }
  getCim() {
    return this.#lista[0];
  }
  getSugo() {
    return this.#lista[1];
  }
 
 
  setMondat() {
    this.#aktMondat = this.#lista[this.#aktIndex];
    /*Visszaadandó mód: -a megoldás helyes*/

    this.#aktMondat.helyes = this.#aktMondat.valasztas[0];
    /*                  -választás értékei keverve legyenek 
                        -pl:helyes:"stole"*/
    //  points.sort(function(){return 0.5 - Math.random()}); w3school-os megoldás
    this.#aktMondat.valasztas.sort(() => {
      return 0.5 - Math.random();
    });
    this.#aktMondat.valasztas.unshift("Válassz...") // a listába betesz egy szöveget
  }
  getMondat() {
    return this.#aktMondat;
  }
  setAktIndex(){
    this.#aktIndex++;
    if(this.#aktIndex>=this.#lista.length-1){
        this.#aktIndex=2
    }
   
    this.setMondat() //beállítom a köv. aktIndexxel
  }
}
