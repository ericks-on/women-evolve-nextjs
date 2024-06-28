import { SocialIcon } from "react-social-icons";

const socialIcons = [
    {
      name: "Instagram",
      href: "https://www.instagram.com",
    },
    {
      name: "X",
      href: "https://www.x.com",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com",
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com",
    }
  ];
export default function FooterIcons(){
    return(
        <div
            className="flex gap-4 "
            >
            {
                socialIcons.map((icon) => {
                    return <SocialIcon 
                        url={icon.href}
                        target='_blank'
                        key={icon.name} />
                })
            }
        </div>
    )
}