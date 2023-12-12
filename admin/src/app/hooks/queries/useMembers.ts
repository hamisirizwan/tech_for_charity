import { instance as axios } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function useMembers() {
    const fetchData = async () => {
        try {
          const {data} = await axios.get("/users/get-all");
        console.log(data.data)
          return data.data;
        } catch (error) {
          console.log(error);
        }
      };

  return useQuery({ queryKey: ['members'], queryFn: fetchData })
}

export default useMembers