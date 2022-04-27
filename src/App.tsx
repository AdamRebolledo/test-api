import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet } from "react-helmet";
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
    <Helmet>
     <title>Test API</title>
    </Helmet>
    <AppRoutes />
   </QueryClientProvider>
  </>
 );
}

export default App;
