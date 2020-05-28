import { inputsAreValid } from './utils/inputs-are-valid';
import { parseInputs } from './utils/parse-inputs';


export const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResults(numA + numB);
    } else {
      componentService.setResults("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
}

