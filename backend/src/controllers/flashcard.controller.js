import { StatusCodes } from "http-status-codes";
import { customErrorResponse, customSuccessResponse } from "../utils/customResponse.js";
import { getUserFlashcardsService } from "../services/flashcard.service.js";

function handleError(res, err) {
  if (err.statusCode) {
    res.status(err.statusCode).json(customErrorResponse(err));
  } else {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(customErrorResponse(err));
  }
}

export async function getUserFlashcardsController(req, res) {
  try {
    const {id} = req.user;
    const flashcards = await getUserFlashcardsService(id);
    res.status(StatusCodes.OK).json(customSuccessResponse("Flashcards fetched successfully", flashcards));
  } 
  catch (err) {
    handleError(res, err);
  }
}
