/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVehicule = /* GraphQL */ `
  query GetVehicule($id: ID!) {
    getVehicule(id: $id) {
      id
      licensePlate
      description
      category
      vehType
      mileage
      fuelType
      createdAt
      updatedAt
    }
  }
`;
export const listVehicules = /* GraphQL */ `
  query ListVehicules(
    $filter: ModelVehiculeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        licensePlate
        description
        category
        vehType
        mileage
        fuelType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMaintenanceTask = /* GraphQL */ `
  query GetMaintenanceTask($id: ID!) {
    getMaintenanceTask(id: $id) {
      id
      vehicule {
        id
        licensePlate
        description
        category
        vehType
        mileage
        fuelType
        createdAt
        updatedAt
      }
      taskType
      status
      duration
      comments
      events {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMaintenanceTasks = /* GraphQL */ `
  query ListMaintenanceTasks(
    $filter: ModelMaintenanceTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaintenanceTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        taskType
        status
        duration
        comments
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      eventType
      timestamp
      comments
      maintenanceTask {
        id
        taskType
        status
        duration
        comments
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventType
        timestamp
        comments
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      task {
        id
        taskType
        status
        duration
        comments
        createdAt
        updatedAt
      }
      startDate
      endDate
      comments
      createdAt
      updatedAt
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startDate
        endDate
        comments
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
