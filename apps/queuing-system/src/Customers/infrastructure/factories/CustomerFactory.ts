/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import { CreateCustomerCommandHandler } from 'Customers/application/commands/CreateCustomerCommand'
import { CustomerByIdQueryHandler } from 'Customers/application/queries/CustomerByIdQuery'

import { CustomersController } from '../api/controllers/CustomersController'

export class CustomerFactory {
  public static getController(): CustomersController {
    return Box.resolve<CustomersController>('customersController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve<CustomerByIdQueryHandler>('customerByIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateCustomerCommandHandler>('createCustomerCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
