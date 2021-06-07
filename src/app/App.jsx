import React from "react";
// import { ImageChanger } from './ImageChanger';
// import { Counter } from "./Counter";
// import { CounterPure } from "./CounterPure";
// import { CounterContainer } from "./CounterContainer";

// import { MutabilityErrorExample } from "./mutabilityErrorExample/MutabilityErrorExample";


// const images = [
//   {
//     src: "https://images.freeimages.com/images/large-previews/fec/sunset-rays-1391805.jpg",
//     alt: "Rayons de Soleil couchant",
//   },
//   {
//     src: "https://images.freeimages.com/images/large-previews/859/sunset-1378816.jpg",
//     alt: "coucher du Soleil",
//   },

//   {
//     src: "https://images.freeimages.com/images/large-previews/e30/plane-sunset-1314526.jpg",
//     alt: " Coucher de soleil en avion",
//   },
// ];

import RegisterForms from "./form-components/RegisterForms";
import AttendeeList from "./form-components/AttendeeList";
import Tab from "./tabControlls/Tab";
import TabController from "./tabControlls/TabController";


const mockAttendees = [
  {
    name: "Selina Kyle",
    tShirtSize: "M-M",
    lunch: true,
  },
  {
    name: 'Bruce-wayne',
    tShirtSize: 'M-L',
    lunch: true
  },
    {
    name: 'Diana Prince',
    tShirtSize: 'M-S',
    lunch: false
  }
];
export class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {showImageChanger: true};
  // }

  // UNSAFE_componentWillMount() {
  //   setTimeout(() =>{
  //     this.setState({showImageChanger:false});
  //   }, 3000)
  // }

  constructor(props) {
    super(props);

    this.state = {
      attendeeList: mockAttendees
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(newAttendee){
    this.setState( prevState => {
      return {
        // mutability
          ... prevState,
          attendeeList: [
          ... prevState.attendeeList, 
          newAttendee
        ] 
      } 
      });
  }

  render() {

    // return (
    //   <div>
    //     <h1> Basic Counter </h1>
    //     <Counter />
    //     <hr />
    //     <h1> Pure Counter </h1>
    //     <CounterPure />
    //     <br />
    //     <h1>Counter Stateless</h1>
    //     <CounterContainer />
    //     <hr />
    //     <h1>Problem mit Mutability</h1>
    //     <MutabilityErrorExample />
    //   </div>
    // );
    return (
      <TabController>
        <Tab headline="Registrierung">
          <RegisterForms onSubmit={this.handleSubmit} />
        </Tab>
        <Tab headline="Teilnehmendenliste">
          <AttendeeList attendees={this.state.attendeeList} />
        </Tab>
      </TabController>
    );
  }
}
