import styles from "./flexcontainer.module.css"

export default function FlexContainer({ children })
{
  return <div className={styles.flexContainer}>{children}</div>;
}
