import {
  CustomersDataSource,
  FieldsDataSource,
  IntegrationsDataSource,
  LocationsDataSource,
  ServicesDataSource,
  TicketsDataSource,
} from '.'

export type Sources = ReturnType<typeof createSources>

export const createSources = () => ({
  fields: new FieldsDataSource(),
  customers: new CustomersDataSource(),
  locations: new LocationsDataSource(),
  integrations: new IntegrationsDataSource(),
  services: new ServicesDataSource(),
  tickets: new TicketsDataSource(),
})