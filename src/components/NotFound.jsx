import Err from '../images/404.png'
export default function NotFound({ notFound, style }) {
  return (
    notFound && <div className={`not-found ${style}`}>
      <img src={Err} />
      <p>Oops! Invalid location :/</p>
    </div>
  )
}
