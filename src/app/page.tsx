import Image from 'next/image'
import StickyHeader from '../components/StickyHeader';

export default function Home() {
  return (
    <div className="App">
      <StickyHeader />
      <nav className ="sticky top-0 z-10 bg-white right-0 space-x-4">
        <a href="#" className="text-blue-500">New Window</a> | <a href="#" className="text-blue-500">Help</a> | <a href="#" className="text-blue-500">Personalize Page</a> |
      </nav>
    </div>
    
  )
}
