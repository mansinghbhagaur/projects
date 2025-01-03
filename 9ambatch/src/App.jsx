import React from "react";
import Class1 from "./hooks/Class1";
import ThemeSwitcher from "./hooks/ThemeSwitcher";
import Effect from "./hooks/Effect";
import { ContextApi } from "./context/Context";
import UseMemo from "./hooks/UseMemo";
import UseRef from "./hooks/UseRef";
import UseLayoutEffect from "./hooks/UseLayoutEffect";
import CounterApp from "./reducer/CounterApp";

const App = () => {
  return (
    // <ContextApi.Provider value={'man'}>
    // <Effect />
    // </ContextApi.Provider>
    // <UseMemo />
    // <UseRef />
    // <UseLayoutEffect />
    <CounterApp />
  );
};

export default App;

// import React from "react";
// // import Student from "./lifecyclemethod/Student";

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       message: "hi man",
//     };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("components did mount");
//   }

//   componentDidUpdate() {
//     console.log("components did update");
//   }

//   componentWillUnmount() {
//     console.log("componnetWillUnmount");
//   }

//   render() {
//     console.log("rendar");
//     // console.log(this.state.message);
//     return (
//       <>
//         <h1>Class Components</h1>
//         <h2>{this.state.message}</h2>
//         {/* <Student message={this.state.message} /> */}
//         <button onClick={() => this.setState({ message: "hello students" })}>
//           Update
//         </button>
//       </>
//     );
//   }
// }

// import React from "react";
// import Student from "./components/Student";

// const App = () => {
//   // const students = {
//   //   name: "John Doe",
//   //   age: 20,
//   //   grade: "A",
//   // };

//   return (
//     <div>
//       {/* <h1>App Functional Components</h1> */}
//       {/* functional components props use */}
//       {/* <Student title="Student 1" name="John Doe" age={20} />
//       <Student
//         title="student 2"
//         students={{
//           name: "John Doe",
//           age: 20,
//           grade: "A",
//         }}
//       />
//       <Student title="student 3" /> */}

//       {/* class components */}
//       {/* <Student title={"Student 1"} />
//       <Student
//         title="Student 2"
//         subTitle="How are you?
//       "
//       /> */}

//     </div>
//   );
// };

// export default App;
