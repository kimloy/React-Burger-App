import { useState, useEffect } from "react";

const HttpClient = (axios) => {
  const [error, setError] = useState(null);

  const reqInterceptor = axios.interceptors.request.use((req) => {
    setError(null);
    return req;
  });
  const resInterceptor = axios.interceptors.response.use(
    (res) => res,
    (error) => {
      setError({ error: error });
    }
  );

  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };
  return [error, errorConfirmedHandler];
};

export default HttpClient;
