import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductsListPage() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        loadproducts();
    }, [])


    const loadproducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
                setloading(false)
            })
    }

    const deleteproducts = (id) => {

  
        var result = window.confirm("Are you sure?")

        if (result) {
            setloading(true)
            axios.delete(`https://northwind.vercel.app/api/products/${id}`)
                .then(res => {
                    loadproducts()
                })
        }



    }

    return (<>
        {
            loading ? <h1>loading...</h1> : <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map(item => {
                            return <tr>
                                <tr key={item.id} className={item.unitsInStock === 0 ? 'red-row' : ''}></tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.unitsInStock}</td>
                                <td><button onClick={() => deleteproducts(item.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        }

    </>
    )
}

export default ProductsListPage