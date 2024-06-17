import { useQuery } from "@tanstack/react-query";
import { MotoType } from "../types/moto";
import { MotoService } from "../services/moto";

const useGetAll = () => {
  const { data, isLoading, isError, refetch } = useQuery<MotoType[], Error>({
    queryKey: ["motos"],
    queryFn: async () => {
      return MotoService.getAll();
    },
  });

  return { motos: data, isLoading, isError, refetch };
};

export default useGetAll;
