import { COUNTRIES, LANGUAGES } from "../consts/questionKeys";
import { Q_Country } from "../questions/Q_Country";
import { Q_Language } from "../questions/Q_Language";

export const questionsByGroup = {
  [LANGUAGES]: Q_Language,
  [COUNTRIES]: Q_Country,
};
