import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Progress } from "./components/ui/progress";
function App() {
  const [loading, setLoading] = useState(true);
  const [progress , setProgress] = useState(13)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    }).finally(()=> {
      setLoading(false)
      setProgress(90)  
    });
  }, []);

  return !loading ? (<div className="bg-gray-500">

{/* header main outlet */}
hello world
  </div>) : (<div>
    <Progress value={progress} className="w-[60%]" />
  </div>)
    
}
// 5FD068-spotify green
export default App;
