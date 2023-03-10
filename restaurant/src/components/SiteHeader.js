import SiteBar from "./SiteBar";
import SiteLogo from "./SiteLogo";

function SiteHeader () {
    return (
        <header>
            <div className="container text-center" id="site-header">
                <div className="row justify-content-center">
                    <SiteLogo />
                    <SiteBar />
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;