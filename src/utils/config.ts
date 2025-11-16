const config = {
  // In development, use relative path (Vite proxy handles it)
  // In production, use full URL or environment variable
  apiUrl:
    import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV
      ? "/api" // Vite proxy will forward to localhost:3002
      : "https://abdamin-api.vercel.app/api"),
};

export default config;
