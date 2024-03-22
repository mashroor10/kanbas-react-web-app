import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples"


function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div>
      <h1>Assignment 4</h1>
      <PassingFunctions theFunction={sayHello} />
      <ReduxExamples/>
      ...
    </div>
  );
}
export default Assignment4;
