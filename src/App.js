import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './App.css';

import { API, graphqlOperation, Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import { listVehicules as ListVehicules } from './graphql/queries'
import { createVehicule as CreateVehicule } from './graphql/mutations'

class App extends React.Component {
  // define some state to hold the data returned from the API
  state = {
    licensePlate:'',
    description:'',
    category:'',
    vehType:'',
    mileage:0,
    fuelType:'',
    vehicules: []
  }

  // execute the query in componentDidMount
  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log('user:', user)
      console.log('user info:', user.signInUserSession.idToken.payload)
      const vehiculesData = await API.graphql(graphqlOperation(ListVehicules))
      console.log('vehiculesData:', vehiculesData)
      this.setState({
        vehicules: vehiculesData.data.listVehicules.items
      })
    } catch (err) {
      console.log('error fetching vehicules...', err)
    }
  }

  createVehicule = async() => {
    const { licensePlate, description, category, vehType, mileage, fuelType } = this.state
    if (licensePlate === '' || description === '' || category === '' || vehType === '' || mileage === '' || fuelType === '') return
    const vehicule = { 
      licensePlate, 
      description, 
      category, 
      vehType, 
      mileage, 
      fuelType 
    }
    const vehicules = [...this.state.vehicules, vehicule]
    this.setState({
      licensePlate:'',
      description:'',
      category:'',
      vehType:'',
      mileage:0,
      fuelType:'',
      vehicules
    })

    try {
      await API.graphql(graphqlOperation(CreateVehicule, { input: vehicule }))
      console.log('vehicule created!')
    } catch (err) {
      console.log('error creating vehicule...', err)
    }

  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSetMileage = (event) => {
    this.setState({
      mileage: parseInt(event.target.value)
    })
  }  

  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Vehicule Maintenance</h1>
        </Jumbotron>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>License plate</th>
                <th>Description</th>
                <th>Category</th>
                <th>Type</th>
                <th>Mileage</th>
                <th>Fuel</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.vehicules.map((vehicule, index) => (
                <tr key={index}>
                  <td>{vehicule.licensePlate}</td>
                  <td>{vehicule.description}</td>
                  <td>{vehicule.category}</td>
                  <td>{vehicule.vehType}</td>
                  <td>{vehicule.mileage}</td>
                  <td>{vehicule.fuelType}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
          <Form>
            <Form.Text className="text-muted">Add a vehicule to the corporate fleet</Form.Text>
            <Form.Group controlId="licensePlate">
              <Form.Label>License plate</Form.Label>
              <Form.Control name="licensePlate" placeholder="Enter a license plate" onChange={this.onChange} value={this.state.name} />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" placeholder="Enter a description" onChange={this.onChange} value={this.state.name} />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control name="category" placeholder="SE,P,M,SUVPP,SUV..." onChange={this.onChange} value={this.state.name} />
            </Form.Group>
            <Form.Group controlId="vehType">
              <Form.Label>Type</Form.Label>
              <Form.Control name="vehType" placeholder="VP,VU" onChange={this.onChange} value={this.state.name} />
            </Form.Group>
            <Form.Group controlId="mileage">
              <Form.Label>Mileage</Form.Label>
              <Form.Control name="mileage" placeholder="0" onChange={this.onSetMileage} value={this.state.name} />
            </Form.Group>
            <Form.Group controlId="fuelType">
              <Form.Label>Fuel</Form.Label>
              <Form.Control name="fuelType" placeholder="diesel, essence, hybrid, electric" onChange={this.onChange} value={this.state.name} />
            </Form.Group>
            <Button variant="primary" onClick={this.createVehicule}>Add</Button>
          </Form>
      </Container>
    )
  }

}

export default withAuthenticator(App, { includeGreetings: true })
