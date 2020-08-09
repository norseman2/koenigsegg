/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVehicule = /* GraphQL */ `
  subscription OnCreateVehicule {
    onCreateVehicule {
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
export const onUpdateVehicule = /* GraphQL */ `
  subscription OnUpdateVehicule {
    onUpdateVehicule {
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
export const onDeleteVehicule = /* GraphQL */ `
  subscription OnDeleteVehicule {
    onDeleteVehicule {
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
export const onCreateMaintenanceTask = /* GraphQL */ `
  subscription OnCreateMaintenanceTask {
    onCreateMaintenanceTask {
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
export const onUpdateMaintenanceTask = /* GraphQL */ `
  subscription OnUpdateMaintenanceTask {
    onUpdateMaintenanceTask {
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
export const onDeleteMaintenanceTask = /* GraphQL */ `
  subscription OnDeleteMaintenanceTask {
    onDeleteMaintenanceTask {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment {
    onCreateAppointment {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment {
    onUpdateAppointment {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment {
    onDeleteAppointment {
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
