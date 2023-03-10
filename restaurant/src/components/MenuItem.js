function MenuItem ({ title, price, description, spicy_level }) {
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle text-muted">${price}</h6>
                    <p className="card-text">{description}</p>
                    <p
                        className={`card-text ${spicy_level > 0 ? "": "d-none"}`}
                    >
                        {`Spiciness: ${spicy_level}`}
                    </p>
                    <button className="btn btn-secondary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;