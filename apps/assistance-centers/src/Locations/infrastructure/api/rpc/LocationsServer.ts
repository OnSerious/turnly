/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { NotImplementedError } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'

import { LocationsController } from '../controllers/LocationsController'
import { LocationsMapper } from './LocationsMapper'

export class LocationsServer extends Producers.ServerImplementation<Producers.AssistanceCenters.ILocationsServer> {
  public constructor(
    private readonly locationsController: LocationsController
  ) {
    super()
  }

  @Producers.CallHandler(Producers.AssistanceCenters.GetLocationResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.AssistanceCenters.GetLocationRequest,
      Producers.AssistanceCenters.GetLocationResponse
    >,
    callback: Producers.ICallback<Producers.AssistanceCenters.GetLocationResponse>
  ) {
    const { data, meta } = await this.locationsController.getOne({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.AssistanceCenters.GetLocationResponse()
    const location = LocationsMapper.toRPC(data)

    response.setData(location)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: this.getOne.bind(this),
      find: () => {
        throw new NotImplementedError()
      },
    }
  }
}
