import { Button } from "@mantine/core";
import { type Appointment } from "./StaticData/AppointmentData";

// type AppointmentCardProps ={
//   appointments: Appointment,
//   handleCancel : ()=>void
// }

const AppointmentCard = ({
  handleCancel,
  id,
  avatar,
  date,
  department,
  doctorName,
  location,
  notes,
  patientName,
  status,
  time,
}: Appointment) => {
  console.log("props=>>>>>>>>>>", {
    id,
    avatar,
    date,
    department,
    doctorName,
    location,
    notes,
    patientName,
    status,
    time,
  });
  return (
    <div className="w-full bg-blue-50/50 h-32 shadow-xl rounded-lg ">
      <div className="p-4 grid grid-cols-4 gap-4">
        <div>
          <img
            className="h-12 w-12 object-cover rounded-full"
            src={avatar}
            alt=""
          />
          <h2 className="text-lg font-semibold">{patientName}</h2>
        </div>
        <div>
          <p>
            {doctorName} - {department}
          </p>
          <p>
            {date} at {time}
          </p>
        </div>
        <div>
          <p>Status: {status}</p>
          <p>Location: {location}</p>
          {notes && <p>Notes: {notes}</p>}
        </div>
        <Button color="" radius="md" onClick={() => handleCancel(id)}>
          Cancel appointment
        </Button>
      </div>
    </div>
  );
};

export default AppointmentCard;
