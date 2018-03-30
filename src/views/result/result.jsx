import React, {Component} from 'react'
import './result.scss'
class Result extends Component{
    render(){
        return <div id='result'>
            result
        </div>
    }
    componentDidMount(){
        let {location} = this.props
        console.log(location.state)
    }
}
export default Result