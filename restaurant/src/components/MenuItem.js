function MenuItem ({ title, price, description, spice_level }) {
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle text-muted">${price}</h6>
                    <p className="card-text">{description}</p>
                    <p
                        className={`card-text ${spice_level > 0 ? "": "d-none"}`}
                    >
                        {`Spiciness: ${spice_level}`}
                    </p>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;