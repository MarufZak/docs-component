import styles from './ButtonDocs.module.css';

function ButtonDocs() {
  return (
    <div className={styles.wrapper}>
      <h1>Button Component</h1>
      <article className={styles.article}>
        <h2>Basics</h2>
        <p>
          The Button component represents a clickable button element in a React
          application.
        </p>
        <h2>Props</h2>
        <p>
          The Button component accepts the following props: onClick (function,
          required) Event handler for button click. It is triggered when the button
          is clicked. disabled (boolean, optional) Specifies if the button should be
          disabled. When set to true, the button will be unclickable and visually
          disabled. Defaults to false
        </p>
        <h2>Styling</h2>
        <p>
          The Button component can be customized using CSS or CSS-in-JS libraries to
          match the desired visual style of your application. There are multiple ways
          to apply styles to the Button component: Inline Styles You can apply inline
          styles directly to the Button component using the style prop. This allows
          you to specify individual CSS properties as JavaScript objects. For example
          You can assign one or more CSS classes to the Button component using the
          className prop. These classes can be defined in an external CSS file or in
          a CSS-in-JS solution such as styled-components. For example:
        </p>
      </article>
      <article className={styles.article}>
        <h2>CSS-in-js</h2>
        <p>
          The Button component represents a clickable button element in a React
          application.
        </p>
        <h2>Props</h2>
        <p>
          The Button component accepts the following props: onClick (function,
          required) Event handler for button click. It is triggered when the button
          is clicked. disabled (boolean, optional) Specifies if the button should be
          disabled. When set to true, the button will be unclickable and visually
          disabled. Defaults to false
        </p>
        <h2>Styling</h2>
        <p>
          The Button component can be customized using CSS or CSS-in-JS libraries to
          match the desired visual style of your application. There are multiple ways
          to apply styles to the Button component: Inline Styles You can apply inline
          styles directly to the Button component using the style prop. This allows
          you to specify individual CSS properties as JavaScript objects. For example
          You can assign one or more CSS classes to the Button component using the
          className prop. These classes can be defined in an external CSS file or in
          a CSS-in-JS solution such as styled-components. For example:
        </p>
      </article>
    </div>
  );
}

export default ButtonDocs;
