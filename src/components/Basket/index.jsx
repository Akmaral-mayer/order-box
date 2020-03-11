import React, { Component } from 'react';
import util from '../../util'
import css from './basket.module.css'
import crossIcon from '../../cross.svg'

export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className={css.basket}>
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <h3>You have {cartItems.length} items in the basket. <hr /></h3>
                }
                <br />

                <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}</b>

                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li className={css.meal} key={item.id}>

                                    <div className={css.item}>
                                        <b>{item.title}</b>
                                    </div>

                                    <span>
                                        {item.count} * {util.formatCurrency(item.price)}
                                    </span>

                                    <button style={{ float: 'right' }} className={css.crossBtn}
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>
                                        <img src={crossIcon} alt="x" />
                                    </button>
                                </li>))
                            }
                        </ul>

                    </div>
                }
            </div>
        )
    }
}
