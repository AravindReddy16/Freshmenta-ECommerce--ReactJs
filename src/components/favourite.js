import React, {useContext} from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import "../styles/favourite.css";

export default function Favourite() {
    let {favourite} = useContext(MyContext)
    let navigate = useNavigate()

    let newFav = favourite.slice()

    function product(id) {
        navigate('/product', {state: {id: id}})
    }

    return (
        <div className="favouriteDiv">
            <div className="fav-header">
                <p>Favourite</p>
            </div>
            <div className="fav-items">
                {newFav.reverse().map((item) => (
                    <div className="fav-item">
                        <div className="fav-img">
                            <img src={item.image} alt="fav" />
                        </div>
                        <div className="fav-name" onClick={() => product(item.id)}>
                            <p id="fname">{item.name}</p>
                            <p id="fpiece">{item.pieces}, Priceg</p>
                        </div>
                        <div className="fav-price">
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};