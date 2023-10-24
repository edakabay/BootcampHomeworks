import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AddProductPage() {

    const [name, setname] = useState("")
    const [unitPrice, setunitprice] = useState("")
    const [unitsInStock, setstock] = useState("")

    const [categories, setcategories] = useState([]);

    useEffect(() => {

        loadCategories()

    }, [])


    const add = () => {

        let newProducts = {
            name,
            unitPrice,
            unitsInStock
        }
        axios.post('https://northwind.vercel.app/api/products', newProducts)
            .then(res => {
                loadCategories()
            })

    }


    const loadCategories = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setcategories(res.data)
            })
    }

    return (<>
        <h1>Add Product</h1>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Unirprice</label>
            <input type="text" value={unitPrice} onChange={(e) => setunitprice(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Stock</label>
            <input type="text" value={unitsInStock} onChange={(e) => setstock(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

        <hr />

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unitprice</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories && categories.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>)
}

export default AddProductPage