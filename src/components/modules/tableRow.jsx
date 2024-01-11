import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const TableRow = ({ coin }) => {
    const {
        image,
        name,
        symbol,
        current_price,
        price_change_percentage_24h,
        total_volume,
    } = coin;

    return (
        <tr>
            <td>
                <img src={image} alt={symbol} className="crypto-img" />
                <span className="crypto-symbol">{symbol.toUpperCase()}</span>
            </td>
            <td>{name}</td>
            <td>${current_price.toLocaleString()}</td>
            <td
                className={
                    price_change_percentage_24h > 0
                        ? "top-price-change"
                        : "down-price-change"
                }
            >
                {
                    price_change_percentage_24h > 0
                        ? <FaCaretUp />
                        : <FaCaretDown />
                }
                {price_change_percentage_24h.toFixed(2)}

                %
            </td>
            <td>${total_volume.toLocaleString()}</td>
            <td>
                <img
                    src={coin.price_change_percentage_24h > 0 ? chartUp : chartDown}
                    alt=""
                />
            </td>
        </tr>
    );
};

export default TableRow;
