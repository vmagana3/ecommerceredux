export default function FiltersBar({setCategory:_setCategory}){
    return(
        <div className="d-flex justify-content-between align-items-center mb-5 p-3 rounded" style={{backgroundColor:'#EBEBEB'}}>
            <div className="d-flex justify-content-between w-50">
            <button className="btn btn-outline-info" value="all" onClick={_setCategory}>All</button>
                <button className="btn btn-outline-info" value="electronics" onClick={_setCategory}>Electronics</button>
                <button className="btn btn-outline-info" value="jewelery" onClick={_setCategory}>Jewelery</button>
                <button className="btn btn-outline-info" value="men'sclothing" onClick={_setCategory}>Men's Clothing</button>
                <button className="btn btn-outline-info" value="women'sclothing" onClick={_setCategory}>Women's Clothing</button>
            </div>
            <div className="d-flex justify-content-end w-25">
               <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Order By</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Options</option>
                        <option value="1">Price</option>
                        <option value="2">Rate</option>                        
                    </select>
                </div>
            </div>
        </div>
    )
}