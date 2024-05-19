import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {
    const articleElements = blogData.posts.map((element) => {
        return <Article key={element.id} title={element.title} date={element.date} preview={element.preview} />

    })
    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList