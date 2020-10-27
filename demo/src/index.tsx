import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import { FlexTextarea, Textarea } from '../../src';

import styles from './demo.scss';

function App() {
  const [value,  setValue] = useState('');
  
  return (
    <div>
      <section>
        
        <h1>Flex textarea</h1>
        
        <FlexTextarea
          className={styles.flexTextarea}
          value={value}
          placeholder={'Flex textarea field'}
          onChange={ event => setValue(event.target.value) }/>
      </section>
     
      <section>
        
        <h1>Common textarea</h1>
  
        <Textarea
          onChange={ event => console.log(event.target.value) }/>
      </section>
    </div>
   
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
