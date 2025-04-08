import { useParams } from "react-router-dom";
import articles from "../Article-Content";
export default function ArticlesPage() {

  const { name } = useParams();
  const article = articles.find(article => article.name === name);
    return (
      <>
      <h2>{article.title}</h2>
      {article.content.map(p => <p key={p}>{p}</p>)}
      </>
    );
  }