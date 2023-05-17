import User from "./user.model";

export const creatUserToDB = async () => {
  const user = await new User({
    id: "908224342134",
    role: "student",
    password: "dum daraka",
    name: {
      firstName: "äshrafu",
      middleName: "islam",
      lastName: "alif",
    },
    dateOfBirth: "123908123",
    gender: "male",
    email: "dfr@gmail.com",
    contactNo: "90873213",
    emergencyContactNo: "98734234",
    presentAddress: "Ulfa",
    parmanentAddress: "kulfa",
  });
  await user.save();
  return user;
};
