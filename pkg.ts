interface Pkg {
  name: string;
  description: string;
  version: string;
}

export const getPkg = (): Pkg => {
  return {
    name: "webssl",
    version: "3.5.4",
    description:
      "Simply create an OpenSSL certificate for your local web or mobile development that just work!",
  };
};
