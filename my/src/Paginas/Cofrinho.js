import '../CSS/Cofrinho.css';

function Cofrinho(){
    return(
        <div className='fundo_cofrinho'>
            <div className="corpo_cofrinho">
                <h2>C o f r i n h o</h2>
                <p><label for="id_NC">Nome do Cofrinho </label><input  id="id_NC" className="nm_cof" placeholder="Qual será o nome do seu cofrinho" /></p>
                <p><label for="id_DC">Descrição</label><textarea id="id_DC" className="dsc_cof" placeholder='Escreva uma descrição do seu cofrinho' cols={35} rows={5}></textarea></p>
                <p><label for="id_VC">Valor Mensal</label><input id="id_VC" className="vm_cof"  placeholder="Digite o valor que deseja juntar no total"/></p>
                <p><label for="id_TC">Tempo <input  id="id_TC" className="tm_cof" placeholder='Digite o tempo desejado'/></label> Meses</p>
                <p><label for="id_JC">Juros do Banco <input id="id_JC" className="jur_cof" placeholder='Digite juros da ponpança ou banco'/></label></p>
                <p><input type="button" value="Cancelar"/> <input type="button" value="Criar"/></p>
            </div>
        </div>
    )
}

export default Cofrinho