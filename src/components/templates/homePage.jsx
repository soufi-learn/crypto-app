import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/tableCoin';
import { getCoinList } from '../services/cryptoAPI';
import Pagination from '../modules/pagination';
import Search from '../modules/search';

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('usd');

    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            try {
                const response = await fetch(getCoinList(page, currency));
                const data = await response.json();
                setCoins(data);
                setIsLoading(false);
            } catch (error) {
                alert('Somthing went wrong baby! 🤔')
            }
        }

        getData()
    }, [page, currency]);

    return (
        <div>
            <Search currency={currency} setCurrency={setCurrency} />
            <TableCoin coins={coins} isLoading={isLoading} />
            {!isLoading && <Pagination page={page} setPage={setPage} />}
        </div>
    )
}

export default HomePage
