import { useMutation, QueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MotoType } from "../types/moto";
import { MotoService } from "../services/moto";

const useUpdate = () => {
  const queryClient = new QueryClient();
  const navigation = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (formData: MotoType) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return MotoService.update(formData.id, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["motos"] });
      navigation("/");
    },
    onError: (error) => {
      window.alert("Ocorreu um erro durante a atualização: " + error.message);
    },
  });

  return { update: mutate, isUpdating: isPending, updateError: isError };
};

export default useUpdate;
