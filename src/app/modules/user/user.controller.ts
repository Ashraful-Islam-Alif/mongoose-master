import { NextFunction, Request, Response } from "express";
import { creatUserToDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await creatUserToDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

//Pattern
//Router -> Controller -> Service
