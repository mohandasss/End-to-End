import { Button, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bookingform,
  type BookingFormType,
} from "./validation/BookingFormValidation";
const BookingForm = () => {



    //RFH
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormType>({
    resolver: zodResolver(Bookingform),
  });




  const onsubmit = (data: BookingFormType) => {
    console.log("data ========>>>>>", data);
  };





  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="w-64 p-4 border border-gray-400  shadow-lg rounded-xl mx-auto h-auto">
          <TextInput
            {...register("email")}
            label=" email"
            placeholder="Enter Email"
            error={errors.email && errors.email.message}
          />
          <TextInput
            {...register("name")}
            label=" Name"
            placeholder="Enter Name"
            error={errors.name && errors.name.message}
          />
          <TextInput
            {...register("age")}
            label=" Age"
            placeholder="Enter Age"
            error={errors.age && errors.age.message}
          />
          <TextInput
            {...register("phoneNumber")}
            label=" phoneNumber"
            placeholder="Enter phoneNumber"
            error={errors.phoneNumber && errors.phoneNumber.message}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
