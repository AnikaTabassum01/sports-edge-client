import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const useSelectClass = () => {
    const {user} = useContext(AuthContext);

    const { refetch, data: selectClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://sports-edge-server.vercel.app/selectedClass?email=${user.email}`) 
            return res.json();
        },
    })
    return [selectClass, refetch]


}

export default useSelectClass;