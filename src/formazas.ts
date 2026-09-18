import { AdatTörlés, AllapotValtozas } from "./api";
import type { Tipus } from "./types";


export function Kiiratas(b_lista: Tipus[], szerkezet: string){
    const tabla = document.querySelector<HTMLTableSectionElement>('#lista')!
    tabla.innerHTML = "";
    b_lista.forEach((Elem):  void =>{
        const sor = document.createElement('tr');
        const id = document.createElement('td');
        id.textContent = Elem.id.toString();
        sor.appendChild(id);

        const nev = document.createElement('td');
        nev.textContent = Elem.name
        sor.appendChild(nev)

        const kategoria = document.createElement('td');
        kategoria.textContent = Elem.category
        sor.appendChild(kategoria)
        
        const resztvevok = document.createElement('td');
        resztvevok.textContent = Elem.participants.toString()
        sor.appendChild(resztvevok)

        const akitv = document.createElement('td');
        akitv.textContent = ((Elem.active)? 'Aktív' : "Csak meghírdetve") 
        sor.appendChild(akitv)

        if(szerkezet == "crud")
        {
            const gomb_cella = document.createElement('td')
            const gomb = document.createElement("button")
            gomb.textContent = "❌"
            gomb.title = "Törlés"
            gomb.addEventListener("click",async () => {
                const biztos = confirm("De te haver, ezt et e te bizos akkarod e?") 
                if(!biztos)
                {
                    return
                }
                try
                {
                    await AdatTörlés(Elem.id)

                }
                catch(err)
                {
                    console.log(`Rotyy ${err}`)
                }
            })
            gomb_cella.appendChild(gomb)
            const gomb2 = document.createElement('button')
            gomb2.textContent = "🔁"
            gomb2.title = "Állapot változtatása"
            gomb2.addEventListener("click", async () => {
                const biztos = confirm("Akkarsz Álapot Változást Kisöcsi?") 
                if(!biztos)
                {
                    return
                }
                try
                {
                    await AllapotValtozas(Elem.id, Elem.active)

                }
                catch(err)
                {
                    console.log(`Rotyy ${err}`)
                } 
            })

            sor.appendChild(gomb_cella)
        }

        tabla.appendChild(sor)
    })



}