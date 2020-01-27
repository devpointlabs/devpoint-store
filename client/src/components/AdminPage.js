import React from 'react'
import CategoryForm from './CategoryForm'
import ItemForm from './ItemForm'
import ItemVariantForm from './ItemVariantForm'
import BraintreeDrop from './BraintreeDrop'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

class AdminPage extends React.Component {
  state = { categories: [], items: [], item_variant: [] }

  render() {
    return (
      <>
      <Page>
      <Container>
        <br />
        <CategoryForm />
          <br />
          <br />
        {/* <ItemVariantForm items = {this.state.items}/> */}
         <br />
      </Container>
      </Page>
      </>
    )
  }
}

const Page = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  height: '3000px';
  width: '3000px';
  `

export default AdminPage