import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article className="post-card" key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}...</p>
            <p className="post-credit">
                <PostAuthor userId={post.userId} />
            </p>
        </article>
    ));

    return (
        <section className="post-section">
            <h2 className="section-title">📚 Posts</h2>
            <div className="post-grid">{renderedPosts}</div>
        </section>
    );
};

export default PostList;
