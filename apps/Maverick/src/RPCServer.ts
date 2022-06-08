import { Producers } from '@turnly/rpc'
import { IntegrationsServer } from 'Integrations/infrastructure/api/rpc'
import { IntegrationFactory } from 'Integrations/infrastructure/factories/IntegrationFactory'

/**
 * Servers
 */
export const integrationsServer = new IntegrationsServer(
  IntegrationFactory.getController()
)

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.Maverick.IntegrationsService,
    implementation: integrationsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})