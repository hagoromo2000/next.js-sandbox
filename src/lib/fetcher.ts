const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetcher = async (url: string) => {
  // 擬似的な遅延を追加
  await sleep(2000);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const res = await response.json();

  return res;
};

export default fetcher;
