import { Beszerzes } from './api'
import { Kiiratas } from './formazas';
import { menu } from './menu'
import './style.css'

menu()
const lista = await Beszerzes();
Kiiratas(lista,"Read")