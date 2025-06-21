export const isPhoneNumberValid = (phone: string): boolean =>
  /^[0-9]+$/.test(phone);

export const isFormComplete = (
  name: string,
  address: string,
  phone: string
): boolean => {
  return name.trim() !== "" && address.trim() !== "" && phone.trim() !== "";
};
