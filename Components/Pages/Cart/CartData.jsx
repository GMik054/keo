import React, {useEffect} from 'react';
import {Col, Table} from 'reactstrap';
import {action, CommonPath, image, Prices, productname, quentityname, Total} from '../../Constant';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {Input} from 'reactstrap';
import {deleteProduct} from '../../../Utils';
import MobileViewCartData from './MobileViewCartData';
import {Btn} from "../../AbstractElements";

const CartData = ({cartData, setTotalMrp}) => {
        const {quantity} = useSelector((state) => state.AddToCartReducer);
        const dispatch = useDispatch();

        const handleQtyChange = (qty, id, price) => {

            dispatch({type: 'QUANTITY', payload: {qty, id, price}});
        };

        useEffect(() => {
            setTotalMrp(() => {
                let total = 0;
                Object.keys(quantity).forEach((item) => {
                    total += quantity[item].qty * quantity[item].price;
                });
                return total;
            });
        }, [quantity]);

        const removeProduct = (product) => {
            deleteProduct(`${process.env.API_URL}remove/cart/${product.id}`).then((res) => {
                dispatch({type: 'ADDTOCART', payload: res?.data});
            });
            toast.success('Successfully Remove Product');
        };

        return (
            <Col md='12'  xl='7' xxl='8' className='table-responsive'>
                <Table className='cart-table'>
                    {/*<thead>*/}
                    {/*  <tr className='table-head'>*/}
                    {/*    <th scope='col'>{image}</th>*/}
                    {/*    <th scope='col'>{productname}</th>*/}
                    {/*    <th scope='col'>{Prices}</th>*/}
                    {/*    <th scope='col'>{quentityname}</th>*/}
                    {/*    <th scope='col'>{action}</th>*/}
                    {/*    <th scope='col'>{Total}</th>*/}
                    {/*  </tr>*/}
                    {/*</thead>*/}
                    <tbody>
                    {cartData &&
                        cartData.map((elem, i) => {
                            console.log(quantity[elem.id]?.qty ? quantity[elem.id]?.qty : 1)

                            return (
                                <tr key={elem.id}>
                                    <td >
                                        <a>
                                            {elem?.images?.slice(0, 1).map((item, i) => {
                                                return <img src={`${CommonPath}/${item.src}`} key={i} alt='cart'/>;
                                            })}
                                        </a>
                                    </td>
                                    <MobileViewCartData elem={elem} handleQtyChange={handleQtyChange}
                                                        removeProduct={removeProduct} quantity={quantity}/>
                                    {/*<td>*/}
                                    {/*  <h2>${elem.price}</h2>*/}
                                    {/*</td>*/}
                                    <td>
                                        <div className='qty-box' style={{display: 'flex', justifyContent: "center"}}>
                                            {/*<div style={{display: 'flex', justifyContent: "center"}}>*/}

                                            {/*    <h6 className='product-title product-title-2 d-block'*/}
                                            {/*        style={{marginRight: "10px"}}>QTNY: </h6>*/}

                                            {/*    <div className='input-group'>*/}
                                            {/*        <Input*/}
                                            {/*            type='number'*/}
                                            {/*            name='quantity'*/}
                                            {/*            value={quantity[elem.id]?.qty ? quantity[elem.id]?.qty : 1}*/}
                                            {/*            min={1}*/}
                                            {/*            className='form-control input-number'*/}
                                            {/*            onChange={(e) => handleQtyChange(e.target.value, elem.id, elem.price)}*/}
                                            {/*        />*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <h6 className='product-title product-title-2 d-block'
                                                style={{marginRight: "10px"}}>QTNY: </h6>
                                            <div id='selectSize'
                                                 className='addeffect-section product-description border-product'
                                                 style={{paddingBottom:"0"}}>

                                                <div className='qty-box'
                                                     style={{border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "8px"}}>
                                                    <div className='input-group' style={{display: "flex"}}><span
                                                        className='input-group-prepend'>
            <Btn
                attrBtn={{
                    type: 'button',
                    className: 'quantity-left-minus btn-right-0',
                    onClick: (e) => handleQtyChange(quantity[elem.id]?.qty ? Number(quantity[elem.id]?.qty - 1) : 1, elem.id, elem.price)
                }}>
              <i className='fas fa-minus'></i>
            </Btn>
          </span><Input type='text' name='quantity' className='form-control input-number' min={1}
                        value={quantity[elem.id]?.qty ? quantity[elem.id]?.qty : 1}
                        onChange={(e) => handleQtyChange(e.target.value, elem.id, elem.price)}
                                                    /><span
                                                        className='input-group-prepend'>
            <Btn
                attrBtn={{
                    type: 'button',
                    className: 'quantity-right-plus btn-left-0',

                    onClick: (e) => {
                        handleQtyChange(quantity[elem.id]?.qty ? Number(quantity[elem.id]?.qty + 1) : 1 + 1, elem.id, elem.price)
                    }
                }}>
              <i className='fas fa-plus'></i>
            </Btn></span></div>
                                                </div>
                                                <h4 style={{paddingTop:"10px"}}>${elem.price}</h4>
                                            </div>

                                        </div>
                                        <h2 className='show-td-display'>Total: ${quantity[elem.id]?.qty && quantity[elem.id]?.qty ? elem?.price * quantity[elem.id]?.qty : elem.price}</h2>

                                    </td>
                                    {/*<td>*/}
                                    {/*  <a href='#javascript' onClick={() => removeProduct(elem)}>*/}
                                    {/*    <i className='fas fa-times'></i>*/}
                                    {/*  </a>*/}
                                    {/*</td>*/}
                                    <td className="td-display-none">
                                        <h2 >${quantity[elem.id]?.qty && quantity[elem.id]?.qty ? elem?.price * quantity[elem.id]?.qty : elem.price}</h2>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Col>
        );
    }
;

export default CartData;
