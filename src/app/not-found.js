import Notfound from "@/components/NotFound"

export const metadata = {
  title: 'PLANET WARE | Not found',
  description: 'A PLANET WARE website',
}

const NotFound = () => {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
      <Notfound />
    </div>
  )
}

export default NotFound