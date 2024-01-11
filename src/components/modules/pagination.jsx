import '../../css/pagination.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({ page, setPage }) => {
    const previousHandler = () => {
        if (page > 1) {
            setPage(page => page - 1);
        }
    }

    const nextHandler = () => {
        if (page < 20) {
            setPage(page => page + 1);
        }
    }

    return (
        <div className='pagination-wrapper'>
            <button onClick={previousHandler} className={`${page === 1 && 'disable-btn'} btn btn-outline-primary pagination-btn border border-primary`}><FaAngleDoubleLeft /></button>
            <p className={`${page === 1 && 'current-page'} page-number`} onClick={() => setPage(1)}>1</p>
            <p className={`${page === 2 && 'current-page'} page-number`} onClick={() => setPage(2)}>2</p>
            {page > 2 && page < 19 && (
                <>
                    <span>...</span>
                    <p className='current-page'>{page}</p>
                </>
            )}
            <span>...</span>
            <p className={`${page === 19 && 'current-page'} page-number`} onClick={() => setPage(19)}>19</p>
            <p className={`${page === 20 && 'current-page'} page-number`} onClick={() => setPage(20)}>20</p>
            <button onClick={nextHandler} className={`${page === 20 && 'disable-btn'} btn btn-outline-primary pagination-btn border border-primary`}><FaAngleDoubleRight /></button>
        </div>
    )
}

export default Pagination
