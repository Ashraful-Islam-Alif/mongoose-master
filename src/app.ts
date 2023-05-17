import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting a test data into mongodb
  /**
   * step1: Interface
   * step2: Schema
   * step3: Model
   * step4: Database Quesry
   *  */

  //creating an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    parmanentAddress: string;
  }

  //creating schema using interface
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },

    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    parmanentAddress: {
      type: String,
      required: true,
    },
  });

  //creating model using interface and intserting data
  const User = model<IUser>("User", userSchema);
  const creatUserToDB = async () => {
    const user = new User({
      id: "908213908213",
      role: "student",
      password: "dum daraka",
      name: {
        firstName: "äshraf",
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
    console.log(user);
  };
  creatUserToDB();
});

export default app;
