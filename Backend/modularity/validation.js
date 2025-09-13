import { body } from "express-validator";

export const chatValidationRules = () => {
  return [
    body("user_query")
      .trim()
      .notEmpty()
      .withMessage("User query cannot be empty.")
      .escape(),

    body("user_language")
      .trim()
      .notEmpty()
      .withMessage("User language cannot be empty.")
      .isIn(["hi", "pa", "mr", "te", "ta"])
      .withMessage("Invalid language code. Supported: hi, pa, mr, te, ta."),

    body("user_location")
      .trim()
      .notEmpty()
      .withMessage("User location cannot be empty.")
      .isLength({ min: 2 })
      .withMessage("User location is too short.")
      .escape(),
  ];
};
