import PropTypes from "prop-types";
// 페이지 새로고침 없이 url 이동
import { Link } from "react-router-dom";

export default function Movies({id, m_cover_img, title, summary, genres}) {
    return (
        <div>
            <img src={m_cover_img} />
            <h2>
                {/* API url에 movie의 id를 추가하면 detail 정보를 가져올 수 있음 */}
                <Link to={`/detail/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

// propTypes
// 자식 컴포넌트(kmToMiles())에 데이터를 보내줄 때 실수하지 않도록 typeError를 이르켜주는 도구
Movies.propTypes = {
    id: PropTypes.number.isRequired,
    m_cover_img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};