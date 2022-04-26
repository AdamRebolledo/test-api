import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
 const queryClient = new QueryClient({
  defaultOptions: {
   queries: {
    refetchOnWindowFocus: false,
   },
  },
 });
 return (
  <>
   <QueryClientProvider client={queryClient}>
    <AppRoutes />
   </QueryClientProvider>
  </>
 );
}

export default App;
