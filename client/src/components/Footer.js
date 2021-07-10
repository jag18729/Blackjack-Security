import SimpleReactFooter from "simple-react-footer";
import React from 'react'

const Footer = () => {
    const description = "";
const title = "Cats";
const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                link: "/locations"
            },
            {
                name: "Culture",
                link: "/culture"
            }
        ]
    }
 ];
    return (
        <div>
            <SimpleReactFooter 
                description={description} 
                title={title}
                columns={columns}
                linkedin="fluffy_cat_on_linkedin"
                facebook="fluffy_cat_on_fb"
                twitter="fluffy_cat_on_twitter"
                instagram="fluffy_cat_live"
                youtube="UCFt6TSF464J8K82xeA?"
                pinterest="fluffy_cats_collections"
                copyright="black"
                iconColor="black"
                backgroundColor="bisque"
                fontColor="black"
                copyrightColor="darkgrey"
            />;
        </div>
    )
}

export default Footer