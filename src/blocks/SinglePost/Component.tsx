import type { Post, SinglePostBlock as SinglePostBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PostArchive } from '@/components/PostArchive'

export const SinglePostBlock: React.FC<
SinglePostBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, categories, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  let posts: Post[] = []


  if (selectedDocs?.length) {
    const filteredSelectedPosts = selectedDocs.map((post) => {
      if (typeof post.value === 'object') return post.value
    }) as Post[]

    posts = filteredSelectedPosts
  }


  return (
    <div className="my-16" id={`block-${id}`}>
      <PostArchive posts={posts} />
    </div>
  )
}
