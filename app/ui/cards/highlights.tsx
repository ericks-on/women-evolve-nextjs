import HiglightCard from "./higlight-card";

interface Highlight {
    src: string;
    heading: string;
    url: string;
  }
  
const highlights: Highlight[] = [
    {"src":'/WE_Logo_CIRCLE_Black.png', "heading":'Some heading','url': '/'},
    {"src":'/WE_Logo_CIRCLE_Black.png', "heading":'Some heading','url': '/'},
    {"src":'/WE_Logo_CIRCLE_Black.png', "heading":'Some heading','url': '/'},
    {"src":'/WE_Logo_CIRCLE_Black.png', "heading":'Some heading','url': '/'}
];

interface HighlightsProps {
highlights: Highlight[];
}
export default function Highlights() {
    return(
        <div
            className=" flex flex-col gap-1 md:flex-row justify-evenly"
            >
            {highlights.map((highlight) => {
                return(
                    <HiglightCard 
                        src={highlight.src}
                        heading={highlight.heading}
                        url={highlight.url}
                        key={highlight.heading} />
                )
            })}
        </div>
    )
};