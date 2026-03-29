import { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import { appointments, type Appointment } from "./StaticData/AppointmentData";
const AppointmentList = () => {
  const [appointmentsList, setAppointmentsList] = useState<Appointment[]>(appointments);
  const handleCancel = (id: string) => {
    console.log("delete this appointment please ===>>>", id);
    const filteredAppointments = appointmentsList.filter((apt) => apt.id !== id);
    setAppointmentsList(filteredAppointments);

    console.log("filtered", filteredAppointments);
  };
  useEffect(() => {
    setAppointmentsList(appointments);
  }, []);

  console.log("appointments=>>>>>>>>>>", appointments);
  return (
    <div className="p-4">
      {appointmentsList.map((apt) => {
        return (
          <div key={apt.id}>
            <AppointmentCard
              handleCancel={handleCancel}
              id={apt.id}
              avatar={apt.avatar}
              date={apt.date}
              department={apt.department}
              doctorName={apt.doctorName}
              location={apt.location}
              notes={apt.notes}
              patientName={apt.patientName}
              status={apt.status}
              time={apt.time}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentList;
