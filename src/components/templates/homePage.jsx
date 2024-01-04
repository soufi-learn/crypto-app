import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/tableCoin';
import { getCoinList } from '../services/cryptoAPI';

function HomePage() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(getCoinList());
            const data = await response.json();
            setCoins(data);
        }

        getData()
    }, [])
    return (
        <div>
            <TableCoin coins={coins} />
        </div>
    )
}

export default HomePage
