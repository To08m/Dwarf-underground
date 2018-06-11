import React,{Component} from 'react'

class Sharing extends Component {
    render(){
        return(
          <div>
            <div className="article-links">
          <a className="article-link" href="#" onclick="show()">
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
          <a className="article-link" href="#">
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
        </div>
        <textarea rows="5" cols="50" id = "text"></textarea>
        </div>
        )
    }

    show(){
      const x = document.getElementById("text")
      if(x.style.display === "none"){
        x.style.display = "block"
      }
      else{
        x.style.display = "none"
      }
    }
}

export default Sharing