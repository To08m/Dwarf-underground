import React,{Component} from 'react'
import Orc from './Orc'
import Mountain from './Mountain'
import Gold from './Gold'
import Hobbit from './Hobbit'

class Clickbait extends Component {
    constructor(){
        super()

        this.state = {
            links: [
                "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
                "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
                "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
                "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
            ],
            text: [
                "Single Orcs in Indianapolis",
                "You won't believe what's under this mountain",
                "Mine 20% more gold with One Weird Trick",
                "Surprise for Indiana Hobbits born before 1999",
            ],
            alt: [
                "orc",
                "mountain",
                "gold",
                "hobbit",
            ],
        }
    }
    
    render(){
        return(
            <div>
                <h2>From around the Realm</h2>
                {this.state.links.map(url => <Link links={url}/>)}
                
                {this.state.text.map(words => <Link text={words}/>)}
               
            </div>
        )
    }
}

class Link extends Component{
    render(){
        return (<div className="small-6 medium-3 columns other-article">
          <a href="#">
            <img src={this.props.links} alt={this.props.alt} />
            <p>{this.props.text}</p>
          </a>  
        </div>
        )
    }
}

export default Clickbait