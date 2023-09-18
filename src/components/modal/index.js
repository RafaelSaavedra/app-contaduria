
function Modal(){

<div className="modal-container">
<img className="modal-close" src={close} onClick={onClickCerrar} alt="Cerrar" ></img>
<div className="modal-prod">
    {products.map(product => {
    return <>
            <h1>{product.name}</h1>
        </>
    })}
</div>
</div>

}