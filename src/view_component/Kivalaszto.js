import AngolModel from "../model/AngolModel";
import KivalasztoMondat from "./KivalasztoMondat";
import {useState} from "react"
const angolModel = new AngolModel();

export default function Kivalaszto() {
    const [mondat, setMondat] = useState({...angolModel.getMondat()})
    const [pont, setPont] = useState(0)
   //let mondat= angolModel.getMondat() ehelyett hasznájuk a statet
    
  function kovMondat(p){
    console.log("kovMondat")
    
    //ezt a metódust hívja a gyerekkomponens az eseménykor, itt hívjuk a következő mondatot
   // aktIndex növelése:
   angolModel.setAktIndex()
   // le kell kérdezni az aktMondatot:
   //mondat= angolModel.getMondat() helyett:
   setMondat({...angolModel.getMondat()}) //másolatot csinál
   console.log(mondat)
    setPont(pont+p)
  }  
  return (
    <div className="jatekter">
      <div className="cim">
        {angolModel.getCim()}
      </div>
      <KivalasztoMondat mondat={mondat} kovMondat={kovMondat}/>
      <div className="pontok">
        <p>Elért pont: {pont}</p>
      </div>
    </div>
  );
}
