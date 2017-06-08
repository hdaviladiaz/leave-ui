import env from './env.json';

export default function() {
    var currentEnv = process.env.REACT_APP_ENV || 'dev';
    return env[currentEnv];
}
