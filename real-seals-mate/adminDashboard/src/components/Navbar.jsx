import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart, FiShoppingBag } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from './'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({
  title,
  customFunc,
  color,
  dotColor,
  icon
}) => (
  <TooltipComponent
    content={title}
    position='BottomCenter'>
    <button
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked , setIsClicked , handleClick , screenSize , setScreenSize } = useStateContext()
  
  useEffect(()=>{
    const handleReSize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleReSize);
    // we are calling the function here so that the screen size is updated as soon as the component is mounted initially
    handleReSize();
    // whenever we add an EventListener we should also removie it after the work is done so we will be using a cleanup function
    return () => window.removeEventListener('resize', handleReSize);
  },[])

  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  },[screenSize])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
      title='Menu' 
      customFunc={() => setActiveMenu((prev) => !prev)} 
      color="blue"
      icon={<AiOutlineMenu />}
      />
      <div className='flex'>
      <NavButton 
      title='Cart' 
      customFunc={() => handleClick('cart')} 
      color="blue"
      icon={<FiShoppingCart />}
      />
      <NavButton 
      title='Chat' 
      dotColor="#03C9D7"
      customFunc={() => handleClick('chat')} 
      color="blue"
      icon={<BsChatLeft />}
      />
      <NavButton 
      title='Notifications' 
      customFunc={() => handleClick('notification')} 
      color="blue"
      dotColor="#03C9D7"
      icon={<RiNotification3Line />}
      />
      <TooltipComponent content="Profile"
      position='BottomCenter'> 
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
        onClick={()=>handleClick('userProfile')}>
          <img src={avatar } className='rounded-full w-8 h-8'/>
          <p><span className='text-gray-400 text-14'>Hi, </span>{' '}
          <span className='text-gray-400 font-bold ml-1 text-14'>Yash</span></p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>
      </TooltipComponent>

      {
        isClicked.cart && <Cart />        
      }
      {
        isClicked.chat && <Chat />        
      }
      {
        isClicked.notification && <Notification />        
      }
      {
        isClicked.userProfile && <UserProfile />        
      }
      </div>
    </div>
  )
}

export default Navbar