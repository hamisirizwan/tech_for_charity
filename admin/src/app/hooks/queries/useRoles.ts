import { instance as axios } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function useRoles() {
    const fetchData = async () => {
        try {
          const {data} = await axios.get("/access/get-roles");
        console.log(data.data)
          return data.data;
        } catch (error) {
          console.log(error);
        }
      };

  return useQuery({ queryKey: ['roles'], queryFn: fetchData })
}

export default useRoles