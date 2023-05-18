import "./SingleArticle.css";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const { id } = useParams();
  const article = data.find((article) => article.id === id);

  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt="home" />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
