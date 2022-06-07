import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/shared'

export type AnnounceTicketPayload = {
  id: Guid
  companyId: Guid
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
  public constructor(public readonly payload: AnnounceTicketPayload) {}
}