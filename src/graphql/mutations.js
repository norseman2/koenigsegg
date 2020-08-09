/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVehicule = /* GraphQL */ `
  mutation CreateVehicule(
    $input: CreateVehiculeInput!
    $condition: ModelVehiculeConditionInput
  ) {
    createVehicule(input: $input, condition: $condition) {
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
export const updateVehicule = /* GraphQL */ `
  mutation UpdateVehicule(
    $input: UpdateVehiculeInput!
    $condition: ModelVehiculeConditionInput
  ) {
    updateVehicule(input: $input, condition: $condition) {
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
export const deleteVehicule = /* GraphQL */ `
  mutation DeleteVehicule(
    $input: DeleteVehiculeInput!
    $condition: ModelVehiculeConditionInput
  ) {
    deleteVehicule(input: $input, condition: $condition) {
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
export const createMaintenanceTask = /* GraphQL */ `
  mutation CreateMaintenanceTask(
    $input: CreateMaintenanceTaskInput!
    $condition: ModelMaintenanceTaskConditionInput
  ) {
    createMaintenanceTask(input: $input, condition: $condition) {
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
export const updateMaintenanceTask = /* GraphQL */ `
  mutation UpdateMaintenanceTask(
    $input: UpdateMaintenanceTaskInput!
    $condition: ModelMaintenanceTaskConditionInput
  ) {
    updateMaintenanceTask(input: $input, condition: $condition) {
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
export const deleteMaintenanceTask = /* GraphQL */ `
  mutation DeleteMaintenanceTask(
    $input: DeleteMaintenanceTaskInput!
    $condition: ModelMaintenanceTaskConditionInput
  ) {
    deleteMaintenanceTask(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
