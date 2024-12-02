import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {

    const coffeeDetails = useLoaderData();
    // console.log(coffeeDetails);
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffeeDetails;

    return (
        <div className=' flex text-center justify-center'>
            <div className="card glass w-96">
                <figure>
                    <img
                        src={photo}
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p>{details}</p>
                    <p>{quantity}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add To!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;