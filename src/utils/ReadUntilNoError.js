import OutputView from '../views/OutputView.js';

const readUntilNoError = async (readFunction) => {
  let invalidInputFlag = true;

  while (invalidInputFlag) {
    invalidInputFlag = false;
    try {
      return await readFunction();
    } catch (e) {
      OutputView.printErrorMessage(e);
      invalidInputFlag = true;
    }
  }
};

export default readUntilNoError;
