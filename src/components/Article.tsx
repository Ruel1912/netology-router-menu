interface IArticle {
  title: string
  children?: React.ReactNode
}

const Article = ({ title, children }: IArticle) => {
  return (
    <article className="article">
      <h1 className="article__title">{title}</h1>
      {children}
    </article>
  )
}

export default Article
