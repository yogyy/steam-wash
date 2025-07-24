interface ResponseTotal {
  id: string;
  total: number;
}

export const fetchTotalCustomer = async (): Promise<ResponseTotal> => {
  const response = await fetch("https://steam-be.yogyy.workers.dev/api/total");
  return await response.json();
};
