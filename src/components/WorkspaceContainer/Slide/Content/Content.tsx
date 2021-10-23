import React from 'react';
import c from './Content.module.css';

/* type ContentProps = {
    className: string,
} */

function Content(/* props: ContentProps */) {
    return (
      <div className={`${c.content}`}>
          Content
      </div>
    );
}

export default Content;