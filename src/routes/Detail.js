import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//
function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const getDetail = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setDetail(json.data.movie);
            setLoading(false);
            console.log(json.data.movie);
        };
        getDetail();
    }, [id]);

    return (
        <div>
           HI
        </div>
    );
};

export default Detail;