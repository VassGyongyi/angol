export default function KivalasztoMondat(props) {
    let pont =0
  const szetbontottMondat = props.mondat.mondat.split("_");
 function pontSzamitas(){
    if(document.getElementById("szavam").value===props.mondat.helyes)
    pont=1
    }
  function kovMondat(){
    document.getElementById("szavam").value=props.mondat.valasztas[0] // a selectet visszaállítjuk a válassz...-ra
    props.kovMondat(pont) //ez a gyerekkomponens, itt lekezeljük az eseményt, meghívja a szülő komponens metódusát
  }
  
  return (
    <div className="mondat">
      <p>
        {szetbontottMondat[0]} 
        {
           <select id="szavam" onChange={pontSzamitas}>
            {props.mondat.valasztas.map(
                (szo, index)=>{
                    return(
                        <option value={szo} key={index}>{szo} </option>
                    )
                }
            )}
           </select> 
        }_______
        {szetbontottMondat[1]}  
        ({props.mondat.helyes}) 
        <button onClick={kovMondat}>Következő mondat</button>
      </p>


    </div>
  );
}
