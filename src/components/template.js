import { Link } from "react-router-dom";
import "../css/template.css";


export default function Ui({ children }){
    return(
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}
export function Header(){
    return(
        <div className = "header">
            <h1>Witajcie w </h1>
            <div className = "nav">
                <Link to = "/"> Home</Link>&nbsp;&nbsp;
                <Link to = "/oferty">oferty specialne</Link>&nbsp; &nbsp;
                <Link to = "/zamow">Zamów</Link>&nbsp; &nbsp;
                <Link to = "/menu">Menu</Link>&nbsp; &nbsp;
            </div>
        </div>
    )
}
export function Footer(){
    return(
        <div className = "footer">
            <div className = "Footerpart">
                <h3>Kontakt</h3>
            </div>
            <div className = "Footerpart2">
                <h3>Restauracje blisko ciebie</h3>
            </div>
            <div className = "Footerpart">
                <h3>Właściciele</h3>
            </div>
            <div className = "Footerpart2">
                <h3>O Autorach</h3>
            </div>
        </div>
    )
}