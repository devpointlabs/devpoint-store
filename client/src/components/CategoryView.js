import React from "react";
import axios from "axios";
import ItemForm from "./ItemForm";
import { Link } from "react-router-dom";
import {
  Image,
  Card,
  Container,
  Button,
  Grid,
  Segment,
  Dropdown
} from "semantic-ui-react";
import "../styles/catView.css";

class CategoryView extends React.Component {
  state = { category: {}, items: [], value: "" };

  // Mount used to make API calls to update state
  componentDidMount() {
    this.axiosCall();
    console.log(this.options[0].value);
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (id != this.state.category.id) this.axiosCall();
  }

  axiosCall() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/categories/${id}`)
      .then(res => {
        this.setState({ category: res.data });
        console.log(this.state.category);
      })
      .catch(console.log);
    axios
      .get(`/api/categories/${id}/items`)
      .then(res => this.setState({ items: res.data }));
  }

  newMethod = () => {
    const { id } = this.category.id;
    axios
      .get(`/api/categories/${id}`)
      .then(res => {
        this.setState({ category: res.data });
        console.log(this.state.category);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`/api/categories/${id}/items`)
      .then(res => this.setState({ items: res.data }));
  };

  deleteItem = id => {
    axios
      .delete(`/api/categories/${this.props.match.params.id}/items/${id}`)
      .then(res => {
        const { items } = this.state;
        this.setState({ items: items.filter(i => i.id !== id) });
      });
  };

  add = data => {
    this.setState({ ...this.state, items: [...this.state.items, data] });
  };

  options = [
    { key: 1, text: "Price: High to Low", value: 1 },
    { key: 2, text: "Price: Low to High", value: 2 }
  ];

  sortItems = () => {
    let sortedItems;
    if (this.state.value === 1) {
      sortedItems = this.state.items.sort((a, b) => b.price - a.price);
      return this.setState({ items: sortedItems });
    } else if (this.state.value === 2) {
      sortedItems = this.state.items.sort((a, b) => a.price - b.price);
      return this.setState({ items: sortedItems });
    } else {
      return null
    }
  }

  // list of all item names
  renderItems() {
    const { id } = this.props.match.params;
    return this.state.items.map(i => (
      <>
        <Grid.Column style={{ display: "flex", justifyContent: "center" }}>
          <Link to={`/api/categories/${id}/items/${i.id}`}>
            <Image src={i.image} />
            <h4
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold"
              }}
            >
              {" "}
              {i.name}
            </h4>

            <h4 style={{ textAlign: "center", color: "black" }}>
              {" "}
              ${i.price}{" "}
            </h4>
            <br />
            <br />
          </Link>
          {/* <Button onClick={() => this.deleteItem(i.id)}>Delete</Button> */}
        </Grid.Column>
        <br />
      </>
    ));
  }

  sortOptions = (event, data) => {
    this.setState({ value: data.value }, () => this.sortItems());
  };


  render() {
    return (
      <>
        <Container>
          {/* Category Picture */}
          <Card.Group itemsPerRow={1}>
            <Card>
              <Card.Content>
                <Image id="mainimage" src={this.state.category.image} />
                <div id="shadowy"></div>
                <h1 id="cardname">{this.state.category.name}</h1>
                <h3 id="sorty">Sort By:</h3>
                <Button.Group id="sortbutton" inverted color="black">
                  <Dropdown
                    value={this.state.value}
                    className="button icon"
                    floating
                    options={this.options}
                    placeholder="Select an Option"
                    // onClick={() => this.sortOptions()}
                    onChange={this.sortOptions}
                  />
                </Button.Group>
              </Card.Content>
            </Card>
          </Card.Group>

          {/* <Segment>
            <ItemForm category_id={this.props.match.params.id} add={this.add} />
          </Segment> */}

          <br />

          <hr />
          <br />
          <Grid>
            <Grid.Row padded relaxed columns={4}>
              {this.renderItems()}
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
}

export default CategoryView;
