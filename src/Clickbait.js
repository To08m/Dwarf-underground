import React,{Component} from 'react'
import Orc from './Orc'
import Mountain from './Mountain'
import Gold from './Gold'
import Hobbit from './Hobbit'

class Clickbait extends Component {
    render(){
        return(
            <div>
            <h2>From around the Realm</h2>
        <Orc />
        <Mountain />
        <Gold />
        <Hobbit />
        </div>
        )
    }
}

export default Clickbait