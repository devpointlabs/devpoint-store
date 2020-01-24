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
        <ItemForm category_id = {this.state.categories} />
          <br />
        <ItemVariantForm item_id = {this.state.items}/>
         <br />
      </>
    )
  }
}

export default AdminPage