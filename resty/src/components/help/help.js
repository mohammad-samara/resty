import React from 'react';

function Help(props) {
  return (
    <div>
      <h1>how to use the application</h1>
      <ol>
          <li>
              input the targeted api url
          </li>
          <li>
              choose the correct method
          </li>
          <li>
              hit go button
          </li>
          <li>
              results will be shown in the result box at the bottom of the page
          </li>
          <li>
              there is a history page, use it to see previous inputs
          </li>
      </ol>
    </div>
  );
}
export default Help;