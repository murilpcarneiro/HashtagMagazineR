import logo from '../assets/logo/hashtag.svg'
import UserButtons from './UserButtons'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation();

  const completeHeader = (
    <header className='flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10'>
      <a href="/">
        <img className='h-16 px-2' src={logo} alt="Logo da Hashtag" />
      </a>
      <UserButtons />
    </header>
  )

  const simpleHeader = (
    <header className='flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10'>
      <a href="/">
        <img className='h-12 px-2' src={logo} alt="Logo da Hashtag" />
      </a>
    </header>
  )


  return (
    pathname === '/' ? completeHeader : simpleHeader
  )
}

export default Header