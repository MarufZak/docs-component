import React from 'react';
import TableOfContents from '../TableOfContents/TableOfContents';
import styles from './Docs.module.css';

function Docs({ children }) {
  const containerRef = React.useRef();
  return (
    <div className={styles.wrapper}>
      <div className={styles.docs} ref={containerRef}>
        {children}
      </div>
      <TableOfContents containerRef={containerRef} />
    </div>
  );
}

export default Docs;
