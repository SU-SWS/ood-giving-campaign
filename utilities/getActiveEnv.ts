export const getActiveEnv = () => {
  // Context can be 'production', 'preview', or 'development'.
  const activeEnv = process.env.CONTEXT || 'development';
  return activeEnv;
};
