import HiglightCard from "./higlight-card";

interface Highlight {
    src: string;
    heading: string;
    url: string;
  }
  
const highlights: Highlight[] = [
    {"src":'/highlights/anna-dudkova-zuLKsbU-yfA-unsplash.jpg', "heading":'Some heading','url': '/'},
    {"src":'/highlights/george-bale-P8UP7ixvglg-unsplash.jpg', "heading":'Some heading','url': '/'},
    {"src":'/highlights/steve-johnson-y-l0g1pJtYE-unsplash.jpg', "heading":'Some heading','url': '/'},
    {"src":'/highlights/venti-views-Tcd_UOjm5cg-unsplash.jpg', "heading":'Some heading','url': '/'}
];

interface HighlightsProps {
highlights: Highlight[];
}
export default function Highlights() {
    return(
        <div
            className=" h-auto flex flex-col gap-1 md:flex-row justify-evenly"
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