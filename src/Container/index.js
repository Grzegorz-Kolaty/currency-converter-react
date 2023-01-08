import "./style.css";

const Container = ({children}) => {
  return (
    <main className="container">
      {children}
    </main >
  )
};

export default Container;