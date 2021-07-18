import React, {Component} from 'react';
import {iex} from'../config/iex.js';
import {Line} from 'react-chartjs-2';

class StockChart extends Component{
    constructor(props){
        super(props)
        this.state = {
             stockXvalues:[],
             stockYvalues:[],
        }
    }
    componentDidMount(){
        this.fetchStock();
    }
    fetchStock(){
        const ptrtothis = this;
        const stockX = [];
        const stockY = [];
        const urlgraph = `${iex.baseURL}/stock/${this.props.ticker}/intraday-prices?token=${iex.apiToken}`;
        fetch(urlgraph)
        .then((re)=>re.json())
        .then((data)=>{
            
            for(var i=0;i<data.length;i+=2){
                stockX.push(data[i]['label']);
                stockY.push(data[i]['close']);
            }

            ptrtothis.setState({
                stockXvalues: stockX,
                stockYvalues: stockY
            });

        })
        
    }

    render(){
        const chartdata = {
            labels: this.state.stockXvalues,
            datasets:[
                {
                    label:'closing price',
                    data:this.state.stockYvalues,
                    borderColor: '#e53935',
                    tension: 0.1,
                    fill: false
                }
            ],
            options: {
                scales: { 
                    yAxes: [{
                        
                        ticks: {
                            borderColor: "blue",
                            
                        }
                    }]
                }
            }
        }
        return (
            <div >
                <Line
                data={chartdata}
                />
            </div>
        )
    }
}
export default StockChart;