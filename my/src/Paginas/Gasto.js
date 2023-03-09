import '../CSS/Gasto.css'

function Gasto(){
    return(
        <div className="fundo_gasto">
                <div className="formu">
                    <h1>G a s t o s</h1>
                <p><label for="iTitulo">Titulo</label><input className="Titulo" id="iTitulo" placeholder="Insiria titulo do Gasto"/></p>
                <p><label for="iVMaximo">Valor Maximo Pago</label><input className="VMaximo" id="iVMaximo" placeholder="Insira o Valor Maximo"/></p>
                <p><label for="iVMinimo">Valor Minimo Pago</label><input className="VMinimo" id="iVMinimo" placeholder="Insira o Valor Minimo"/></p>
                <p><label for="iDtDebito">Data a ser debitado</label><input type="date" className="DtDebito" id="iDtDebito"/></p>
                <fieldset className="tipoGasto">
                    <legend>Tipo de Gasto</legend>
                        <input type="Radio" name="tipoDeGasto"  id="iGFixo"/><label for="iGFixo">Gastos Fixos</label>
                        <input type="Radio" name="tipoDeGasto"  class="gVari" id="iGVariaveis"/><label for="iGVariaveis">Gastos Variaveis</label>
                </fieldset>
                <p><input type="submit" value="Criar" /></p>
            </div>
        </div>
    )
}

export default Gasto