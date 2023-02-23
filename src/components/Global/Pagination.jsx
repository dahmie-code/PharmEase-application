import "bootstrap/dist/css/bootstrap.min.css";
import "../Product/ProductList.css";

const Pagination = ({productsPerPage, totalProducts, paginate, currentPage})=>{
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className="pagination justify-content-end">
                <li className= {`page-item ${currentPage ===1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={()=> paginate(currentPage -1)}>
                    Previous
                </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active': ''}`}>
                        <button className="page-link" onClick={()=> paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))
                }
                <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled': ''}`}>
                    <button className="page-link" onClick={()=> paginate(currentPage +1)}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;