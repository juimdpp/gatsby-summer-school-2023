import * as React from "react";
import {AnchorLink} from 'gatsby-plugin-anchor-links';

const Header = ({data, isTop}) => {
    return (
        <div className="header">
            <div className="header-left">
                <a href={data.snu_link}>
                    <img
                        className="header-logo"
                        src={isTop ? data.snu_logo:"/images/snu-white.png"}
                        alt={data.snu_title}
                    />
                </a>
                <a href={data.aiis_link}>
                    <img
                        className="header-logo"
                        src={isTop ? data.aiis_logo : "/images/aiis-white.png"}
                        alt={data.aiis_title}
                    />
                </a>
            </div>
            <div className="header-center">
                <AnchorLink to="/#day1" className="header-link">Wednesday, Aug. 30</AnchorLink>
                <div className="header-divider">{"|"}</div>
                <AnchorLink to="/#day2" className="header-link">Thursday, Aug. 31</AnchorLink>
            </div>
            <div className="header-right">
                <AnchorLink to="/#contact" className="header-link">Contact</AnchorLink>
            </div>
        </div>
    //     <div
    //     className="header"
    // >
    //     <div className="container">
    //         <div className="site-mast">
    //             <div className="site-mast-left">
    //                 <a href={data.snu_link}>
    //                     <img
    //                         className="site-logo"
    //                         src={data.snu_logo}
    //                         alt={data.snu_title}
    //                     />
    //                 </a>
    //                 <a href={data.aiis_link}>
    //                     <img
    //                         className="site-logo"
    //                         src={data.aiis_logo}
    //                         alt={data.aiis_title}
    //                     />
    //                 </a>
    //             </div>
    //             <div className="site-mast-center">
    //                 <AnchorLink to="/#day1">Wednesday, Aug. 30</AnchorLink>
    //                 <AnchorLink to="/#day2">Thursday, Aug. 31</AnchorLink>
    //                 <AnchorLink to="/#contact">Contact</AnchorLink>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
}

export default Header;