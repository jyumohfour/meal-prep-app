import React, {useState, useEffect} from "react";
import { CartContext } from './SecondList'
import "./results.css";

function Results () {
    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('dababy')));
    console.log(cart);
    return (
        <div className="phrase">
            <section className="column">
                <text className="header">Here's the breakdown.</text>
                <section className="row">
                    <li className="detailList">
                        <h1 className="headItem">Your meals</h1>
                        {cart.map((x) => 
                        <ul>{x}</ul>
                        )}
                    </li>
                    <li className="detailList">
                        <h1 className="headItem">Included ingredients</h1>
                    </li>
                    <li className="detailList">
                        <h1 className="headItem">Unincluded ingredients</h1>
                    </li>
                    <li className="detailList">
                        <h1 className="headItem">Cost breakdown</h1>
                    </li>
                </section>
            </section>
        </div>
    )
}

export default Results;