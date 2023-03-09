import SiteBar from "./SiteBar";
import SiteLogo from "./SiteLogo";

function SiteHeader () {
    return (
        <header>
            <div className="container justify-content-center" id="site-header">
                <SiteLogo />
                <SiteBar />
            </div>
        </header>
    );
}

export default SiteHeader;