import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products = [
    {
        id: 1, name: 'shoes', description: 'Running shoes'
    },
    {
        id: 2, name: 'laptops', description: 'Gaming laptops'
    }
]

const Products = () => {
    return (
        <div>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} xs={12} sm={6} ms={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Products;