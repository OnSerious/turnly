/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/shared'

export type AnnounceTicketParams = {
  id: Guid
  organizationId: Guid
  customerId: Guid
  /**
   * @todo Implement the logic to validate the device location of the customer
   *
   *  customerLocation: {
        latitude: number
        longitude: number
      }
   */
}

export class AnnounceTicketCommand implements ICommand {
  public constructor(public readonly params: AnnounceTicketParams) {}
}
