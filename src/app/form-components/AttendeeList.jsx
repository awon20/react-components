import React, { Component } from 'react';

class AttendeeList extends Component {
    render() {
        //console.log(this.props.attendees);
        const attendeeList =  this.props.attendees.map((attendee, index) => {
            // template String in javaScript
            const key = `attendee - ${index}`;
            return (
              <tr key={key}>
                <td>{attendee.name}</td>
                <td>{attendee.tShirtSize}</td>
                <td>
                  <input type="checkbox" checked={attendee.lunch} />
                </td>
              </tr>
            );
        })
        return (
          <table>
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>T-Shirt Größe</th>
                    <th>Bleibt zum Mittagsessen</th>
                  </tr>
              </thead>
              <tbody>
                {attendeeList}
              </tbody>
          </table>
        );
    }
}

export default AttendeeList;