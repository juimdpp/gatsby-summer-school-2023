import * as React from "react";

const Banner = ({data, isHome}) => {
    return (
        <div className="site-head"
        style={{
            ...(data.cover_image &&
                {
                backgroundImage: `url(${data.cover_image})`,
            }),
        }}>
            {isHome ? (
                <div className="site-banner">
                    <h1 className="site-banner-title">
                        {data.title}
                    </h1>
                    <p className="site-banner-desc">
                        {data.description}
                    </p>
                    <p className="site-banner-desc">
                        {data.date}
                    </p>
                    <p className="site-banner-desc">
                        {data.location}
                    </p>
                </div>
            ) : null}
        </div>
    )
}

export default Banner;