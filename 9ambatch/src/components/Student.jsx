// import React from "react";

import React from "react";

// const Student = ({students}) => {
//   console.log(students);
//   return (
//     <div>
//       {/* <h1>{title}</h1> */}
//       <h1>hello</h1>
//     </div>
//   );
// };

// export default Student;

class Student extends React.Component {
  constructor() {
    super();
    console.log("constructor call");
  }
  render() {
    console.log(this);
    return (
      <div>
        {/* <h1>{title}</h1> */}
        <h1>hello: {this.props.title}</h1>
        {this.props.subTitle ? <h1>{this.props.subTitle} I'm good</h1> : ""}
      </div>
    );
  }
}

export default Student;
