import Animation from '../../Animation'

import {branch, withState, lifeCycle} from '../../../hocs'
import {compose, always} from 'ramda'

const enhance = compose(
  withState('hidden', 'updateHiddenState', true),
  lifeCycle({
    componentWillReceiveProps: props => {
      const {hidden, count, updateHiddenState} = props
      if (count === 10 && hidden) {
        updateHiddenState(isHidden => !isHidden)
      }
    },
  }),
  branch(({count, hidden}) => hidden, always(null))
)

export default enhance(Animation)
