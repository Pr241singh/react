/*const User = ({ name, age }) => {
  console.log(name);
  return (
    <>
      <h1>Your name is: {name}</h1>
      <h1>Your age is : {age}</h1>
    </>
  );
};*/

const User = ({ data, name }) => {
  // console.log(name);
  return (
    <>
      <h1>Your name is: {data.name}</h1>
      <h1>Your age is : {data.age}</h1>
      <h1>Your name is: {name.name}</h1>
      <h1>Your email is : {name.email}</h1>
    </>
  );
};

export default User;
