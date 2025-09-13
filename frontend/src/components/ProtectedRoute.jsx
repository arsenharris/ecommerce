import {Navigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-js-decode';
import api from "../api"
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants';

function ProtectedRoute({children}) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    const refreshToken = async () => {
    }

    const auth = sync() => {

}

