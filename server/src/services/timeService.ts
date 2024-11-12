export const getCurrentTime = () => {
  return { epoch: Math.floor(Date.now() / 1000) };
};
