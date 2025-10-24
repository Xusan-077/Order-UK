export default function SiteInput({ text }) {
    return (
        <div className="hero__search-div">
            <input type="text" placeholder={`${!text ? "youremail@gmail.com" : "e.g. EC4R 3TE "}`} className="hero__search" />
            <button className="hero__button">Search</button>
        </div>
    )
}
