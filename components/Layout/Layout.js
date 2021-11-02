// Layout is responsible for making sure every page is wrapped with
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";
export default function Layout(props) {
  return (
    <div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
