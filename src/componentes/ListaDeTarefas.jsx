import Tarefa from "./Tarefa";
export default function ListaDeTarefas(props) {
    return (
        <div>
            {props.tarefas.map((tarefa, index) => {
                return (
                    <Tarefa key={index} texto={tarefa} />
                )
            })}
        </div>
    );
}