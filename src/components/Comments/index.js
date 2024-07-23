import { Component } from "react"
import CommentItem from '../CommentItem'
import {v4 as uuidv4} from 'uuid'

import './index.css'


  class Comments extends Component{
    state={name:'',userComment:'',userList:[]}

    onAddComment=(event)=>{
      event.preventDefault()
      const{name,userComment,userList,size}=this.state
      const newComment={
        id:uuidv4(),
        name,
        userComment,
        time: new Date(),
        isLiked:true
      }

    this.setState(prevState => ({
      userList: [...prevState.userList,newComment],
      name:'',
      userComment:''
     
    }))
   
    }

    onClikedOnDelete=(id)=>{
      const {userList}=this.state
      this.setState({userList:userList.filter(each=>each.id!==id)})
      
    }

    toggleIsFavorite=(id)=>{
      const {userList}=this.state
      this.setState(prevState => ({
        userList: prevState.userList.map(eachComment => {
          if (id === eachComment.id) {
            return {...eachComment, isLiked: !eachComment.isLiked}
          }
          return eachComment
        }),
      }))
    }

    onTypedName=(event)=>{
      this.setState({name:event.target.value})

    }

    onTypedComment=(event)=>{
      this.setState({userComment:event.target.value})

    }


    render(){
      const{name,userComment,userList}=this.state
      
     
        return(
            <div className="bg-container">
              <div className="card-bg-con">
                <div className="cards-con">
                <div className="text-con">
                  <h1 className="header">Comments</h1>
                 <form onSubmit={this.onAddComment}>
                 <p className="description">Say something about 4.0 Technologies</p>
                  <input value={name} onChange={this.onTypedName} className="input-ele" type="search" placeholder="Your Name"/>
                 <br/>
                  <textarea value={userComment} onChange={this.onTypedComment} className="comments" placeholder="Your Comment" rows={6} cols={30} />
                  <br/>
                  <button className="button" type="submit">Add Comment</button>
                 </form>
                </div>
                <div className="img-con">
                  <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" className="img" alt=" comments"/>

                </div>
                </div>
                <hr></hr>
                <div className="users-comments-con">
                  <p><span className="no-of-comments">{userList.length}</span> Comments</p>
                  <ul className="comments-con">
                    {userList.map((eachComment)=>
                     <CommentItem eachComment={eachComment} onClikedOnDelete={this.onClikedOnDelete} toggleIsFavorite={this.toggleIsFavorite} key={eachComment.id} />
                    )}
                  </ul>

                </div>

              </div>

            </div>

        )
    }
  }
  
  export default Comments
  