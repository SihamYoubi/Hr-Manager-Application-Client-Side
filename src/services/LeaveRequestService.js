import api from './api'; // Make sure api adds the JWT token automatically

export const submitLeaveRequest = async (data) => {
    const response = await api.post('/LeaveRequestS', data);
    return response.data;
};
