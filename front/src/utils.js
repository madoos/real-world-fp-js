import {Observable, of} from 'rxjs'
import {concatMap, delay as _delay} from 'rxjs/operators'
import {curry} from 'ramda'

const split = curry((separator, source) => {
  return new Observable(observer => {
    source.subscribe(data =>
      data.split(separator).forEach(letter => observer.next(letter))
    )
  })
})

const withDelay = ms => concatMap(x => of(x).pipe(_delay(ms)))

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export {withDelay, delay, split}
