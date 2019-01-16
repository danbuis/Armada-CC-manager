const signup = () => (
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
</div>
)

export default signup