import React from 'react';


export default ({ gist }) => (
  <div>
    <h1>{gist.description || '[no description]'}</h1>
    <p><a href={gist.html_url}>view on GitHub</a></p>
    <p>Files:</p>
    <ul>
      {
        Object.keys(gist.files).map(key => (
          <li key={key}>
            <a href={gist.files[key].raw_url}>
              {key}
            </a>
          </li>
        ))
      }
    </ul>
  </div>
);
