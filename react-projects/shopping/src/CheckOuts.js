import React,{Component} from 'react'
import './CheckOut.css'
import { Button } from 'antd'
import { DeleteFilled } from '@ant-design/icons';

class CheckOuts extends Component {
    
    state = {
        checkoutItems:[]
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== this.state.checkoutItems) {
          this.setState({checkoutItems:this.props.items})
          console.log('updated')
        }
      }

     deleteItem = (indx) => {
        // const newItems = [...props.items]
        // const newList = newItems.map((el,index) => index !== indx)
        // props.items = newList
    }
    render(){
        return (
            <div>
                <h2>CheckOut</h2>
                {this.props.items.map((el,index) => <div className="checkoutOuter">
                    <div className="checkOutLeft">
                        <img src={el.image} />
                        <div>{el.title}</div>
                    </div>
                    <div className="checkOutRight" >
                        <div>${el.price}</div>
                        <Button icon={<DeleteFilled style={{ fontSize: '20px' }} />} style={{ color: 'maroon', background: 'white', border: 'none' }} onClick={() => this.deleteItem(index)}></Button>
                    </div>
                </div>)}
                <div className="totalPrice">
                    <div>Total</div>
                    <div>${this.props.totalCheckout}</div>
                </div>
            </div>
        )
    }
    
}

export default CheckOuts
