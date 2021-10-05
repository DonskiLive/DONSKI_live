import Comment from './Comment'

const Comments = ({comments})=>{
    console.log(comments)
    return(
        <ul className = 'list-unstyled overflow-scroll' style={{height: '155px'}}>
            {
                comments.map(comment =>(
                    <li className = 'mb-1 text-start' key ={comment.id}>
                        {<Comment comment = {comment} />}
                    </li>
                ))
            }
        </ul>
    )
}

export default Comments