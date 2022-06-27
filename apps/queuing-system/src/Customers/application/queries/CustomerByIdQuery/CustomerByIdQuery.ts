import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class CustomerByIdQuery implements IQuery {
  public constructor(
    public readonly id: Guid,
    public readonly organizationId: Guid
  ) {}
}
