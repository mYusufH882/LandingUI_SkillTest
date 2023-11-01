const Card = ({ title, description, image }) => {
    return (
        <div className="card mx-2 border">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-secondary">
                    <small>
                        {description != null ? description : "Tidak Ada Keterangan"}
                    </small>
                </p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-light text-secondary">Learn More...</a>
            </div>
        </div>
    )
}

export default Card