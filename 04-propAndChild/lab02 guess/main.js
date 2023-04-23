function Car(props) {
    console.log(props.brand); // * honda
    console.log(props.price); // ** 100000
    console.log(props.color); // *** undefine
    return <div>Car</div>;
  }
  ReactDOM.render(<Car brand="Honda" price="1000000" />, document.getElementById('root'));
  // crash app