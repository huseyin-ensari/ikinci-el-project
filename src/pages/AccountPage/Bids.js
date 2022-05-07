import React from 'react';
import { BidCard } from '../../components';

const Bids = ({ bids }) => {
    return (
        <>
            {bids.reverse().map((bid) => (
                <BidCard bid={bid} key={bid.id} />
            ))}
        </>
    );
};

export default Bids;
