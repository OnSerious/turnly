import { Criteria, MongoRepository } from '@turnly/core'
import { Guid, NotImplementedError, Nullable } from '@turnly/shared'
import { ITicketMapper } from 'Tickets/domain/contracts/ITicketMapper'
import { ITicketReadableRepository } from 'Tickets/domain/contracts/ITicketRepository'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument, TicketModel } from '../models/TicketModel'

export class TicketReadableRepository
  extends MongoRepository<Ticket, TicketDocument>
  implements ITicketReadableRepository
{
  public constructor(
    private readonly ticketsMapper: ITicketMapper<TicketDocument>
  ) {
    super(TicketModel)
  }

  public async getById(id: Guid): Promise<Nullable<Ticket>> {
    const document = await this.model.findById(id)

    return document ? this.ticketsMapper.toEntity(document) : null
  }

  public async search(_query: Criteria): Promise<Nullable<Ticket[]>> {
    throw new NotImplementedError()
  }
}