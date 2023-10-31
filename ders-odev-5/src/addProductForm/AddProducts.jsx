import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { object, string, number, date, InferType } from 'yup';
import { Grid } from '@mui/material'


const AddProductsSchema = object().shape({
    name: string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Boş geçilemez'),
    unitPrice: number()
        .required('Boş geçilemez'),
    unitsInStock: number()
        .required('Boş geçilemez'),
    quantityPerUnit: string()
        .required('Boş geçilemez')

});


function AddProducts() {

    const formik = useFormik({
        initialValues: {
            name: '',
            unitPrice: '',
            unitsInStock: '',
            quantityPerUnit: ''

        },
        validationSchema: AddProductsSchema,
        onSubmit: values => {
            AddProducts(values)
        },
    });


    const AddProducts = (data) => {
        axios.post('https://northwind.vercel.app/api/products', data)
            .then(res => {
                console.log(res);
                alert('Success')
            })
    }

    return (<>

        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item xs={12} lg={3} md={6}>
                    <div style={{ backgroundColor: 'white' }}>
                        <div>
                            <label htmlFor=""> Name </label>
                            <input
                                name='name'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {
                                formik.errors.name ? <span style={{ color: 'red' }}>{formik.errors.name}</span> : <></>
                            }
                        </div>

                    </div>
                </Grid>
                <Grid item xs={12} lg={3} md={6}>
                    <div style={{ backgroundColor: 'white' }}>
                        <div>
                            <label htmlFor="">Unit Price </label>
                            <input
                                name='unitPrice'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.unitPrice} />
                            {
                                formik.errors.unitPrice ? <span style={{ color: 'red' }}>{formik.errors.unitPrice}</span> : <></>

                            }
                        </div>

                    </div>
                </Grid>



                <Grid item xs={12} lg={3} md={6}>
                    <div style={{ backgroundColor: 'white' }}>
                        <div>
                            <label htmlFor="">Units In Stock </label>
                            <input
                                name='unitsInStock'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.unitsInStock} />
                            {
                                formik.errors.unitsInStock ? <span style={{ color: 'red' }}>{formik.errors.unitsInStock}</span> : <></>

                            }

                        </div>

                    </div>
                </Grid>


                <Grid item xs={12} lg={3} md={6}>
                    <div style={{ backgroundColor: 'white' }}>
                        <div>
                            <label htmlFor="">Quantity Per Unit </label>
                            <input
                                name='quantityPerUnit'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.quantityPerUnit} />
                            {
                                formik.errors.quantityPerUnit ? <span style={{ color: 'red' }}>{formik.errors.quantityPerUnit}</span> : <></>

                            }

                        </div>

                    </div>
                </Grid>

            </Grid>




            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>)
}

export default AddProducts