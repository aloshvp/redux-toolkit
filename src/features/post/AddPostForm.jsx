import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postSlice'

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
            setTitle('')
            setContent('')
        }
    }

    return (
        <section className="form-section">
            <h2 className="form-heading">📝 Add a New Post</h2>
            <form className="post-form">
                <label htmlFor="postTitle">Post Title</label>
                <input
                    type="text"
                    id="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a title..."
                />

                <label htmlFor="postContent">Post Content</label>
                <textarea
                    id="postContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your content here..."
                />

                <button type="button" onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </section>
    )
}

export default AddPostForm
