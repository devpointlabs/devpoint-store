import React from 'react'
import CategoryForm from './CategoryForm'
import ItemForm from './ItemForm'
import ItemVariantForm from './ItemVariantForm'

class AdminPage extends React.Component {
  state = { categories: [], items: [], item_variant: [] }

  render() {
    return (
      <>

      <CategoryForm/>
      <ItemForm category_id={this.state.categories}/>
      {/* <ItemVariantForm/> */}
      </>
    )
  }
}

export default AdminPage