import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import mockdata from "../mockdata.json"
import { orderData } from './Store/OrderSlice';


const Home = () => {
    let ItemData = useSelector((state) => state.order.data);
    console.log(ItemData.food)

    let dispatch = useDispatch();

    dispatch(orderData(mockdata))


    return (
        <div className='flex flex-wrap gap-4 m-10 font-xxl font-bold  justify-center'>

            {/* {

                ItemData.food.map((item) => {

                    return <div className=' border border-2 justify-center align-center'>

                        <div>{<img src={item.image} style={{ width: "300px", height: "250px" }} />}</div>
                        <div className=''>{item.name}</div>
                        <div>Price:{item.price}</div>
                    </div>
                })



            } */}

        </div>
    )
}

export default Home