import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/tableCoin';
import { getCoinList } from '../services/cryptoAPI';

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(getCoinList());
            const data = await response.json();
            setCoins(data);
            setIsLoading(false);
        }

        getData()
    }, [])
    return (
        <div>

            <TableCoin coins={coins} isLoading={isLoading} />
        </div>
    )
}

export default HomePage
