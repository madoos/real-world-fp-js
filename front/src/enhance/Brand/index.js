import {Brand} from 'components';
import {fromStream} from 'hoc';
import {split, withDelay} from 'utils';
import {pluck, scan, map} from 'rxjs/operators';
import {concat, pipe} from 'ramda';

const sequenceFrom = (prop, ms) =>
  pipe(
    pluck(prop),
    split(''),
    withDelay(ms),
    scan(concat),
    map(sequence => ({[prop]: sequence})),
  );

const enhance = fromStream((props$, {speed}) => {
  return props$.pipe(sequenceFrom('name', speed));
});

export default enhance(Brand);
