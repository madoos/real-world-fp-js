import {Brand} from '../components'

import {fromStream} from '../hocs'
import {split, withDelay} from '../utils'
import {pluck, scan, map} from 'rxjs/operators'
import {concat, pipe} from 'ramda'

const sequenceFrom = (prop, ms) =>
  pipe(
    pluck(prop),
    split(''),
    withDelay(ms),
    scan(concat),
    map(sequence => ({[prop]: sequence}))
  )

const enhance = fromStream(props$ => {
  return props$.pipe(sequenceFrom('name', 120))
})

export default enhance(Brand)
