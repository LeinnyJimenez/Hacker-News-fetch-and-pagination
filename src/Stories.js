import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {

  const { isLoading, hits } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <section className='stories'>
      {
        hits.map(storie => {

          const { objectID, title, num_comments, url, points, author } = storie;

          return <article key={objectID} className='storie'>
            <h4 className='title'>{title}</h4>
            <p className='info'>{points} points by <span>{author}</span> | {num_comments} comments</p>
            <div>
              <a href={url} className="read-link" target='_blank' rel="noreferrer">Read More</a>
              <button className='remove-btn'>Remove</button>
            </div>
          </article>
        })
      }
    </section>
  )
}

export default Stories
