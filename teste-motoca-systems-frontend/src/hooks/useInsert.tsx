import { useMutation, QueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MotoService } from "../services/moto";
import { MotoType } from "../types/moto";

const useInsert = () => {
  const queryClient = new QueryClient();
  const navigation = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (formData: MotoType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MotoService.insert(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["motos"] });
      navigation("/");
    },
    onError: (error) => {
      window.alert("Ocorreu um erro durante a inserção: " + error.message);
    },
  });

  return { insert: mutate, isInserting: isPending, insertError: isError };
};

export default useInsert;
