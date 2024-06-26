import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(res =>{
            console.log(res.user)
            // new user has been created
            // const createAt = res.user.metaData.creationTime;
            const user = { email };
            fetch('http://localhost:5000/user',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then( res => res.json())
            .then(data =>{
                if(data.insertedId){
                    console.log('user added to the database')
                }
            })
        })
        .catch( error => {
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;