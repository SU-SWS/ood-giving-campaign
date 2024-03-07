/**
 * Separates a string into three parts: text before the number, the number itself, and text after the number.
 *
 * @param str The input string containing a number.
 * @returns An object with three properties: beforeNumber, number, and afterNumber.
 */
export const splitNumberString = (str: string): { beforeNumber: string; number?: number; afterNumber: string } => {
  const numberRegex = /\d+/;
  const numberMatch = str.match(numberRegex);

  if (numberMatch) {
    const number = parseFloat(numberMatch[0]);
    const numberIndex = numberMatch.index ?? 0;
    const beforeNumber = str.substring(0, numberIndex);
    const afterNumber = str.substring(numberIndex + (numberMatch[0]?.length ?? 0));

    return {
      beforeNumber: beforeNumber ?? '',
      number: number,
      afterNumber: afterNumber ?? '',
    };
  }
};
