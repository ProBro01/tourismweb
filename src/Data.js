import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube, AiFillYoutube } from "react-icons/ai"
import touristicon from "./assets/images/touristicon.png";
import hotelicon from "./assets/images/hotelicon.png";
import touristplaceicon from "./assets/images/touristplaceicon.png";
// service section images
import guideimg from "./assets/images/service__guides.jpg"
import safiaris from "./assets/images/leopard_safari.jfif"
import stays from "./assets/images/service__stays.jpg"
import planning from "./assets/images/service__planning.jpg"

export const Footerdata = {
    footerinfo : {
        "About Us" : ["What we Do?", "History", "Our Motive", "Owners"],
        "Contact Us" : ["Contact", "Support", "Collaborate"],
        "Videos" : ["Ambassadors", "Agency", "Influencer"],
        "Social Media" : ["Youtube", "Instagram", "Facebook", "Twitter"]
    }
}


export const sidebardata = {
    "element1" : {
        icon : touristicon,
        "numdata" : "10000+",
        "classname" : "herosection__info1",
        "title" : "Visited Tourist"
    },

    "element2" : {
        icon : hotelicon,
        "numdata" : "90+",
        "classname" : "herosection__info2",
        "title" : "Places Covered"
    },

    "element3" : {
        icon : touristplaceicon,
        "numdata" : "30+",
        "classname" : "herosection__info3",
        "title" : "Hotels"
    }
}

export const sectionNames = {
    service : ['S', 'E', 'R', 'V', 'I', 'C', 'E', 'S']
}

export const sectionCards = {
    "S1" : {
        imgurl : guideimg,
        heading : "Guide",
        description : "We Provide the best guide for best tour experience and knowledge."
    },
    "S2" : {
        imgurl : safiaris,
        heading : "Safari",
        description : "Have a Jungle Safari Of Your choice with lot of advanture"
    },
    "S3" : {
        imgurl : stays,
        heading : "Stay",
        description : "Stay near by hotels and laugues to you destination"
    },
    "S4" : {
        imgurl : planning,
        heading : "Tour Planning",
        description : "Plan your Tour from your home in just one click"
    }
} 