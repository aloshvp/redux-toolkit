import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postSlice'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onSavePostClicked = () => {
        if (title && content && userId) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
            setUserId('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id} >{user.name}</option >
    )
    )

    return (
        <section className="form-section">
            <h2 h2 className="form-heading" >📝 Add a New Post</h2>
            <form className="post-form">
                <label htmlFor="postTitle">Post Title</label>
                <input
                    type="text"
                    id="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a title..."
                />

                <label htmlFor="postAuthor">Author</label>
                <select id="postAuthor"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                >
                    <option value="">
                        Select Author
                    </option>
                    {userOptions}
                </select>

                <label htmlFor="postContent">Post Content</label>
                <textarea
                    id="postContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your content here..."
                />

                <button type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </section >
    )
}

export default AddPostForm
