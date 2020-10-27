import React, { useState } from 'react';
import classNames from "classnames";
import { hot } from 'react-hot-loader';

import { FlexTextarea, Textarea, InputSize, InputSkin, InputTheme } from '../../src';

import styles from './demo.scss';

function FlexTextareaDemo() {
  const [value,  setValue] = useState('Hello. I am growable text area 🎉');
  const [size, setSize] = useState<keyof typeof InputSize>(InputSize.xl);
  const [skin, setSkin] = useState<keyof typeof InputSkin>(InputSkin.default);
  const [theme, setTheme] = useState<keyof typeof InputTheme>(InputTheme.default);
  
  return (
    <section>
      
      <h1>Flex textarea</h1>
      
      <p>This field can grow both in width and height. But you are still able to get control over width and height by css</p>
      
      <div className={styles.controlContainer}>
        <label className={styles.control}>
          Size:
          <select name="size" id="size" value={size} onChange={(e) => setSize(e.target.value as InputSize)}>
            { Object.keys(InputSize).map((size) => (<option value={size}> { size } </option>)) }
          </select>
        </label>
  
        <label className={styles.control}>
          Skin:
          <select name="skin" id="skin" value={skin} onChange={(e) => setSkin(e.target.value as InputSkin)}>
          { Object.keys(InputSkin).map((skin) => (<option value={skin}> { skin } </option>)) }
        </select>
        </label>

        <label className={styles.control}>
          Theme:
          <select name="theme" id="theme" value={theme} onChange={(e) => setTheme(e.target.value as InputTheme)}>
          { Object.keys(InputTheme).map((theme) => (<option value={theme}> { theme } </option>)) }
        </select>
        </label>
      </div>
      
      <pre className={styles.pre}>
        {
          `
  <FlexTextarea
    size={size}
    skin={skin}
    theme={theme}
    className={styles.flexTextarea}
    value={value}
    placeholder={'Flex textarea field'}
    onChange={ event => setValue(event.target.value) }/>
          `
        }
      </pre>
      <div className={classNames({ [styles.themeDark]: theme == InputTheme.dark }, styles.demoBlock)}>
        
        <FlexTextarea
          size={size}
          skin={skin}
          theme={theme}
          className={styles.flexTextarea}
          value={value}
          placeholder={'Flex textarea field'}
          onChange={ event => setValue(event.target.value) }/>
      </div>
    
    </section>
  );
}

function TextareaDemo() {
  const [value,  setValue] = useState('');
  const [size, setSize] = useState<keyof typeof InputSize>(InputSize.m);
  const [skin, setSkin] = useState<keyof typeof InputSkin>(InputSkin.default);
  const [theme, setTheme] = useState<keyof typeof InputTheme>(InputTheme.default);
  
  return (
    <section>
      
      <h1>Growable textarea</h1>
      
      <p>
        This is a simple text field that can grow in height.
        Press enter and textarea will chagen her height according min/max row prop.
        But you still can add css class and have control over min/max height of textarea
      </p>
  
      <div className={styles.controlContainer}>
        <label className={styles.control}>
          Size:
          <select name="size" id="size" value={size} onChange={(e) => setSize(e.target.value as InputSize)}>
            { Object.keys(InputSize).map((size) => (<option value={size}> { size } </option>)) }
          </select>
        </label>
    
        <label className={styles.control}>
          Skin:
          <select name="skin" id="skin" value={skin} onChange={(e) => setSkin(e.target.value as InputSkin)}>
            { Object.keys(InputSkin).map((skin) => (<option value={skin}> { skin } </option>)) }
          </select>
        </label>
    
        <label className={styles.control}>
          Theme:
          <select name="theme" id="theme" value={theme} onChange={(e) => setTheme(e.target.value as InputTheme)}>
            { Object.keys(InputTheme).map((theme) => (<option value={theme}> { theme } </option>)) }
          </select>
        </label>
      </div>
      
      <pre className={styles.pre}>
        {
          `
   <Textarea
     minRows={1}
     maxRows={5}
     size={size}
     skin={skin}
     theme={theme}
     placeholder={'Auto-grow textarea field'}
     onChange={event => setValue(event.target.value)}/>
        `}
      </pre>
      <div className={classNames({ [styles.themeDark]: theme == InputTheme.dark }, styles.demoBlock)}>
  
        <Textarea
          value={value}
          size={size}
          skin={skin}
          theme={theme}
          placeholder={'Auto-grow textarea field'}
          onChange={ event => setValue(event.target.value) }/>
      </div>
    
    </section>
  );
}

function App() {
  
  return (
    <div className={styles.container}>
      
      <FlexTextareaDemo/>
      <TextareaDemo/>
    </div>
  );
}

export default hot(module)(App);
