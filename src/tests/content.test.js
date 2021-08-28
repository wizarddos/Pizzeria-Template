import { render, screen } from '@testing-library/react';
import App from '../App';
import {
    Menu,
    Order,
    Offerts,
    Home

} from '../components/content';
import DishData from "../data/dishes.json" ;
import DrinkData from "../data/drinks.json";

describe("Testy Generowania Zawartości", ()=>{
    test('Wygenerowanie Głównego contentu strony', ()=>{
        render(<App />);
        expect(document.getElementById('mainContent')).toBeInTheDocument();
    })

    test('poprawne wygenerowanie memu',()=>{
        render(<Menu dishes = {DishData}  drinks = {DrinkData}/>);
        expect(document.querySelector('#menu')).toBeInTheDocument();
    })

    test('Wygenerowanie zamówień', ()=>{
        render(<Order />);
        expect(document.querySelector('form')).toBeInTheDocument();
    })

    test('Wygenerowanie ofert', ()=>{
        render(<Offerts />);
        expect(document.querySelector('ul')).toBeInTheDocument()
    })

    test('Wygenerowanie Strony głównej', ()=>{
        render(<Home />);
        expect(document.querySelector('h2')).toBeInTheDocument();
    })

}) 