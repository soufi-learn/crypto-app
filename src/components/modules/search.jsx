import React, { useEffect, useState } from 'react'
import { searchCoin } from '../services/cryptoAPI';
import { RotatingLines } from 'react-loader-spinner';
import '../../css/search.css';

function Search({ currency, setCurrency }) {
    const [text, setText] = useState('');
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showcoinsBox, setShowCoinsBox] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setCoins([]);
        if (!text) {
            setIsLoading(false);
            return;
        };

        const searchCoins = async () => {
            try {
                const response = await fetch(searchCoin(text), { signal: controller.signal });
                const data = await response.json();
                if (data.coins) {
                    setCoins(data.coins);
                    setIsLoading(false);
                } else {
                    alert(json.status.error);
                    setIsLoading(false);

                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    alert(error.message)
                    setIsLoading(false);
                }
            }
        }

        // start searching and show loading until data doesn't load
        setIsLoading(true);
        searchCoins();

        // cleanUp
        return () => {
            controller.abort();
        }

    }, [text]);

    // change currency price & hide coins list
    const changeCurrency = (e) => {
        setCurrency(e.target.value);
        setCoins([]);
        setText('')
    }

    const hideCoinsList = (e) => {
        setCoins([]);
        setText('')
    }

    return (
        <div className='search-wrapper'>
            <section className='search-controller-box'>
                <div>
                    <input type="text" value={text} placeholder='search...' className='form-control search-input' onChange={(e) => setText(e.target.value.trimStart())} onBlur={hideCoinsList} />
                    {(!!coins.length || isLoading || text) && (
                        <section className='coins-list-box rounded'>
                            <ul className='coins-list'>
                                {/* when getting data (show loading) */}
                                {isLoading && <div className='search-loading-box'>
                                    <RotatingLines
                                        visible={true}
                                        height="55"
                                        width="55"
                                        color="grey"
                                        strokeWidth="4"
                                        strokeColor='#9EC8B9'
                                        animationDuration="0.75"
                                        ariaLabel="rotating-lines-loading"
                                    />
                                </div>
                                }

                                {/* when coins doesn't exist in search */}
                                {!coins.length && text && !isLoading && (
                                    <h5 className='text-center'>No Coins!</h5>
                                )}

                                {coins.map(coin => (
                                    <li key={coin.id} className='coin-item'>
                                        <img src={coin.thumb} alt={coin.name} className='coin-thumb' />
                                        <p>{coin.name}</p>
                                    </li>)
                                )}
                            </ul>
                        </section>
                    )}
                </div>
                <select value={currency} className='form-select price-select' onChange={changeCurrency}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="jpy">JPY</option>
                </select>
            </section>


        </div>
    )
}

export default Search