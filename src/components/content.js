import '../css/App.css';




export function Menu({ dishes, drinks }){

    return(
        <div id = "menu">
            {
                dishes.map((group, key)=>(
                    <MenuGroup key = {key}  name = {group.name} desc = {group.desc} species = {group.types} />
                ))
            }
            {
                drinks.map((drinkGroup, key)=>(
                    <MenuGroup key = {key} name = {drinkGroup.name} desc = {drinkGroup.desc} species = {drinkGroup.types} />
                ))
            }
        </div>
    )
}

    export function MenuGroup({ name, desc, species }){

        return(
            <div className = "Group" >
                <h2 className = "GroupTitle">{name}</h2>
                <p className = "descP">{desc}</p>
                {
                    species.map((dish, key)=>(
                        <MenuPosition  key = {key} name = {dish.name} price = {dish.price} />
                    ))
                    
                }
            </div>
        )
    }

    export function MenuPosition({  name, price }){
        return(
            <div className = "menuPosition">
                <h3>{name}</h3>
                <p>Cena: {price}zł</p>
            </div>
        )
    }


export function Order(){
    return(
        <div className = "order">
            <h2>Zamów coś dla siebie</h2>
            <form action ="" method = "POST">
                <input type = "textarea" placeholder = "złóż swoje zamówienie" /><br/><br/>
                <label><input type = "checkbox"/>Akceptuję politykę prywatności i regulamin zamówień</label><br/><br/>
                <button type = "submit">Zamów</button><br/><br/>
            </form>
        </div>
    )
}

export function Offerts(){
    return(
        <div className = "Offerts">
            <h2>Oferty specjalnie dla ciebie</h2>
            <ul>
                <li><h3>Dwie Pizze w cenie jednej</h3>
                    <ul>
                        <li>Kup dwie pizze&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>Użyj kodu "Promo"</li>
                        <li>Odbierz promocję </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export function Home(){
    return( 
        <>
            <h2>Tutaj mamy najlepszy domowy fast food </h2>
            <p>Polubisz nawet jeżeli nigdy nie jesz na mieście</p>
        </>
    )
}
