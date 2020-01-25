import React from 'react'
import CategoryForm from './CategoryForm'
import ItemForm from './ItemForm'
import ItemVariantForm from './ItemVariantForm'
import BraintreeDrop from './BraintreeDrop'

class AdminPage extends React.Component {
  state = { categories: [], items: [], item_variant: [] }

  render() {
    return (
      <>
        <CategoryForm />
          <br />
          <br />
        {/* <ItemVariantForm items = {this.state.items}/> */}
         <br />
      </>
    )
  }
}

export default AdminPage