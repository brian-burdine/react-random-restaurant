function Footer () {
    return (
        <footer>
            <div 
              className="container border-top border-solid mt-3 mb-1" 
              id="site-footer"
            >
                <div className="row justify-content-between">
                    <div className="col-3">
                        <p>everything under the BUN</p>
                        <p>348 E Main St</p>
                        <p>Lexington, KY 40507</p>
                    </div>
                    <div className="col-3">
                        <p>Hours of Operation</p>
                        <p>Monday - Friday: 8:01 am - 7:59 pm</p>
                        <p>Saturday - Sunday: 11:11 am - 11:59 pm</p>
                    </div>
                </div>
                <div className="row text-center">
                    <span className="mx-auto">2023 by Brian Burdine</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;