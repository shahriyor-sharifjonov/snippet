import React, {useState, useeffect} from 'react'
import { prisma } from '../server/db/client'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <>
      <ul className='list'>
        <Link href="/create" legacyBehavior>
          <a className='list__btn'>Create Snippet</a>
        </Link>
        {posts?.map(post => (
          <li key={post.id} className='list__item'>
            <p className='list__item-title'>{post.title}</p>
            <p className='list__item-code'>{post.code}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getServerSideProps() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    }
  }
}