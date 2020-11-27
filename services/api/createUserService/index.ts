import api from '../../api'

async function createUserService(data: { email: string }) {
    try {
        const response = await api.post('users', data)            
        return {
            isCreated: true,
            response: response
        }
    } catch(err) {            
        return {
            isCreated: false,
            response: {}
        }
    }
}

export default createUserService