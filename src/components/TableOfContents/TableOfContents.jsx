import React from 'react';
import styles from './TableOfContents.module.css';

function TableOfContents({ containerRef, ...props }) {
  const [items, setItems] = React.useState([]);
  const [activeItemHash, setActiveItemHash] = React.useState('');

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
        hash: `#${id}`,
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
            hash: `#${id}`,
          });
        }
      }
    }

    setItems(newItems);
  }, [containerRef]);

  React.useEffect(() => {
    const changeHandler = (e) => {
      const newHash = e.target.location.hash;
      setActiveItemHash(newHash);
    };
    window.addEventListener('hashchange', changeHandler);

    return () => {
      window.removeEventListener('hashchange', changeHandler);
    };
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let noneSelected = true;
        entries.forEach((entry) => {
          if (entry.boundingClientRect.top <= entry.boundingClientRect.height) {
            const newActiveItemHash = `#${entry.target.getAttribute('id')}`;
            setActiveItemHash(newActiveItemHash);
          }
        });
      },
      {
        rootMargin: '-50px',
      }
    );

    const headings = document.querySelectorAll('h2, h3');
    for (let i = 0; i < headings.length; i++) {
      observer.observe(headings[i]);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>Contents</h3>
        <ul className={styles.list}>
          {items?.map((link) => {
            const hasSublist = link.sublinks.length > 0;
            return (
              <li
                key={link.id}
                className={
                  link.hash === activeItemHash
                    ? `${styles.listItem} ${styles.active}`
                    : styles.listItem
                }
              >
                <a className={styles.link} href={link.hash}>
                  {link.title}
                </a>
                {hasSublist && (
                  <ul className={styles.list}>
                    {link.sublinks.map((sublink) => {
                      return (
                        <li
                          key={sublink.id}
                          className={
                            sublink.hash === activeItemHash
                              ? `${styles.listItem} ${styles.active}`
                              : styles.listItem
                          }
                        >
                          <a className={styles.link} href={sublink.hash}>
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
