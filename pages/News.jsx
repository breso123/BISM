/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import NewsList from "../components/NewsList";
import NewsNav from "../components/NewsNav";
import PageNav from "../components/PageNav";

import { getNews } from "./services/apiLobby";

function News() {
  const news = useLoaderData();

  return (
    <div className="flex flex-col items-center h-screen">
      <PageNav />
      <div className="h-6/6 w-5/6 flex flex-col items-center justify-center gap-4">
        <NewsNav />
        <ul className="flex flex-col items-center m-5 gap-5 overflow-scroll h-[35rem]">
          {news.map((n, i) => (
            <NewsList
              provider={n.provider}
              providerSite={n.providerSite}
              date={n.date}
              url={n.url}
              title={n.title}
              content={n.content}
              key={i}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function loader() {
  const data = await getNews();
  return data;
}

export default News;
