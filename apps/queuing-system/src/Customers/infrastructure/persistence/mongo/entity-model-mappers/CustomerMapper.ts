/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/shared'
import { ICustomersMapper } from 'Customers/domain/contracts/ICustomersMapper'
import { Customer } from 'Customers/domain/entities/Customer'

import { CustomerDocument, CustomerModel } from '../models/CustomerModel'

export class CustomerMapper implements ICustomersMapper<CustomerDocument> {
  public toEntity(document: CustomerDocument): Customer {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Customer>>()

    return Customer.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Customer): CustomerDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new CustomerModel({ ...attrs, _id })
  }

  public toEntityList(documents: CustomerDocument[]): Customer[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Customer[]): CustomerDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
