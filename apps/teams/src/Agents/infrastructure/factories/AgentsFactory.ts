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
import { AgentByIdQueryHandler } from 'Agents/application/queries/AgentByIdQuery'

import { AgentsController } from '../api/controllers/AgentsController'

export class AgentsFactory {
  public static getController(): AgentsController {
    return Box.resolve<AgentsController>('agentsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve<AgentByIdQueryHandler>('agentByIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
