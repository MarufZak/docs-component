import React from 'react';
import styles from './TableOfContents.module.css';

function TableOfContents({ containerRef, ...props }) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    let newItems = [];

    const levelTwoHeadings = containerRef.current.querySelectorAll('h2');
    for (let i = 0; i < levelTwoHeadings.length; i++) {
      const heading = levelTwoHeadings[i];
      const text = heading.innerHTML;

      const id = text.replace(/ /g, '-').toLowerCase();
      heading.setAttribute('id', id);

      newItems.push({
        id: Math.random(),
        url: `#${id}`,
        title: text,
        sublinks: [],
      });
    }

    const levelThreeHeadings = containerRef.current.querySelectorAll('h3');
    for (let i = 0; i < levelThreeHeadings.length; i++) {
      const heading = levelThreeHeadings[i];
      const id = heading.innerHTML.replace(/ /g, '-').toLowerCase();

      heading.setAttribute('id', id);

      let closestLevelTwoHeadingTitle;
      let currCheckingElement = heading;
      for (let i = 0; i < 100; i++) {
        // FIX!
        const prevSibling = currCheckingElement.previousSibling;
        if (prevSibling.nodeName === 'H2') {
          closestLevelTwoHeadingTitle = prevSibling.innerHTML;
          break;
        }
        currCheckingElement = prevSibling;
      }

      for (let i = 0; i < newItems.length; i++) {
        const item = newItems[i];

        if (item.title === closestLevelTwoHeadingTitle) {
          item.sublinks.push({
            id: Math.random(),
            title: heading.innerHTML,
            url: `#${id}`,
          });
        }
      }
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
                {item.sublinks.length > 0 && (
                  <ul className={styles.list}>
                    {item.sublinks.map((sublink) => {
                      return (
                        <li key={sublink.id} className={styles.listItem}>
                          <a className={styles.link} href={sublink.url}>
                            {sublink.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TableOfContents;
