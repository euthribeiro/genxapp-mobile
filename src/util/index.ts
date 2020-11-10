export const validaEmail = (emaili: string) => {
  return /^\w(?:|\w+|\.|-)*@(?:\w+)\..+$/.test(emaili);
};
