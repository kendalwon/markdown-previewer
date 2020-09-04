import React from 'react';
import marked from 'marked';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder
    };
  }

  onChange = (e) => {
    const input = e.target.value;
    this.setState({ input })
  }
  
  getMarkdownText = () => {
    let content = this.state.input;
    let markup = marked(content);
    return { __html: markup };
  }

  render() {
    const { input } = this.state;
    const getHTML = (markdown) => {
      return marked(markdown);
    };
    return (
      <div id="app">
        <div id="editorBox">
          <h1 className="title">Editor</h1>
          <textarea id="editor" onChange={this.onChange}>{this.state.input}
          </textarea>
        </div>
        <div id="previewBox">
          <h1 className="title">Previewer</h1>
          <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
        </div>
      </div>
    );
  } 
}

marked.setOptions({
  gfm: true,
  breaks: true
});

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWQxgNCy83WizuptwAnVw_zfRL_Hhujd8GaQ&usqp=CAU)`

export default App;
