import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';

const ProductTable = ({products}) => {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) =>{
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow
                category={product.category}
                key={product.category}
                />
            )
        }
    })
    
  return (
    <div>

    </div>
  )
}

export default ProductTable