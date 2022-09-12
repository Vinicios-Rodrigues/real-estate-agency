import styles from "./layout.module.scss";

interface AuxProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: AuxProps) => {
  return <div className={styles.container}>{children}</div>;
};
