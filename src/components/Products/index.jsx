import React, { Component } from 'react';
import util from '../../util'
import css from './products.module.css'

export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className={css.product} key={product.id}>
                    <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
                        <div className="icon">
                            <img className="icon" src={`icons/${product.sku}`} alt={product.title} />
                        </div>
                    </a>

                    <div className={css.details}>
                        <div className={css.itemTitle}>{product.title}</div>
                        <b>{util.formatCurrency(product.price)}</b>
                    </div>

            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
