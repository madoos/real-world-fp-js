import {Brand} from '../components'

import {fromStream} from '../hocs'
import {split, withDelay} from '../utils'
import {pluck, scan, map} from 'rxjs/operators'
import {concat} from 'ramda'

const enhance = fromStream(props$ => {
  return props$.pipe(
    pluck('name'),
    split(''),
    withDelay(120),
    scan(concat),
    map(name => ({name}))
  )
})

export default enhance(Brand)
