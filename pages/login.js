// This is the Link API
import Link from 'next/link'

const Login = () => (
  <div>
    <p>Welcome to the Star Wars Armada Campaign Manager</p>
    <form>
      Username: <br/>
      <input type="text" name="user" /><br/>
      Password:<br/>
      <input type="password" name="pass"/>
    </form>
    <Link href="/signup">
        <button>Signup</button>
    </Link>
    <Link href="/profile">
        <button>Log in</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Login