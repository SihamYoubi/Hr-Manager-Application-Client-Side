import { useForm } from "react-hook-form";
import { useEffect } from "react";

const LeaveRequestForm = () => {

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user ", user);
    if (user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
    }
  }, [setValue]);

  const onSubmit = data => {
    console.log("Leave Request Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">Leave Request Form</h2>

      {/* first name */}
      <div>
      <label className="block text-sm font-medium">First Name</label>
      <input 
      type="text"
      {...register("firstName", {required: true})}
      className="w-full mt-1 p-2 border rounded"
      readOnly
      />
      {errors.firstName && <p className="text-red-500 text-sm">This field is required</p>}
      </div>

      {/* last name */}
      <div>
      <label className="block text-sm font-medium">Last Name</label>
      <input 
      type="text"
      {...register("lastName", {required: true})}
      className="w-full mt-1 p-2 border rounded"
      readOnly
      />
      {errors.lastName && <p className="text-red-500 text-sm">This field is required</p>}
      </div>
      
      {/* Type of Leave */}
      <div>
        <label className="block text-sm font-medium">Type of Leave</label>
        <select {...register("typeOfLeave", { required: true })} className="w-full mt-1 p-2 border rounded">
          <option value="">Select...</option>
          <option value="AnnualLeave">Annual Leave</option>
          <option value="SickLeave">Sick Leave</option>
          <option value="MaternityLeave">Maternity Leave</option>
          <option value="PaternityLeave">Paternity Leave</option>
          <option value="ParentalLeave">Parental Leave</option>
          <option value="BereavementLeave">Bereavement Leave</option>
          <option value="MariageLeave">Marriage Leave</option>
          <option value="EmergencyLeave">Emergency Leave</option>
        </select>
        {errors.typeOfLeave && <p className="text-red-500 text-sm">This field is required</p>}
      </div>

      {/* Start Date */}
      <div>
        <label className="block text-sm font-medium">Start Date</label>
        <input
          type="date"
          {...register("startDate", { required: true })}
          className="w-full mt-1 p-2 border rounded"
        />
        {errors.startDate && <p className="text-red-500 text-sm">This field is required</p>}
      </div>

      {/* End Date */}
      <div>
        <label className="block text-sm font-medium">End Date</label>
        <input
          type="date"
          {...register("endDate", { required: true })}
          className="w-full mt-1 p-2 border rounded"
        />
        {errors.endDate && <p className="text-red-500 text-sm">This field is required</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500"
      >
        Submit Request
      </button>
    </form>
  );
};

export default LeaveRequestForm;
