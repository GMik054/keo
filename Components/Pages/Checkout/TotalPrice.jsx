import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TotalUSD } from '../../Constant';

const TotalPrice = ({ cartData }) => {
  const [total, setTotal] = useState(0);
  const { quantity } = useSelector((state) => state.AddToCartReducer);

  useEffect(() => {
    Object.keys(quantity).forEach((item) => {
      setTotal((prev) => prev + quantity[item]?.qty * quantity[item]?.price);
    });
  }, []);

  const getTotalPrice = () => {
    var addPrice = 0;
    const filterPrice =
      cartData &&
      cartData.map((el) => {
        return el.price;
      });
    filterPrice?.map((elem) => (addPrice += elem));
    return addPrice;
  };

  return (
    <div className='list-group-item d-flex lh-condensed justify-content-between align-items-center'>
      <h3 className='fw-bold'>Total</h3>
      <strong>${total > 1 ? total - 5 : getTotalPrice() - 5}</strong>
    </div>
  );
};

export default TotalPrice;
