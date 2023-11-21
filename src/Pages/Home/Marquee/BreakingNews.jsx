import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex gap-11 px-5 mb-9 bg-slate-500 py-4">
            <button className="btn btn-warning">Latest</button>
            <Marquee>
                 Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;