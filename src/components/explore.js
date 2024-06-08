import React, {useState, useContext, useRef} from "react";
import siteArray from "../items/array";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import "../styles/explore.css";

export default function Explore() {
    let {cart, setCart} = useContext(MyContext)
    let [searchItem, setSearchItem] = useState(siteArray)
    let searchRef = useRef(null)
    let navigate = useNavigate()
    let [empty, setEmpty] = useState(true)

    function product(id) {
        navigate('/product', {state: {id: id}})
    }

    function clearSearch() {
        searchRef.current.value = "";
        setSearchItem(siteArray)
        setEmpty(true)
    }

    function addtocart(id) {
        let item = siteArray.find(item => item.id === id)
        let add = cart.filter((pdt) => pdt.id === item.id)
        if(add.length === 0) {
            setCart(prev => [...prev, item])
        }
    }

    function search(e) {
        let items = siteArray.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchItem(items)
        if(e.target.value === "") {
            setEmpty(true)
        } else {
            setEmpty(false)
        }
    }
    return (
        <div className="exploreDiv">
            <div className="explore-header">
                <p>Find Products</p>
            </div>
            <div className="search-input">
                <div className="input-box">
                    <div className="icon">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.44132 14.0158C9.21889 14.0158 9.98884 13.8606 10.7072 13.559C11.4256 13.2575 12.0783 12.8156 12.6282 12.2584C13.178 11.7013 13.6141 11.0398 13.9117 10.3119C14.2093 9.58391 14.3624 8.80369 14.3624 8.01576C14.3624 7.22783 14.2093 6.44761 13.9117 5.71966C13.6141 4.99171 13.178 4.33027 12.6282 3.77312C12.0783 3.21597 11.4256 2.77401 10.7072 2.47248C9.98884 2.17096 9.21889 2.01576 8.44132 2.01576C6.87094 2.01576 5.36489 2.6479 4.25447 3.77312C3.14404 4.89834 2.52022 6.42446 2.52022 8.01576C2.52022 9.60706 3.14404 11.1332 4.25447 12.2584C5.36489 13.3836 6.87094 14.0158 8.44132 14.0158ZM14.6782 12.9218L18.2111 16.5018C18.3053 16.5941 18.3804 16.7045 18.432 16.8265C18.4837 16.9486 18.5108 17.0798 18.5119 17.2126C18.5129 17.3454 18.4878 17.477 18.4381 17.5999C18.3884 17.7227 18.3151 17.8343 18.2224 17.9282C18.1296 18.022 18.0194 18.0962 17.8981 18.1463C17.7768 18.1965 17.6468 18.2218 17.5158 18.2205C17.3847 18.2193 17.2553 18.1916 17.1349 18.1391C17.0145 18.0866 16.9057 18.0103 16.8147 17.9148L13.2818 14.3348C11.6954 15.5826 9.69934 16.1709 7.69995 15.98C5.70055 15.789 3.84813 14.8331 2.51977 13.3068C1.19142 11.7806 0.486995 9.79871 0.549898 7.76469C0.612801 5.73066 1.4383 3.79739 2.85836 2.35841C4.27841 0.919431 6.18627 0.0829289 8.19354 0.0191878C10.2008 -0.0445533 12.1566 0.669259 13.6628 2.01531C15.169 3.36137 16.1123 5.23848 16.3008 7.26452C16.4892 9.29056 15.9087 11.3132 14.6772 12.9208L14.6782 12.9218Z" fill="#181B19"/></svg>
                    </div>
                    <input type="text" placeholder="Search Store" ref={searchRef} onChange={search} />
                    <div className="clear">
                        {!empty && <button onClick={clearSearch}>x</button>}
                    </div>
                </div>
            </div>
            <div className="search-items">
                {searchItem.map((item) => (
                    <div className="item">
                        <div className="image" onClick={() => product(item.id)}>
                            <img src={item.image} alt="img" />
                        </div>
                        <div className="item-detail">
                            <div className="item-name">
                                <p>{item.name}</p>
                            </div>
                            <div className="item-qty">
                                <p>{item.pieces}, Priceg</p>
                            </div>
                            <div className="item-cart">
                                <div className="item-price">
                                    <p>${item.price}</p>
                                </div>
                                <div className="cart-btn">
                                    <button onClick={() => addtocart(item.id)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};