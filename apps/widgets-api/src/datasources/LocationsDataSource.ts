/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { GraphException } from 'shared/GraphException'

import { Locations } from '../shared/api'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource()
export class LocationsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    const { data: location, meta } = await Locations.getOne({
      id,
    })

    if (!location) throw new GraphException(meta)

    return location
  }
}
