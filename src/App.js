import "./styles.css";


const Button = (props) => <button {...props}>Hello World </button>
const Text = (props) => <p {...props}>Hello World </p>

const withStyles = (Component) => {
   return (props) => {
    const style = {
      padding: "0.8rem 1.5rem",
      color: "green",
      margin: "10px"
    }
    return <Component style={style} {...props} />
   }
}

export default function App() {

  const ButtonwithStyles = withStyles(Button);
  const TextWithStyles = withStyles(Text);

  return (
    <div className="App">
     <ButtonwithStyles />
     <TextWithStyles />
    </div>
  );
}
