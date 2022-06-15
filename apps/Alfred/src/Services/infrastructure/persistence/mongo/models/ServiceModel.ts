/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Service } from 'Services/domain/entities/Service'

export interface ServiceDocument
  extends Omit<EntityAttributes<Service>, 'id'>,
    Document {}
export type IServiceModel = Model<ServiceDocument>

const schema = new Schema({
  _id: String,
  companyId: {
    type: String,
    required: true,
    index: true,
  },
  locationId: {
    type: String,
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

export const ServiceModel = mongoose.model<ServiceDocument, IServiceModel>(
  'Service',
  schema
)