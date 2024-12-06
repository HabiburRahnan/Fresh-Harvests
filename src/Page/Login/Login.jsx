import { useLoginMutation } from "../../redux/api/user"
import LoginModel from "../../Components/LoginModel";

function Login() {
    const [userLogin, { isLoding, error, isSuccess }] = useLoginMutation()


    return (
        <div>
            <LoginModel />

        </div>
    );
};

export default Login