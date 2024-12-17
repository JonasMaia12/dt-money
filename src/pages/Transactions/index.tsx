import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 150,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>10/02/2022</td>
            </tr>

            <tr>
              <td width="40%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 50,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/02/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
