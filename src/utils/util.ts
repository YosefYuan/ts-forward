interface Result {
  success: boolean;
  errMsg?: string;
  data: any;
}

export const getReponseData = (data: any, errMsg?: string): Result => {
  const middleObj = errMsg ? { success: false, errMsg } : { success: true };
  return {
    ...middleObj,
    data
  };
};
