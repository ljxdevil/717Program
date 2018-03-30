import React, {Component} from 'react'
import './search.scss'
class Search extends Component{
    constructor(){
        super()
        this.state={
            historylist: []
        }
        this.toSearch = this.toSearch.bind(this)
        this.clearHistory = this.clearHistory.bind(this)
        
    }
    render(){
        let {historylist} = this.state
        return <div id='search'>
            <header><input type="text" placeholder='请输入你要购买的商品' ref='keyWords'/><button onClick={this.toSearch}>收索</button></header>
            <section className='recent-search'>
                <p>最近搜索 <span onClick={this.clearHistory} className='iconfont icon-shanchu'></span></p>
                {historylist.length == 0 ? <p>暂无搜说记录...</p>:
                    <ul className='ks-clear'>
                        {this.state.historylist.map((item, index)=>{
                            return <li key={index} onClick={()=>{
                                    this.toResult(item)
                                }}>{item}</li>
                        })}
                         {/* <li>大米</li>
                        <li>巧克力</li>   */}
                    </ul>
                }
            </section>
            <section className='common-search'>
                <p>大家都在搜索</p>
                <ol className='ks-clean'>
                    <li>粽子</li>
                    <li>锅巴</li>
                    <li>酱</li>
                    <li>小吃</li>
                    <li>零食</li>
                    <li>干果</li>
                    <li>特产</li>
                    <li>油</li>
                    <li>大米</li>
                    <li>面粉</li>
                </ol>
            </section>
        </div>
    }

    clearHistory(){// 清空搜索记录
        localStorage.removeItem('SearchHistory')
        this.setState({
            historylist:[] 
        })
    }
    toSearch(){
        // 判断，如果有输入值才会到result页面 this.refs.keyWords.value
        if(!this.refs.keyWords.value) return;
        let keyWords = this.refs.keyWords.value;// 输入的值,是字符串
        let ls = localStorage;
        console.log(keyWords)
        // 判断，有了就获取，没有就设置
        if(ls.getItem('SearchHistory')){
            let shArr = JSON.parse(ls.getItem('SearchHistory'));// 字符串转对象object
            console.log(typeof(shArr))
            // 判断去重
            if(shArr.indexOf(keyWords) > -1) return;
            shArr.push(keyWords);
            ls.setItem('SearchHistory', JSON.stringify(shArr))
        }else{ 
            ls.setItem('SearchHistory', JSON.stringify([keyWords]))
        }

         this.props.history.push('/index/result',{
            key_words:keyWords
        })

        // 渲染数据
        console.log(typeof(keyWords))
    }
    toResult(keyWords){// 添加搜索记录
        this.props.history.push('/index/result',{
            key_words:keyWords
        })
    }
    componentDidMount(){
        if(localStorage.getItem('SearchHistory')){
            this.setState({
                historylist:JSON.parse(localStorage.getItem('SearchHistory'))
            })
        }
    }
}


export default Search