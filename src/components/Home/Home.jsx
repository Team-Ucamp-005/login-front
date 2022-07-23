import { useContext } from "react"
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const { user } = useContext( UserContext );
  return (
    <div>
      <pre>
        { JSON.stringify( user, null, 3 ) }
      </pre>
    </div>
  )
}

export default Home