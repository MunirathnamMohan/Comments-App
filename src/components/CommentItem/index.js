import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem=(props)=>{
    const{eachComment,toggleIsFavorite,onClikedOnDelete}=props
    const{name,userComment,time,id,isLiked}=eachComment

    const onClickedOnLike=()=>{
        toggleIsFavorite(id)
    }
    const onDelete=()=>{
        onClikedOnDelete(id)
    }


const res=isLiked?"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" :"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"

    return(
        <li className='list-con'>
            <div className='comments-text-con'>
                <p className='profile'>{name.substring(0, 1)}</p>
                <div className='name-time'>
                    <div className='con'>
                    <p className='name'>{name}</p>
                    <p className='time'>{formatDistanceToNow(time)}</p>
                    </div>
                    <p className='comments'>{userComment}</p>
                </div>

            </div>
            <div className='button-con'>
                <button className={isLiked?'like-btn':'liked-false'} onClick={onClickedOnLike}><img className='like-image' src={res}/>Like</button>
                <img className='delete-img' onClick={onDelete}  src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"/>
            </div>

        </li>

    )

}

export default CommentItem