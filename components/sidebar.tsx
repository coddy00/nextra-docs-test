import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2>Documentation Navigation</h2>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#api">API</a></li>
        <li><a href="#examples">Examples</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;