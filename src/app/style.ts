import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`

export default createGlobalStyle`
 html, body {
    #root {
      height: 100%;
    }

    width: 100%;
    height: 100%;
    min-width: 300px;
    overflow-x: hidden;
  }
  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  @-ms-viewport {
    width: device-width;
  }
  body {
    margin: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-variant: tabular-nums;
    line-height: 1.5715;
    background-color: #fff;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
  }
  [tabindex='-1']:focus {
    outline: none !important;
  }
  hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  p {
    margin-top: 0;
    margin-bottom: 1em;
  }
  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline dotted;
    -webkit-text-decoration: underline dotted;
    border-bottom: 0;
    cursor: help;
  }
  address {
    margin-bottom: 1em;
    font-style: normal;
    line-height: inherit;
  }
  input[type='text'],
  input[type='password'],
  input[type='number'],
  textarea {
    -webkit-appearance: none;
  }
  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1em;
  }
  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }
  dt {
    font-weight: 500;
  }
  dd {
    margin-bottom: 0.5em;
    margin-left: 0;
  }
  blockquote {
    margin: 0 0 1em;
  }
  dfn {
    font-style: italic;
  }
  b,
  strong {
    font-weight: bolder;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  a {
    color: #1890ff;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    -webkit-text-decoration-skip: objects;
  }
  a:hover {
    color: #40a9ff;
  }
  a:active {
    color: #096dd9;
  }
  a:active,
  a:hover {
    text-decoration: none;
    outline: 0;
  }
  a:focus {
    text-decoration: none;
    outline: 0;
  }
  a[disabled] {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    pointer-events: none;
  }
  pre,
  code,
  kbd,
  samp {
    font-size: 1em;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1em;
    overflow: auto;
  }
  figure {
    margin: 0 0 1em;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  a,
  area,
  button,
  [role='button'],
  input:not([type='range']),
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
  }
  caption {
    padding-top: 0.75em;
    padding-bottom: 0.3em;
    color: rgba(0, 0, 0, 0.45);
    text-align: left;
    caption-side: bottom;
  }
  th {
    text-align: inherit;
  }
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  input[type='radio'],
  input[type='checkbox'] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }
  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }
  textarea {
    overflow: auto;
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-bottom: 0.5em;
    padding: 0;
    color: inherit;
    font-size: 1.5em;
    line-height: inherit;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  output {
    display: inline-block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none !important;
  }
  mark {
    padding: 0.2em;
    background-color: #feffe6;
  }
  ::-moz-selection {
    color: #fff;
    background: #1890ff;
  }
  ::selection {
    color: #fff;
    background: #1890ff;
  }
`;
