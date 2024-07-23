import React from 'react'
import { useStateContext } from '@/context/ContextProvider';
import { useNavigate } from 'react-router-dom';
const Sidebar = (): JSX.Element => {
  const navigate = useNavigate();
  const {activeMenu} = useStateContext();

  return activeMenu ? (
    <div>
      
    </div>
  ) : (<div>
    </div>)
}

export default Sidebar