import useFetchJobs from "../Utils/helper/useFetchJobs";
import "./App.css";
import JobsDashboard from "./Components/JobsDashboard";

function App() {
    useFetchJobs();

    return <JobsDashboard />;
}

export default App;
