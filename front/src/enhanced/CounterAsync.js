import {Counter, Spinner} from '../components'
import {withState, withHandlers, lifeCycle, branch} from '../hocs'

import {delay} from '../utils'
import {compose, inc, dec} from 'ramda'

const enhance = compose(
  withState('count', 'updateCountStateWith', 0),
  withHandlers({
    increment: ({updateCountStateWith}) => updateCountStateWith(inc),
    decrement: ({updateCountStateWith}) => updateCountStateWith(dec),
  }),
  lifeCycle({
    componentDidMount: async component => {
      await delay(3000)
      component.props.updateCountStateWith(inc)
    },
  }),
  branch(({count}) => count <= 0, Spinner)
)

export default enhance(Counter)
