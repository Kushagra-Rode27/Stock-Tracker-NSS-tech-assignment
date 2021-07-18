import React, {Component} from 'react';
import { Stock } from '../resource/stock.js';
import StockChart from '../resource/stockgraph.js';
import './des.css';
class StockRow extends Component{
    constructor(props){
        super(props)
        this.state = {
             price:null,
             date:null,
             time:null,
             change:null,
             per_change:null,

        }
    }
    
    changeStyle() {
        var color;
        if (this.state.change > 0){
             color = '#4caf50'


        }
        else{
            color = '#e53935'
        }
        return {
        color: color,
        fontSize: '1em',
        marginLeft: 5
        }
    }
    

    setData(data){
        
        this.setState({
            price:data.price,
            date: data.date,
            time: data.time
        });
        
        Stock.Prev_price(this.props.ticker,(callagain)=>{
            this.setState({
                per_change : (((data.price - callagain.price)/callagain.price)*100).toFixed(2),
                change: (data.price - callagain.price).toFixed(2)
                
            })
        })
        
        
    }

    
    componentDidMount(){
        
        Stock.lat_price(this.props.ticker,this.setData.bind(this))
        
        
    } 
   
    

    render(){
        
        return(
            
            <tr>
                
                <td className = "head">{this.props.ticker}</td>
                <td>{this.state.price}${<span style = {this.changeStyle()} className="change">
                &nbsp;{this.state.change}$
                &nbsp;({this.state.per_change}%)
                <span>{this.state.change > 0 ? <span><big>&#8593;</big></span>:<span><big>&#8595;</big></span> }</span>
                </span>}</td>
                <td>{this.state.date}</td>
                <td>{this.state.time}</td>
                <td><StockChart ticker = {this.props.ticker}/></td>
            </tr>
        )

        
    }
}
export default StockRow
