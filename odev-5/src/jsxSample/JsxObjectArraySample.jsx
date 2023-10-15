import React from 'react'
import { Suppliers } from '../data/suppliersData'

function JsxObjectArraySample() {



  return (<>
    <table className='w3-table w3-striped'>
      <thead>
        <tr>
          <td>Id</td>
          <td>Company Name</td>
          <td>Contact Name</td>
          <td>Contact Title</td>
        </tr>
      </thead>
      <tbody>
        {
          Suppliers && Suppliers.map((item) => {
            return <tr>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
            </tr>
          })
        }
      </tbody>
    </table>

  </>)
}

export default JsxObjectArraySample