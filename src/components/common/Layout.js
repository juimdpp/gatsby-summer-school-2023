import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Modal from "react-modal";
import { Header, Navigation, Banner } from ".";
import { useScrollYPosition } from 'react-use-scroll-position';
import config from "../../utils/siteConfig";

// Styles
import "../../styles/app.css";
import Schedule from "./Schedule";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */

Modal.setAppElement('#___gatsby');

const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const [open, setOpen] = useState(false);
    const scrollY = typeof window !== 'undefined' ? useScrollYPosition() : 0,
    isTop = scrollY !== 0;
    const setColor = () => {
        document.documentElement.style.setProperty('--header-bg', !isTop ? '#101012ff': 'white');
        document.documentElement.style.setProperty('--header-text', isTop ? '#101012ff': 'white');
    }

    useEffect(() => {
        setOpen(false);
      }, [location, scrollY]);
    useEffect(() => {
        setColor();
    }, [isTop])

    const headerData = data.headerJson;

    return <>
        {/* <Helmet>
            <html lang={site.lang} />
            <style type="text/css">{`${site.codeinjection_styles}`}</style>
            <body className={bodyClass} />
        </Helmet> */}

        <div className="viewport">
            <div className="viewport-top">
                <Header data={headerData} isTop={isTop}/>
                <Banner data={headerData} isHome={isHome}/>
            </div>
            <main className="viewport-middle">
                {/* All the main content gets inserted here, index.js, post.js */}
                {/* {children} */}
                <Schedule/>
            </main>

            {/* TODO: factor out as footer */}
            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            {/* <Link to="/">{site.title}</Link> © 2021 &mdash;
                            Published with{" "}
                            <a
                                className="site-foot-nav-item"
                                href="https://ghost.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ghost
                            </a> */}
                            주관: 서울대학교
                        </div>
                        {/* <div className="site-foot-nav-right">
                            <Navigation
                                data={site.navigation}
                                navClass="site-foot-nav-item"
                            />
                        </div> */}
                    </div>
                </footer>
            </div>
        </div>
    </>;
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`query GhostSettings
        {
            allGhostSettings {
                edges {
                    node {
                        ...GhostSettingsFields
                    }
                }
            }
            file(relativePath: {eq: "ghost-icon.png"}) {
                childImageSharp {
                    gatsbyImageData(width: 30, height: 30, layout: FIXED)
                }
            }
            headerJson {
                title
                description
                cover_image
                date
                location
                snu_logo
                snu_title
                snu_link
                aiis_logo
                aiis_title
                aiis_link
            }
}
`}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
