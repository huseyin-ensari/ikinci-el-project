import React from 'react';
import { OfferCard } from '../../components';

const Offers = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <OfferCard
                    offers={product.offers}
                    product={product}
                    key={product.id}
                />
            ))}
        </>
    );
};

export default Offers;
