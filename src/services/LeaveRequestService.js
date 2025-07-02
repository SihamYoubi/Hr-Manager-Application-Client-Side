import api from './api'; // Make sure api adds the JWT token automatically

export const submitLeaveRequest = async (data) => {
    const response = await api.post('/LeaveRequests', data);
    return response.data;
};

export const seeLeaveRequests = async() => {
    const response = await api.get('/LeaveRequests/user')
    console.log('response ', response.data);
    return response.data;
}
