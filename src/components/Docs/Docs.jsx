import React from 'react';
import TableOfContents from './TableOfContents';
import styles from './Docs.module.css';

function Docs({ title, children }) {
  const [items, setItems] = React.useState([]);
  const [activeItemHash, setActiveItemHash] = React.useState('');
  const containerRef = React.useRef();

  React.useEffect(() => {
    let newItems = [];

    const headings = containerRef.current.querySelectorAll('h2,h3');
    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      const headingText = heading.innerHTML;

      const id = headingText.replace(/ /g, '-').toLowerCase();
      heading.setAttribute('id', id);

      const item = {
        id: Math.random(),
        hash: `#${id}`,
        title: headingText,
        sublinks: [],
      };

      if (heading.nodeName === 'H2') {
        newItems.push(item);
      } else if (heading.nodeName === 'H3') {
        newItems[newItems.length - 1].sublinks.push(item);
      }
    }

    setItems(newItems);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItemHash(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: `0px 0px ${-window.innerHeight + 16}px 0px`, // 16px is scroll-padding-top property in index.css
      }
    );

    const headings = containerRef.current.querySelectorAll('h2, h3');
    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      observer.observe(heading);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.docs} ref={containerRef}>
        {children}
      </div>
      <TableOfContents activeItemHash={activeItemHash} items={items} title={title} />
    </div>
  );
}

export default Docs;
