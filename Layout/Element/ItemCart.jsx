import {useEffect, useState} from 'react';
import {ShoppingBag, ShoppingCart} from 'react-feather';
import {Input, Media} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct, getAPIData} from '../../Utils';
import {APICallUrl, CommonPath} from '../../Components/Constant';
import {Btn} from '../../Components/AbstractElements';
import TotalPrice from './TotalPrice';
import {toast} from 'react-toastify';
import {selectLoginToken} from "../../ReduxToolkit/Slices/LoginSlice";
import {
    selectCart,
    selectNewCartProduct, selectSellTotal,
    selectTotal,
    setCart,
    setNewCartProduct
} from "../../ReduxToolkit/Slices/CartSlice";

const ItemCart = () => {
    // const [total, setTotal] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {product} = useSelector((state) => state.AddToCartReducer);

    const dispatch = useDispatch();
    const {symbol, currencyValue} = useSelector((state) => state.CurrencyReducer);

    let loginToken = useSelector(selectLoginToken);
    let newCartProduct = useSelector(selectNewCartProduct);
    let cart = useSelector(selectCart);
    let total = useSelector(selectTotal);


    useEffect(() => {
        if (Object.keys(loginToken).length === 0) {
            dispatch(setCart([]))
        } else {
            fetch(`${APICallUrl}/api/get-card`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Authorization: `Bearer ${loginToken.token}`
                },
            })
                .then((res) => res.json()).then((res) => {
                if (res.error === true) {
                    dispatch(setCart([]))
                }
                dispatch(setCart(res))
                // console.log(res, "RES")
            })
                .catch((error) => {
                    // Handle general fetch error
                    console.error('Failed to get Cart', error);
                });
        }

    }, [loginToken, newCartProduct]);


    // const getTotalPrice = () => {
    //     let addPrice = 0;
    //     !(cart?.error) && cart?.forEach((el) => {
    //         const price = el?.product?.front_sale_price !== null && el?.product?.front_sale_price !== undefined && el?.product?.price > el?.product?.front_sale_price
    //             ? el?.product?.front_sale_price * (el?.qty > el?.product?.quantity ? el?.product?.quantity : el?.qty)
    //             : el?.product?.price * (el?.qty > el?.product?.quantity ? el?.product.quantity : el?.qty);
    //         addPrice += parseFloat(price);
    //     });
    //     // console.log(addPrice, "addPrice");
    //     return addPrice.toFixed(2);
    // };
    const isOpen = () => {
        setIsCartOpen(!isCartOpen);
    };
    const removeProduct = (product_id) => {
        fetch(`${APICallUrl}/api/remove-from-card`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                Authorization: `Bearer ${loginToken.token}`
            },
            body: JSON.stringify({
                "id": product_id
            })
        })
            .then((res) => res.json()).then((res) => {
            if (res.success === true) {
                fetch(`${APICallUrl}/api/get-card`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        Authorization: `Bearer ${loginToken.token}`
                    },
                })
                    .then((res) => res.json()).then((res) => {
                    if (res.error === true) {
                        dispatch(setCart([]))
                    }
                    dispatch(setCart(res))
                    toast.error('Successfully Remove Product', {
                        position: toast.POSITION.BOTTOM_LEFT,
                        autoClose: 1000
                    });
                })
                    .catch((error) => {
                        console.error('Failed to get Cart', error);
                    });
            }
        })
            .catch((error) => {
                // Handle general fetch error
                console.error('Failed to Delete Item', error);
            });
    };

    return (
        <li className={`onhover-dropdown cart-dropdown${isCartOpen ? ' show' : ''}`}>
            {/*<Btn*/}
            {/*    attrBtn={{*/}
            {/*      type: 'button',*/}
            {/*      className: 'btn-solid-default btn-spacing',*/}
            {/*      onClick: () => isOpen(),*/}
            {/*    }}*/}
            {/*>*/}
            {/*  */}
            {/*</Btn>*/}
            <div className="cart-media">
                <ShoppingCart/>
                {/*<span>*/}
                {/*  {symbol}*/}
                {/*  {(getTotalPrice() * currencyValue).toFixed(2)}*/}
                {/*</span>*/}
            </div>
            <div className='onhover-div'>
                <div className='cart-menu'>
                    <div className='cart-title'>
                        <h6>
                            <ShoppingBag/>
                            {cart.length === 0 || cart.length === undefined ?
                                "" : <span className='label label-theme rounded-pill'>{cart?.length}</span>}
                        </h6>
                        <span className='d-md-none d-block' onClick={() => isOpen()}>
              <i className='fas fa-arrow-right back-cart'></i>
            </span>
                    </div>
                    <ul style={{overflowY: 'auto', maxHeight: '300px'}}>
                        {cart?.length > 0 ? (
                            cart?.map((item) => {
                                // console.log(item, "ITEM")

                                return (
                                    <li key={item.id}>
                                        <Media>
                                            <img src={`${APICallUrl}/storage/${item?.product?.image}`}
                                                 className='img-fluid'
                                                 alt={item?.product?.name}/>
                                            <Media body>
                                                <h6>{item?.product?.name}</h6>
                                                <div className='qty-with-price'>
                                                    <span>
                                                        ${(item?.product?.front_sale_price !== null || undefined) && (item?.product?.price > item?.product?.front_sale_price) ? item?.product?.front_sale_price.toFixed(2) : item?.product?.price.toFixed(2)}</span>
                                                    <span>
                          <Input type='number' className='form-control'
                                 // defaultValue={item.qty > item.product.quantity ? item.product.quantity : item.qty}
                                 value={item.qty > item.product.quantity ? item.product.quantity : item.qty}
                                 min={1}
                                 max={item.product.quantity}
                                 onChange={(e) => {
                                     const value = parseInt(e.target.value);
                                     // console.log(value, "value")
                                     if (isNaN(value)) {
                                         // If the entered value is not a number, set it to the minimum value
                                         e.target.value = 1;
                                     } else if (value < 1) {
                                         // If the entered value is less than 1, set it to the minimum value
                                         e.target.value = 1;
                                         fetch(`${APICallUrl}/api/update-cart-data`, {
                                             method: 'PUT',
                                             headers: {
                                                 "Content-Type": "application/json;charset=UTF-8",
                                                 Authorization: `Bearer ${loginToken.token}`
                                             },
                                             body: JSON.stringify({
                                                 "id": item?.id,
                                                 "qty": 1
                                             }),
                                         })
                                             .then((res) => res.json()).then((res) => {
                                             dispatch(setNewCartProduct(res))
                                         })
                                             .catch((error) => {
                                                 // Handle general fetch error
                                                 console.error('Failed to update to cart', error);
                                             });
                                     } else if (value > item.product.quantity) {

                                         // If the entered value is greater than the maximum quantity, set it to the maximum value
                                         e.target.value = item.product.quantity;
                                         fetch(`${APICallUrl}/api/update-cart-data`, {
                                             method: 'PUT',
                                             headers: {
                                                 "Content-Type": "application/json;charset=UTF-8",
                                                 Authorization: `Bearer ${loginToken.token}`
                                             },
                                             body: JSON.stringify({
                                                 "id": item?.id,
                                                 "qty": item?.product?.quantity
                                             }),
                                         })
                                             .then((res) => res.json()).then((res) => {

                                             dispatch(setNewCartProduct(res))

                                             toast.warning(`There are ${item.product.quantity} items in stock.`, {
                                                 position: toast.POSITION.BOTTOM_LEFT,
                                                 autoClose: 2000
                                             });
                                         })
                                             .catch((error) => {
                                                 // Handle general fetch error
                                                 console.error('Failed to update to cart', error);
                                             });
                                     } else {
                                         fetch(`${APICallUrl}/api/update-cart-data`, {
                                             method: 'PUT',
                                             headers: {
                                                 "Content-Type": "application/json;charset=UTF-8",
                                                 Authorization: `Bearer ${loginToken.token}`
                                             },
                                             body: JSON.stringify({
                                                 "id": item?.id,
                                                 "qty": e.target.value
                                             }),
                                         })
                                             .then((res) => res.json()).then((res) => {
                                             dispatch(setNewCartProduct(res));
                                         })
                                             .catch((error) => {
                                                 // Handle general fetch error
                                                 console.error('Failed to update to cart', error);
                                             });
                                     }
                                 }}
                          />
                          </span>
                                                </div>
                                            </Media>
                                            <Btn
                                                attrBtn={{
                                                    type: 'button',
                                                    className: 'btn-close d-block',
                                                    onClick: () => removeProduct(item.id),
                                                }}>
                                                <i className='fas fa-times' style={{color: "var(--theme-color)"}}></i>
                                            </Btn>
                                        </Media>
                                    </li>
                                );
                            })
                        ) : (
                            <li>
                                <img src={`${CommonPath}/cartEmpty.png`} className='img-fluid' alt='cartEmpty'/>
                            </li>
                        )}
                    </ul>
                </div>
                <TotalPrice total={total}/>
            </div>
        </li>
    );
};
export default ItemCart;
