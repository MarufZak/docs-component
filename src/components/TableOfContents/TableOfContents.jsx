import React from 'react';
import styles from './TableOfContents.module.css';

function TableOfContents({ containerRef, ...props }) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const newItems = [];
    const levelTwoHeadings = containerRef.current.querySelectorAll('h2');

    for (let i = 0; i < levelTwoHeadings.length; i++) {
      const heading = levelTwoHeadings[i];
      const text = heading.innerHTML;

      if (typeof text !== 'string') {
        throw new Error(`Children of heading tag should be text!`);
      }

      const id = text.replace(/ /g, '-').toLowerCase();
      heading.setAttribute('id', id);

      newItems.push({
        id: i,
        url: `#${id}`,
        title: text,
      });
    }

    setItems(newItems);
  }, [containerRef]);

  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>Contents</h3>
        <ul className={styles.list}>
          {items?.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                <a className={styles.link} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TableOfContents;
