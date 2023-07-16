import React from 'react';
import styles from './Docs.module.css';

function TableOfContents({ activeItemHash, items, title, ...props }) {
  return (
    <div {...props} className={styles.tableOfContents}>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>{title}</h3>
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
