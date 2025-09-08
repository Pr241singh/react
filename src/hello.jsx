function Hello(){

  var myName = "Preeti";
  let fullName = () => {
    return "Preeti Singh"
  }
  return <h3>
    Hello this is the future speaking. I am your master {fullName()} 
  </h3>
}

export default Hello;