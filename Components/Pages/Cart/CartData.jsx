import React from 'react';
import {Col, Row} from 'reactstrap';
import {APICallUrl} from '../../Constant';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {Input} from 'reactstrap';
import {Btn} from "../../AbstractElements";
import {selectCart, setCart, setNewCartProduct} from "../../../ReduxToolkit/Slices/CartSlice";
import {selectLoginToken} from "../../../ReduxToolkit/Slices/LoginSlice";

const CartData = () => {
        const dispatch = useDispatch();
        let cart = useSelector(selectCart);
        const handleQtyChange = (e, elem) => {

            const value = parseInt(e.target.value);
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
                        "id": elem?.id,
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
            } else if (value > elem.product.quantity) {
                // If the entered value is greater than the maximum quantity, set it to the maximum value
                e.target.value = elem.product.quantity;
                fetch(`${APICallUrl}/api/update-cart-data`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        Authorization: `Bearer ${loginToken.token}`
                    },
                    body: JSON.stringify({
                        "id": elem?.id,
                        "qty": elem?.product?.quantity
                    }),
                })
                    .then((res) => res.json()).then((res) => {
                    toast.warning(`There are ${elem.product.quantity} items in stock.`, {
                        position: toast.POSITION.BOTTOM_LEFT,
                        autoClose: 2000
                    });
                    dispatch(setNewCartProduct(res))
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
                        "id": elem?.id,
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

        };

        let loginToken = useSelector(selectLoginToken);
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
            <Col md='12' xl='7' xxl='8' className=''>
                <Row className=' cart-table-row'>

                    {cart.length !== 0 &&
                        cart.map((elem, i) => {
                            console.log(elem, "elem")

                            return (
                                <Col key={i} lg='12'>
                                    <Row className="cart-row">
                                        <Col lg='3' md='12'>
                                            <img src={`${APICallUrl}/storage/${elem?.product?.image}`}
                                                 alt={elem?.product?.name} title={elem?.product?.name}/>
                                        </Col>
                                        <Col md='12' className="col-display-mobile">
                                            <Btn
                                                style={{background: "none", fontSize: "18px"}}
                                                attrBtn={{
                                                    type: 'button',
                                                    className: 'btn-close d-block',
                                                    onClick: () => removeProduct(elem?.id),
                                                }}>
                                                <i className='fas fa-times' style={{color: "var(--theme-color)"}}></i>
                                            </Btn>
                                        </Col>
                                        <Col lg='3' md='12' className="td-left-center">
                                            <div style={{display: "grid", rowGap: "8px"}}>
                                                <h3>{elem?.product?.name}</h3>
                                                <div style={{fontSize: "14px"}}><span
                                                    className="font-light ml-1">Model</span> <span
                                                    className="font-bold ml-1"># {elem?.product?.sku}</span></div>
                                                <div style={{fontSize: "14px"}}><span className="font-light ml-1">Part Number</span>
                                                    <span
                                                        className="font-bold ml-1"># {elem?.product?.eclipse_number}</span>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg='3' md='6' xs='6' style={{display: 'flex', alignItems: "center"}}>
                                            <div className='qty-box' style={{display: 'flex', justifyContent: "center"}}>

                                                <h6 className='product-title product-title-2 d-block'
                                                    style={{marginRight: "10px"}}>QTNY: </h6>
                                                <div id='selectSize'
                                                     className='addeffect-section product-description border-product'
                                                     style={{paddingBottom: "0"}}>
                                                    <div className='qty-box'
                                                         style={{
                                                             border: "1px solid rgba(0, 0, 0, 0.1)",
                                                             borderRadius: "8px"
                                                         }}>
                                                        <div className='input-group qty-cart-page'
                                                             style={{display: "flex"}}><span
                                                            className='input-group-prepend'>
                                                          <Btn
                                                              attrBtn={{
                                                                  type: "button",
                                                                  className: "quantity-left-minus btn-right-0",
                                                                  onClick: () => handleQtyChange({target: {value: (elem?.qty > elem?.product?.quantity ? elem?.product?.quantity : elem?.qty) - 1}}, elem)
                                                              }}
                                                          >
                                <i className="fas fa-minus"></i>
                              </Btn></span>
                                                            <Input
                                                                type='number' name='quantity'
                                                                className='form-control input-number'
                                                                min={1}
                                                                max={elem?.product?.quantity}
                                                                value={elem?.qty > elem?.product?.quantity ? elem?.product?.quantity : elem?.qty}
                                                                defaultValue={elem?.qty > elem?.product?.quantity ? elem?.product?.quantity : elem?.qty}
                                                                onChange={e => handleQtyChange(e, elem)}

                                                            />
                                                            <span
                                                                className='input-group-prepend'><Btn
                                                                attrBtn={{
                                                                    type: "button",
                                                                    className: "quantity-right-plus btn-left-0",
                                                                    onClick: () => handleQtyChange({target: {value: (elem?.qty > elem?.product?.quantity ? elem?.product?.quantity : elem?.qty) + 1}}, elem)
                                                                }}
                                                            >
                                <i className="fas fa-plus"></i>
                              </Btn></span></div>
                                                    </div>
                                                    <h4 style={{paddingTop: "10px"}}> ${(elem?.product?.front_sale_price !== null || undefined) && (elem?.product?.price > elem?.product?.front_sale_price) ? elem?.product?.front_sale_price.toFixed(2) : elem?.product?.price.toFixed(2)}</h4>
                                                </div>

                                            </div>


                                        </Col>
                                        <Col lg='2' md='6' xs='6' className="td-display-none"
                                             style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                                            <h2 className='price-detail'>
                                                ${(elem?.product?.front_sale_price !== null || undefined) && (elem?.product?.price > elem?.product?.front_sale_price) ? (elem?.product?.front_sale_price * (elem?.qty > elem?.product?.quantity ? elem?.product?.quantity : elem?.qty)).toFixed(2) : (elem?.product?.price * (elem?.qty > elem?.product?.quantity ? elem?.product?.quantity : elem?.qty)).toFixed(2)}
                                                {(elem?.product?.front_sale_price !== null || undefined) && (elem?.product?.price > elem?.product?.front_sale_price) ?
                                                    <span ><del style={{color:"var(--theme-color)",fontSize:"16px"}}>${(elem?.product?.price * (elem?.qty > elem?.product.quantity ? elem?.product?.quantity : elem?.qty)).toFixed(2)}</del></span> : ""}
                                            </h2>

                                        </Col>
                                        <Col lg='1' className="col-display">
                                            <Btn
                                                style={{background: "none", fontSize: "18px"}}
                                                attrBtn={{
                                                    type: 'button',
                                                    className: 'btn-close d-block',
                                                    onClick: () => removeProduct(elem.id),
                                                }}>
                                                <i className='fas fa-times' style={{color: "var(--theme-color)"}}></i>
                                            </Btn>
                                        </Col>
                                    </Row>
                                </Col>
                            );
                        })}
                    {/*  <Table className='cart-table'>*/}
                    {/*      /!*<thead>*!/*/}
                    {/*      /!*  <tr className='table-head'>*!/*/}
                    {/*      /!*    <th scope='col'>{image}</th>*!/*/}
                    {/*      /!*    <th scope='col'>{productname}</th>*!/*/}
                    {/*      /!*    <th scope='col'>{Prices}</th>*!/*/}
                    {/*      /!*    <th scope='col'>{quentityname}</th>*!/*/}
                    {/*      /!*    <th scope='col'>{action}</th>*!/*/}
                    {/*      /!*    <th scope='col'>{Total}</th>*!/*/}
                    {/*      /!*  </tr>*!/*/}
                    {/*      /!*</thead>*!/*/}
                    {/*      <tbody>*/}
                    {/*      {cart &&*/}
                    {/*          cart.map((elem, i) => {*/}
                    {/*              console.log(elem, "elem")*/}

                    {/*              return (*/}
                    {/*                  <tr key={i}>*/}

                    {/*                      <td>*/}
                    {/*                          <a>*/}
                    {/*                              <img src={`${APICallUrl}/storage/${elem?.product?.image}`}*/}
                    {/*                                   alt={elem.product.name}/>*/}
                    {/*                          </a>*/}
                    {/*                      </td>*/}
                    {/*                      <td className="td-left-center">*/}
                    {/*                          <div style={{display: "grid", rowGap: "8px"}}>*/}
                    {/*                              <h3>{elem?.product?.name}</h3>*/}
                    {/*                              <div><span className="font-light ml-1">Model</span> <span*/}
                    {/*                                  className="font-bold ml-1"># {elem?.product?.sku}</span></div>*/}
                    {/*                              <div><span className="font-light ml-1">Part Number</span> <span*/}
                    {/*                                  className="font-bold ml-1"># {elem?.product?.eclipse_number}</span>*/}
                    {/*                              </div>*/}
                    {/*                          </div>*/}
                    {/*                      </td>*/}
                    {/*                      /!*<MobileViewCartData elem={elem} handleQtyChange={handleQtyChange}*!/*/}
                    {/*                      /!*                    removeProduct={removeProduct} quantity={quantity}/>*!/*/}
                    {/*                      /!*<td>*!/*/}
                    {/*                      /!*  <h2>${elem.price}</h2>*!/*/}
                    {/*                      /!*</td>*!/*/}
                    {/*                      <td>*/}
                    {/*                          <div className='qty-box' style={{display: 'flex', justifyContent: "center"}}>*/}
                    {/*                              /!*<div style={{display: 'flex', justifyContent: "center"}}>*!/*/}

                    {/*                              /!*    <h6 className='product-title product-title-2 d-block'*!/*/}
                    {/*                              /!*        style={{marginRight: "10px"}}>QTNY: </h6>*!/*/}

                    {/*                              /!*    <div className='input-group'>*!/*/}
                    {/*                              /!*        <Input*!/*/}
                    {/*                              /!*            type='number'*!/*/}
                    {/*                              /!*            name='quantity'*!/*/}
                    {/*                              /!*            value={quantity[elem.id]?.qty ? quantity[elem.id]?.qty : 1}*!/*/}
                    {/*                              /!*            min={1}*!/*/}
                    {/*                              /!*            className='form-control input-number'*!/*/}
                    {/*                              /!*            onChange={(e) => handleQtyChange(e.target.value, elem.id, elem.price)}*!/*/}
                    {/*                              /!*        />*!/*/}
                    {/*                              /!*    </div>*!/*/}
                    {/*                              /!*</div>*!/*/}
                    {/*                              <h6 className='product-title product-title-2 d-block'*/}
                    {/*                                  style={{marginRight: "10px"}}>QTNY: </h6>*/}
                    {/*                              <div id='selectSize'*/}
                    {/*                                   className='addeffect-section product-description border-product'*/}
                    {/*                                   style={{paddingBottom: "0"}}>*/}
                    {/*                                  <div className='qty-box'*/}
                    {/*                                       style={{*/}
                    {/*                                           border: "1px solid rgba(0, 0, 0, 0.1)",*/}
                    {/*                                           borderRadius: "8px"*/}
                    {/*                                       }}>*/}
                    {/*                                      <div className='input-group' style={{display: "flex"}}><span*/}
                    {/*                                          className='input-group-prepend'>*/}
                    {/*                                            <Btn*/}
                    {/*                                                attrBtn={{*/}
                    {/*                                                    type: "button",*/}
                    {/*                                                    className: "quantity-left-minus btn-right-0",*/}
                    {/*                                                    onClick: () => handleQtyChange({target: {value: elem.qty - 1}}, elem)*/}
                    {/*                                                }}*/}
                    {/*                                            >*/}
                    {/*                  <i className="fas fa-minus"></i>*/}
                    {/*                </Btn></span>*/}
                    {/*                                          <Input*/}
                    {/*                                              type='text' name='quantity'*/}
                    {/*                                              className='form-control input-number'*/}
                    {/*                                              min={1}*/}
                    {/*                                              max={elem?.product?.quantity}*/}
                    {/*                                              defaultValue={elem?.qty}*/}
                    {/*                                              onChange={e => handleQtyChange(e, elem)}*/}
                    {/*                                          /><span*/}
                    {/*                                              className='input-group-prepend'>*/}
                    {/*<Btn*/}
                    {/*    attrBtn={{*/}
                    {/*        type: "button",*/}
                    {/*        className: "quantity-right-plus btn-left-0",*/}
                    {/*        onClick: () => handleQtyChange({target: {value: elem.qty + 1}}, elem)*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*                  <i className="fas fa-plus"></i>*/}
                    {/*                </Btn></span></div>*/}
                    {/*                                  </div>*/}
                    {/*                                  <h4 style={{paddingTop: "10px"}}> ${(elem?.product?.front_sale_price !== null || undefined) && (elem?.product?.price > elem?.product?.front_sale_price) ? elem?.product?.front_sale_price.toFixed(2) : elem?.product?.price.toFixed(2)}</h4>*/}
                    {/*                              </div>*/}

                    {/*                          </div>*/}
                    {/*                          <h2 className='show-td-display'>Total:*/}
                    {/*                              ${(elem?.product?.front_sale_price !== null || undefined) && (elem?.product?.price > elem?.product?.front_sale_price) ? (elem?.product?.front_sale_price * elem?.qty).toFixed(2) : (elem?.product?.price * elem?.qty).toFixed(2)}*/}
                    {/*                          </h2>*/}

                    {/*                      </td>*/}
                    {/*                      /!*<td>*!/*/}
                    {/*                      /!*  <a href='#javascript' onClick={() => removeProduct(elem)}>*!/*/}
                    {/*                      /!*    <i className='fas fa-times'></i>*!/*/}
                    {/*                      /!*  </a>*!/*/}
                    {/*                      /!*</td>*!/*/}
                    {/*                      <td className="td-display-none">*/}
                    {/*                          <h2>*/}
                    {/*                              /!*${quantity[elem.id]?.qty && quantity[elem.id]?.qty ? elem?.price * quantity[elem.id]?.qty : elem.price}*!/*/}
                    {/*                              ${(elem?.product?.front_sale_price !== null || undefined) && (elem?.product?.price > elem?.product?.front_sale_price) ? (elem?.product?.front_sale_price * elem?.qty).toFixed(2) : (elem?.product?.price * elem?.qty).toFixed(2)}*/}
                    {/*                              {(elem?.product?.front_sale_price !== null || undefined) && (elem?.product?.price > elem?.product?.front_sale_price) ?*/}
                    {/*                                  <span><del>${(elem?.product?.price* elem?.qty).toFixed(2)}</del></span> : ""}*/}
                    {/*                          </h2>*/}
                    {/*                      </td>*/}
                    {/*                  </tr>*/}
                    {/*              );*/}
                    {/*          })}*/}
                    {/*      </tbody>*/}
                    {/*  </Table>*/}
                </Row>
            </Col>
        );
    }
;

export default CartData;
