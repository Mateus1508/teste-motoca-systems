import { MemoryRouter } from "react-router-dom";
import TableItems from ".";
import useGetAll from "../../hooks/useGetAll";
import useDelete from "../../hooks/useDelete";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MotoType } from "../../types/moto";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../../hooks/useGetAll");
jest.mock("../../hooks/useDelete", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    mutate: jest.fn(),
  }),
}));

const motosMock: MotoType[] = [
  {
    id: "9",
    modelo: "Vespa Primavera 150",
    cor: "Amarelo",
    valor: 18000,
    status: 1,
  },
  {
    id: "10",
    modelo: "MT-03 ABS",
    cor: "Azul Metálico",
    valor: 21500,
    status: 1,
  },
];

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <TableItems search="" />
      </MemoryRouter>
    </QueryClientProvider>,
  );

describe("TableItems Component tests", () => {
  it("should render loading component is isLoading === true", () => {
    (useGetAll as jest.Mock).mockReturnValue({
      motos: motosMock,
      isLoading: true,
      isError: false,
      refetch: jest.fn(),
    });

    renderComponent();

    const loadingElement = screen.getByTestId("loading-spinner");
    expect(loadingElement).toBeInTheDocument();
  });

  it("should render error component is isError === true", () => {
    (useGetAll as jest.Mock).mockReturnValue({
      motos: motosMock,
      isLoading: false,
      isError: true,
      refetch: jest.fn(),
    });

    renderComponent();

    const errorElement = screen.getByText("Ocorreu um erro ao carregar as motos.");
    expect(errorElement).toBeInTheDocument();
  });

  it("should render component with success", () => {
    (useGetAll as jest.Mock).mockReturnValue({
      motos: motosMock,
      isLoading: false,
      isError: false,
      refetch: jest.fn(),
    });

    renderComponent();

    const tableItem = screen.getByText("#9");
    expect(tableItem).toBeInTheDocument();
  });

  it("should initiate delete process after button click", async () => {
    (useGetAll as jest.Mock).mockReturnValue({
      motos: motosMock,
      isLoading: false,
      isError: false,
      refetch: jest.fn(),
    });

    const props = {
      refetch: jest.fn(),
    };

    (useDelete as jest.Mock).mockReturnValue({
      isErrorDelete: false,
      mutate: jest.fn(async (id: string) => {
        const index = motosMock.findIndex((moto) => moto.id === id);
        if (index !== -1) {
          motosMock.splice(index, 1);
        }
        props.refetch();
      }),
      ...props,
    });

    renderComponent();

    const deleteButton = screen.getByTestId("9");
    fireEvent.click(deleteButton);

    expect(useDelete(props).mutate).toHaveBeenCalledWith("9");

    await waitFor(() => {
      const deletedItem = screen.queryByText("#9");
      expect(deletedItem).not.toBeInTheDocument();
    });

    expect(props.refetch).toHaveBeenCalled();
  });
});
