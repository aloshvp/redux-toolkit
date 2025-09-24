import React from 'react'
import PostList from '../features/post/PostList'
import AddPostForm from '../features/post/AddPostForm'

const PostPage = () => {
    return (
        <>
            <AddPostForm />
            <PostList />
        </>
    )
}

export default PostPage