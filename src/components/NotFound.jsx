export default function NotFound({notFound}) {  
  return (
    notFound&&<div className="not-found">
        <img src="images/404.png"/>
        <p>Oops! Invalid location :/</p>
    </div>
  )
}
