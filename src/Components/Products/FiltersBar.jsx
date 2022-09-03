export default function FiltersBar({setCategory:_setCategory, setOrderBy: _setOrderBy, currentCategory}){
    return(
        <div className="d-flex justify-content-between align-items-center mb-5 p-3 rounded" style={{backgroundColor:'#EBEBEB'}}>
            <div className="d-flex justify-content-between w-50">
                <button className={currentCategory === 'all' ? 'btn btn-info' : 'btn btn-outline-info'} value="all" onClick={_setCategory}>All</button>
                <button className={currentCategory === 'electronics' ? 'btn btn-info' : 'btn btn-outline-info'} value="electronics" onClick={_setCategory}>Electronics</button>
                <button className={currentCategory === `jewelery` ? 'btn btn-info' : 'btn btn-outline-info'} value="jewelery" onClick={_setCategory}>Jewelery</button>
                <button className={currentCategory === `men'sclothing` ? 'btn btn-info' : 'btn btn-outline-info'} value="men'sclothing" onClick={_setCategory}>Men's Clothing</button>
                <button className={currentCategory === `women'sclothing` ? 'btn btn-info' : 'btn btn-outline-info'} value="women'sclothing" onClick={_setCategory}>Women's Clothing</button>
            </div>
            <div className="d-flex justify-content-end w-25">
               <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Order By</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={_setOrderBy}>
                        <option value="options">Options</option>
                        <option value="pricecheap">Cheapest</option>
                        <option value="priceexpensive">Expensivest</option>
                        <option value="rating">Rate</option>                        
                    </select>
                </div>
            </div>
        </div>
    )
}