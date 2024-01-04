import React from 'react'
import chartUp from '../../assets/chart-up.svg';
import chartDown from '../../assets/chart-down.svg';
import { RotatingLines } from 'react-loader-spinner';

function TableCoin({ coins, isLoading }) {
    return (
        <div>
            {isLoading ? (
                <div className='d-flex justify-content-center'>
                    <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="grey"
                        strokeWidth="4"
                        strokeColor='#9EC8B9'
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                    />
                </div>
            ) :
                <table className='w-100'>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>Total Volume</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {coins.map(coin => (
                            <TableRow coin={coin} key={coin.id} />
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default TableCoin;

const TableRow = ({ coin }) => {
    const { image,
        name,
        symbol,
        current_price,
        price_change_percentage_24h,
        total_volume } = coin;

    return (
        <tr>
            <td>
                <img src={image} alt={symbol} style={{ width: '40px' }} />
                <span>{symbol.toUpperCase()}</span>
            </td>
            <td>{name}</td>
            <td>{current_price.toLocaleString()}</td>
            <td>{price_change_percentage_24h.toFixed(2)}%</td>
            <td>{total_volume}</td>
            <td>
                <img src={coin.price_change_percentage_24h > 0 ? chartUp : chartDown}
                    alt="" />
            </td>
        </tr>
    )
}
