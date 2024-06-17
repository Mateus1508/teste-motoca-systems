import { QueryClient, useMutation } from "@tanstack/react-query";
import { MotoService } from "../services/moto";

interface Props {
  setDeleteInProgress?: React.Dispatch<React.SetStateAction<string | null>>;
  refetch: () => void;
}

const useDelete = (props: Props) => {
  const queryClient = new QueryClient();

  const { mutate, isError: isErrorDelete } = useMutation({
    mutationFn: async (id: string) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return MotoService.delete(id);
    },
    onSuccess: () => {
      if (props.setDeleteInProgress) {
        props.setDeleteInProgress(null);
      }
      queryClient.invalidateQueries({ queryKey: ["motos"] });
      props.refetch();
    },
  });

  return { mutate, isErrorDelete };
};

export default useDelete;
