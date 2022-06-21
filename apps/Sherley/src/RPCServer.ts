import { Producers } from '@turnly/rpc'
import { CustomersServer } from 'Customers/infrastructure/api/rpc'
import { CustomerFactory } from 'Customers/infrastructure/factories/CustomerFactory'
import { TicketsServer } from 'Tickets/infrastructure/api/rpc'
import { TicketsFactory } from 'Tickets/infrastructure/factories/TicketsFactory'

/**
 * Servers
 */
const ticketsServer = new TicketsServer(TicketsFactory.getController())
const customersServer = new CustomersServer(CustomerFactory.getController())

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.Sherley.TicketsService,
    implementation: ticketsServer.implementation,
  },
  {
    definition: Producers.Sherley.CustomersService,
    implementation: customersServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
