// formato do objeto Task
// é a 'tabela' do banco de dados
export interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
}
