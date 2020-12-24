import React, { useEffect, useState } from 'react';
import {
    CartPageContainer, ItemContainer, CountContainer,
    DeleteButton, NavButtonsContainer, NavButton, EmptyStyle
} from './CartPageStyle';
import { Link } from "react-router-dom";
import { Image, reduceText } from '../components/reusable.js';
import { useDispatch } from 'react-redux';
import { remove, increment, decrement } from '../store/actions/actions.js';
import { useSelector } from 'react-redux';

function CartPage() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.items);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(items.reduce((counter, item) =>
            (counter + item.price * item.counter), 0))
    }, [items])

    if (!items.length) { return <EmptyStyle>Cart is Currently Empty!</EmptyStyle> }
    return (
        <CartPageContainer>
            <h1>Shopping Cart</h1>
            {items.map(item =>
                <ItemContainer key={item.id}>
                    <Image img={item.img} height='160px' width='160px' />
                    <h1>{reduceText(item.header, 30)}</h1>
                    <CountContainer onClick={() => (dispatch(increment(item)))}>+</CountContainer>
                    <h2>{item.counter}</h2>
                    <CountContainer onClick={() => (dispatch(decrement(item)))}>-</CountContainer>
                    <DeleteButton onClick={() => (dispatch(remove(item)))}>Delete</DeleteButton>
                    <h2>{item.price * item.counter}$</h2>
                </ItemContainer>
            )}
            <h1>Total: {totalPrice}$</h1>
            <NavButtonsContainer>
                <Link to='/catalog'>
                    <NavButton>Catalog</NavButton>
                </Link>
                <Link to='/checkout'>
                    <NavButton>Continue</NavButton>
                </Link>
            </NavButtonsContainer>
        </CartPageContainer>
    );
}

export default CartPage;