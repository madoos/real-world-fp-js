import React, {useEffect, useState} from 'react';
import {curry} from 'ramda';
import {of} from 'rxjs';

const fromStream = curry((streamHandler, BaseComponent) => props => {
  const [data, changeState] = useState({});

  useEffect(() => {
    const subscription = streamHandler(of(props), props).subscribe(changeState);
    return () => subscription.unsusbcribe();
  }, []);

  return <BaseComponent {...data} />;
});

export default fromStream;
