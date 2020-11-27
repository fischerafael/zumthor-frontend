import api from '..'

async function loginUserService(data: { email: string }) {
    try {
        const response = await api.post('sessions', data)
        return {
            isLogged: true,
            response
        }
    } catch(err) {
        return {
            isLogged: false,
            err
        }
    }
}

export default loginUserService