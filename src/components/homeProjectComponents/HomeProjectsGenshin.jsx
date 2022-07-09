import React from "react";
import styled from "styled-components";
import HomeProjectsDetailed from "./HomeProjectsDetailed";
import { motion } from "framer-motion";

//Images
import genshinImg1 from "../../assets/images/genshin-img1.png";
import genshinImg2 from "../../assets/images/genshin-img2.png";
import genshinImg3 from "../../assets/images/genshin-img3.png";
import genshinImg4 from "../../assets/images/genshin-img4.png";
import genshinImg5 from "../../assets/images/genshin-img5.png";
import genshinImg6 from "../../assets/images/genshin-img6.png";
import HomeProjectsDetailedIMG from "./HomeProjectsDetailedIMG";
import HomeProjectsDetailedContent from "./HomeProjectsDetailedContent";

const StyledHomeProjectsGenshin = styled(HomeProjectsDetailed)``;

// const IMG = styled.img`
//     width: 100%;
//     max-width: 700px;
// `;

// const Content = styled.p``;

const HomeProjectsGenshin = () => {
    return (
        <StyledHomeProjectsGenshin>
            <HomeProjectsDetailedContent>
                <a href="https://ty4coffee.thekima.com/" target="_blank">
                    <HomeProjectsDetailedIMG src={genshinImg1} />
                </a>
                <br />
                <a href="https://ty4coffee.thekima.com/" target="_blank">
                    Take me to the site!
                </a>
            </HomeProjectsDetailedContent>
            <HomeProjectsDetailedContent italicize>
                <p>
                    Started as a joke with friends. After months of work, it
                    happened.
                </p>
                <p>
                    This project runs on Gatsbyjs and is written in Typescript.
                    From buttons to animations to modals & gacha logic, all were
                    painstakingly designed from scratch. Enjoyed second of it!
                </p>
                <p>
                    It is now since retired and runs privately, closed off from
                    the public.
                </p>
            </HomeProjectsDetailedContent>
            <HomeProjectsDetailedContent>
                <p className="bold-text">Key features:</p>
                <ul>
                    <li>Hosted through Firebase(previously Netlify).</li>
                    <li>
                        Has migrated through several CDN providers, from
                        Microsoft's Azure, Fastly, and Amazon Web Services(AWS).
                        AWS S3 for bucket storage and Cloudfront for content
                        distribution such as audio, images, and video. Used
                        OAI(origin access identity) to restrict bucket access to
                        Cloudfront using custom bucket policies.
                    </li>
                    <li>
                        Supports English(en) and Chinese(zh) by i18next with
                        localization detected through user's browser.
                    </li>
                    <li>
                        Implemented Google Analytics for realtime user tracking
                        data.
                    </li>
                    <li>Optimized SEO utilizing React Helmet.</li>
                    <li>
                        Responsive design! Supports most device resolutions.
                    </li>
                    <li>
                        Used to be #1 Google search result for "genshin wish
                        simulator" until I killed off the site.
                    </li>
                    <li>
                        Lazy-loading to reduce unnecessary data consumption.
                    </li>
                    <li>
                        React Context and Hooks for global and user data state
                        management.
                    </li>
                    <li>
                        nanoid for indexing keys for mapped components and
                        objects.
                    </li>
                    <li>Styled-components for CSS-in-JS styling.</li>
                    <li>dayjs for parsing pull data's date.</li>
                    <li>
                        Complex usage of Framer Motion, staggering children and
                        employing children variants to create highly detailed
                        and fine-tuned UI motion elements.
                    </li>
                    <li>
                        Assets optimized using Gatsby's image optimizer(sharp
                        plugin) and additional png compression.
                    </li>
                    <li>Supports keyboard events and audio volume control.</li>
                    <li>
                        Gacha logic took days of fine-tuning to perfect.
                        Squashed so. many. bugs.
                    </li>
                    <li>
                        Character banners and weapon banners differ. 10-pity
                        system for FOUR star items and 90-pity system for FIVE
                        star items. Soft pities implemented at 8-pity and
                        70-pity respectively.
                    </li>
                </ul>
            </HomeProjectsDetailedContent>
            <HomeProjectsDetailedContent>
                <p className="bold-text">Stats for fun:</p>
                <ol>
                    <li className="bold-text">
                        Overview of visitors
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                            3 million unique users. 6.3 million sessions.
                        </span>
                    </li>
                    <HomeProjectsDetailedIMG src={genshinImg2} />
                    <li className="bold-text">
                        Peak active users
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                            Daily: 30,598 users. Monthly: 418,999 users.
                        </span>
                    </li>
                    <HomeProjectsDetailedIMG src={genshinImg3} />
                    <li className="bold-text">
                        From countries around the globe
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                            #1 United States, #2 Russia, #3 Phillipines
                        </span>
                    </li>
                    <HomeProjectsDetailedIMG src={genshinImg4} />
                    <li className="bold-text">
                        Complete Overview of Data
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                            10,484,781 pageviews, wow!
                        </span>
                    </li>
                    <HomeProjectsDetailedIMG src={genshinImg5} />
                    <li className="bold-text">
                        $4 BuyMeACoffee supporters!
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                            321 supporters! After closing off my simulator,
                            that's a lot of supporters willing to spend $4. I
                            actually made it that high because I wanted to kill
                            off visitors...
                        </span>
                    </li>
                    <HomeProjectsDetailedIMG src={genshinImg6} />
                </ol>
            </HomeProjectsDetailedContent>
            <HomeProjectsDetailedContent>
                <p className="bold-text">Things I could improve:</p>
                <ul>
                    <li>
                        Re-explore usage of WEBP. Originally opted due to weak
                        legacy support.
                    </li>
                    <li>
                        Authenticate users through Firebase to store roll data
                        into Realtime Database instead of localStorage. But this
                        requires too much investment for the users upfront!
                    </li>
                    <li>
                        Adopt ads. This project couldn't meet Google Adsense
                        requirements because it was a single page application.
                        But other advertising methods are intrusive.
                    </li>
                    <li>
                        Re-work the past banners UI. I winged it at the time due
                        to time crunch, but I could make it into a modal with
                        banner selections.
                    </li>
                </ul>
            </HomeProjectsDetailedContent>
        </StyledHomeProjectsGenshin>
    );
};

export default HomeProjectsGenshin;
