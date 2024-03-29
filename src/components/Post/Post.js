import './Post.css'

const Post=(props)=>(
    <article className='Post' onClick={props.myclick}>
        <h1>{props.title}</h1>
        <div className='Info'>
            <div className='Author'>{props.author}</div>
        </div>
    </article>
)

export default Post