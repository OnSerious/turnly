import { ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { AgentByIdQuery } from 'Agents/application/queries/AgentByIdQuery'
import { GetAgentPayload } from 'Agents/domain/payloads/GetAgentPayload'

import { validator } from '../validators/AgentValidator'

export class AgentsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async get(params: GetAgentPayload) {
    const agent = await this.queryBus.ask(new AgentByIdQuery(params))

    if (!agent) throw new ResourceNotFoundException()

    return this.respond.ok(agent.toObject())
  }
}