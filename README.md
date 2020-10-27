<video autoplay loop muted inline>
    <source src="/assets/flex-textarea.mp4" type="video/mp4">
    <img src="/assets/flex-textarea-with-text.png" />
</video>

<div>
  <strong>flex-textarea</strong> components which can grow.
</div>

This package is still in the works, please do not use it now.
 
## Features

- **Small**: Just 2 KB gzipped js and 2 KB gzipped css.
- **Fast**: Built with hooks and functional components only.
- **Simple**: The interface is straight forward and easy to use.
- **No dependencies** 

You can try it on [live demo page](https://vovakulikov.github.io/flex-textarea)

## Install

`npm install react-flex-textarea`

## Usage

```js
import { FlexTextarea } from "react-flex-textarea";
import "react-flex-textarea/dist/index.css";

const ControlledTextArea = () => {
  const [value, setValue] = useState('Hello. I am growable text area 🎉');

  return <FlexTextarea value={value} onChange={setValue} />;
};
```

Also you can find a growable `<Textarea />` component in exports


