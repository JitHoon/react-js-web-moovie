function Movies({m_cover_img, title, summary, genres}) {
    return (
        <div>
            <img src={m_cover_img} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}
export default Movies