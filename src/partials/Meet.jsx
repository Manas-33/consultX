import React, { useState } from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';

export default function Meet() {
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);

  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
  });

  const handleStartTimeSelect = (startTimeEventEmit) => {
    setSelectedTimeSlots([...selectedTimeSlots, startTimeEventEmit]);
  }

  return (
    <div>
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={30}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={handleStartTimeSelect}
        startTimeListStyle="scroll-list"
      />
      <div>
        <h2>Selected Time Slots:</h2>
        <ul>
          {selectedTimeSlots.map((timeSlot, index) => (
            <li key={index}>
              {timeSlot.startTime && timeSlot.startTime.toString()} - {timeSlot.endTime && timeSlot.endTime.toString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { ScheduleMeeting } from 'react-schedule-meeting';

// function SelectedTimeSlots({ }) {

//     const availableTimeslots = [
//         { id: 0, startTime: new Date().setHours(11, 0, 0, 0), endTime: new Date().setHours(11, 30, 0, 0) },
//         { id: 1, startTime: new Date().setHours(11, 30, 0, 0), endTime: new Date().setHours(12, 0, 0, 0) },
//       ];


//     return (
//         <div>
//             <ScheduleMeeting
//                 borderRadius={10}
//                 primaryColor="#3f5b85"
//                 eventDurationInMinutes={30}
//                 availableTimeslots={availableTimeslots}
//                 selectedTimeSlots={availableTimeslots}
//                 startTimeListStyle="scroll-list"
//             />

//         </div>
//     );
// }

// export default function Example() {
//     const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
//     const [highlightedTimeSlots, setHighlightedTimeSlots] = useState([]);

//     const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
//         return {
//             id,
//             startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
//             endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
//         };
//     });

//     const handleStartTimeSelect = (startTimeEventEmit) => {
//         setSelectedTimeSlots([...selectedTimeSlots, startTimeEventEmit]);
//         setHighlightedTimeSlots([...highlightedTimeSlots, startTimeEventEmit.id]);
//     }

//     return (
//         <div>
//             <ScheduleMeeting
//                 borderRadius={10}
//                 primaryColor="#3f5b85"
//                 eventDurationInMinutes={30}
//                 availableTimeslots={availableTimeslots}
//                 onStartTimeSelect={handleStartTimeSelect}
//                 startTimeListStyle="scroll-list"
//                 highlightedTimeSlots={highlightedTimeSlots}
//             />
//             <SelectedTimeSlots />
//         </div>
//     );
// }
