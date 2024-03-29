import React from "react";
import styled from "styled-components";
import HomeProjectsDetailed from "./ProjectsModal";
// import { motion } from "framer-motion";

//Images
import genshinImg1 from "../../assets/images/genshin-img1.png";
import genshinImg2 from "../../assets/images/genshin-img2.png";
import genshinImg3 from "../../assets/images/genshin-img3.png";
import genshinImg4 from "../../assets/images/genshin-img4.png";
import genshinImg5 from "../../assets/images/genshin-img5.png";
import genshinImg6 from "../../assets/images/genshin-img6.png";
import ProjectsStickyIMG from "./ProjectsStickyIMG";
import ProjectsStickyContent from "./ProjectsStickyContent";

const StyledHomeProjectsGenshin = styled(HomeProjectsDetailed)``;

// const IMG = styled.img`
//     width: 100%;
//     max-width: 700px;
// `;

// const Content = styled.p``;

const HomeProjectsGenshin = () => {
    return (
        <StyledHomeProjectsGenshin>
            <ProjectsStickyContent>
                <a
                    href="https://ty4coffee.thekima.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <ProjectsStickyIMG src={genshinImg1} />
                </a>
                <br />
                <a
                    href="https://ty4coffee.thekima.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Take me to the site!
                </a>
                <br />
                github:{" "}
                <a
                    href="https://github.com/miwoju/genshin-wish-simulator-gatsby"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    https://github.com/miwoju/genshin-wish-simulator-gatsby
                </a>
            </ProjectsStickyContent>
            <ProjectsStickyContent italicize>
                <p>
                    Started as a joke with friends. After months of work, it
                    happened.
                </p>
                <p>
                    This project runs on Gatsbyjs and is written in Typescript.
                    From buttons to animations to modals & gacha logic, all were
                    painstakingly designed from scratch. Enjoyed every second of
                    it!
                </p>
                <p>
                    It is now since retired and runs privately, closed off from
                    the public.
                </p>
            </ProjectsStickyContent>
            <ProjectsStickyContent>
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
            </ProjectsStickyContent>
            <ProjectsStickyContent>
                <p className="bold-text">Stats for fun:</p>
                <ol>
                    <li className="bold-text">
                        Overview of visitors
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                            3 million unique users. 6.3 million sessions.
                        </span>
                    </li>
                    <ProjectsStickyIMG src={genshinImg2} />
                    <li className="bold-text">
                        Peak active users
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                            Daily: 30,598 users. Monthly: 418,999 users.
                        </span>
                    </li>
                    <ProjectsStickyIMG src={genshinImg3} />
                    <li className="bold-text">
                        From countries around the globe
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                            #1 United States, #2 Russia, #3 Phillipines
                        </span>
                    </li>
                    <ProjectsStickyIMG src={genshinImg4} />
                    <li className="bold-text">
                        Complete Overview of Data
                        <br />
                        <span style={{ fontStyle: "italic" }}>
                            10,484,781 pageviews, wow!
                        </span>
                    </li>
                    <ProjectsStickyIMG src={genshinImg5} />
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
                    <ProjectsStickyIMG src={genshinImg6} />
                </ol>
            </ProjectsStickyContent>
            <ProjectsStickyContent>
                <p className="bold-text">Things I could improve:</p>
                <ul>
                    <li>
                        Implement redux to increase performance by reducing
                        rerenders. I went with Context API as it was a small,
                        personal project and was easier to code out quickly.
                    </li>
                    <li>
                        Refactor with custom hooks for performance and
                        readability. It was originally a "for fun" project so I
                        copied and pasted logic around because it was quick and
                        it worked.
                    </li>
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
                        But other advertising methods were intrusive.
                    </li>
                    <li>
                        Re-work the "past banners" UI. I winged it at the time
                        due to time crunch and it being a silly feature. But it
                        actually became so popular that the feature stayed. I
                        could improve it by having its own modal for banner
                        selections.
                    </li>
                </ul>
            </ProjectsStickyContent>
        </StyledHomeProjectsGenshin>
    );
};

export default HomeProjectsGenshin;
