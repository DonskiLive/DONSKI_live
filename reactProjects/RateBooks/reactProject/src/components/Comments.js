import Comment from './Comment'

const Comments = ({comments})=>{
    return(
        <>
        {comments.length ? <><h3 className="m-0 p-0">Comments</h3>
          
        <ul className = 'list-unstyled overflow-scroll' style={{height: '175px'}}>
                {comments.map(comment =>(
                    <li className = 'text-start' key ={comment.id}>
                        {<Comment comment = {comment} /> }
                       
                    </li>
                ))}
        </ul></> : <></>}
        </>
    )
}

export default Comments