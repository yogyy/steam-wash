interface ResponseTotal {
  id: string;
  total: number;
}

export const localURL = "http://127.0.0.1:8787";
export const prodURL = "https://steam-be.yogyy.workers.dev";

export const fetchTotalCustomer = async (): Promise<ResponseTotal> => {
  const response = await fetch(`${prodURL}/api/total`);
  return await response.json();
};
