export const getActiveEnv = () => {
  // Context can be 'production', 'preview', or 'development'.
  const activeEnv = process.env.CONTEXT || 'development';
  return activeEnv;
};

export const isProduction = (): boolean => {
  return getActiveEnv() === 'production';
};

export const isPreview = (): boolean => {
  return getActiveEnv() === 'preview';
};

export const isDevelopment = (): boolean => {
  return getActiveEnv() === 'development';
};

