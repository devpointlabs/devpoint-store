import React from "react";
import axios from "axios";
import { Form, Header, Button, Card, Grid, } from "semantic-ui-react";

class CategoryForm extends React.Component {
	state = { name: "", image: "", full_width: false, categories: [] };

	// pull any other added categories
	componentDidMount() {
		axios
			.get("/api/categories")
			.then(res => {
				this.setState({ categories: [...res.data] });
			})
			.catch(err => {
				console.log(err);
			})
	}

	// on submit
	handleSubmit = e => {
		e.preventDefault();
		this.addItem(this.state.name, this.state.image, this.state.full_width);
		this.setState({ name: "", image: "" });
	};

	// allows change of state
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// add to API and reset state
	addItem = (name, image, full_width) => {
		axios.post("/api/categories", { name, image, full_width }).then(res => {
			const { categories } = this.state;
			this.setState({ categories: [...categories, res.data] });
		});
	};

	button = () => {

	}

	// delete function
	deleteCategory = id => {
		axios.delete(`/api/categories/${id}`).then(res => {
			const { categories } = this.state;
			this.setState({ categories: categories.filter(c => c.id !== id) });
		});
	};
	//  render list of categories on same page
	renderCategory() {
		return this.state.categories.map(c => (
			<div style={{ margin: '0 auto'}}>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
				<Card>
					<ul style={view}>
							<h2>{c.name}</h2>
						<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
					</ul>
					<center>
						<div>
							<Button color="red" onClick={() => this.deleteCategory(c.id)}>
								Delete
					    </Button>
						</div>
					</center>
					<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
				</Card>
			</div>
		));
	}

	// actual return
	render() {
		return (
			<>
				<div>
					<Header as="h1" style={view}>New Category</Header>
					<Form onSubmit={this.handleSubmit} style={view}>
						<Form.Group>
							<Form.Input
								placeholder="Add A Category"
								required
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
							<Form.Input
								placeholder="Add a URL"
								required
								name="image"
								value={this.state.image}
								onChange={this.handleChange}
							/>
							<br />
							<br />
							<Form.Button color="blue" onClick={() => window.location.reload()} > Submit</Form.Button>
							<br />
						</Form.Group>
					</Form>
					<br /><br />
					<center>
						<Grid.Column>
							<Grid columns={4}
								align="center"
								style={view}
							>
								{this.renderCategory()}
							</Grid>
						</Grid.Column>
					</center>
				</div>
			</>
		);
	}
}
const view = {
	display: "flex",
	justifyContent: "center"
}



export default CategoryForm;
