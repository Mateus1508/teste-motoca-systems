// Form.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from ".";
import useUpdate from "../../hooks/useUpdate";
import { MotoType } from "../../types/moto";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import useInsert from "../../hooks/useInsert";

jest.mock("../../hooks/useInsert", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    insert: jest.fn(),
    isInserting: false,
  }),
}));
jest.mock("../../hooks/useUpdate", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    update: jest.fn(),
    isUpdating: false,
  }),
}));

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{ui}</MemoryRouter>
    </QueryClientProvider>,
  );
};

describe("Form Component tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("submits the form for update when data is provided", async () => {
    const mockUpdate = jest.fn();
    (useUpdate as jest.Mock).mockReturnValue({
      update: mockUpdate,
      isUpdating: false,
    });

    const motoData: MotoType = {
      id: "1",
      modelo: "Model X",
      cor: "Red",
      valor: 5000,
      status: 1,
    };

    renderWithClient(<Form data={motoData} />);

    const submitButton = screen.getByText("ATUALIZAR");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockUpdate).toHaveBeenCalledWith(motoData);
      expect(window.location.pathname).toBe("/");
    });
  });

  it("submits the form for insertion when data is not provided", async () => {
    const mockInsert = jest.fn();
    (useInsert as jest.Mock).mockReturnValue({
      insert: mockInsert,
      isInserting: false,
    });

    renderWithClient(<Form />);

    const formData: MotoType = {
      id: "1",
      modelo: "Model Y",
      cor: "Red",
      valor: 5000,
      status: 1,
    };

    fireEvent.change(screen.getByLabelText(/Código/i), { target: { value: formData.id } });
    fireEvent.change(screen.getByLabelText(/Modelo da Moto/i), { target: { value: formData.modelo } });
    fireEvent.change(screen.getByLabelText(/Cor/i), { target: { value: formData.cor } });
    fireEvent.change(screen.getByLabelText(/Valor/i), { target: { value: formData.valor.toString() } });

    fireEvent.submit(screen.getByText("REGISTRAR"), { target: { formData } });

    await waitFor(() => {
      expect(mockInsert).toHaveBeenCalledWith(formData);
      expect(window.location.pathname).toBe("/");
    });
  });
});
