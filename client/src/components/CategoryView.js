import React from "react";
import axios from "axios";
import ItemForm from "./ItemForm";
import { Link } from "react-router-dom";
import { Image, Card, Container, Button, Grid } from "semantic-ui-react";

class CategoryView extends React.Component {
  state = { category: {}, items: [] };

  // Mount used to make API calls to update state
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/categories/${id}`)
      .then(res => {
        this.setState({ category: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`/api/categories/${id}/items`)
      .then(res => this.setState({ items: res.data }));
  }

  // function to delete item
  deleteItem = id => {
    axios
      .delete(`/api/categories/${this.props.match.params.id}/items/${id}`)
      .then(res => {
        const { items } = this.state;
        this.setState({ items: items.filter(i => i.id !== id) });
      });
  };


  // list of all item names
  renderItems() {
    const { id, category_id } = this.props.match.params;
    return this.state.items.map(i => (
      <Grid.Column>
        <Link to={`/api/categories/${category_id}/items/${id}`}>
          <Image src={i.image} />
          {i.name}
          <br />
          {i.price}
          <br />
          <Button onClick={() => this.deleteItem(i.id)}>Delete</Button>

        </Link>
      </Grid.Column>
    ));
  }

  render() {
    return (
      <>
        <Container>
          {/* Category Picture */}
          <Card.Group itemsPerRow={1}>
            <Card>
              <Card.Content>
                <Image src={this.state.category.image} />
              </Card.Content>
            </Card>
          </Card.Group>
          <ItemForm id={this.props.match.params} />
          <Grid>
            <Grid.Row relaxed columns={4}>
              {this.renderItems()}
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
}

export default CategoryView;
