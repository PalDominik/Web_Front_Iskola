import type { Tipus } from "./types";

const API_URL = "https://retoolapi.dev/Lab3nn/iskola";

export async function Beszerzes(): Promise<Tipus[]> {
    const valasz = await fetch(API_URL)
    if(!valasz)
    {
        throw new Error("Orbitális gyata van a belovasásnál!")
    }
    const beolvasott: Tipus[] = await valasz.json();
    return beolvasott

}

export async function AdatTörlés(id:number): Promise<void> {
    const valasz = await fetch(`${API_URL}/${id}`, {method:"DELETE"})
    if(!valasz)
    {
        throw new Error("Orbitális gyata van a törlésnél")
    }
}

export async function AllapotValtozas(id:number, active: boolean): Promise<void> {
    if(active)
    {
        active = !active
    }
    else {
        active = !active
    }
    const valasz = await fetch(`${API_URL}/${id}`, {
        method:"PATCH", 
        body: JSON.stringify({active : `${active}`}),
        headers: {"Content-Type":"application/json",},
    })
    if(!valasz)
    {
        throw new Error("Orbitális gyata van az aktív változtatásnál")
    }
}


export async function AdatValtoztatas(Elem : Tipus): Promise<void> {
    const valasz = await fetch(`${API_URL}/${Elem.id}`, {
        method:"PATCH", 
        body: JSON.stringify({
            name: `${Elem.name}`,
            category: `${Elem.category}`,
            participants: `${Elem.participants}`,
            active : `${Elem.active}`}),
        headers: {"Content-Type":"application/json",},
    })
    if(!valasz)
    {
        throw new Error("Orbitális gyata van a Form-nál")
    }
}