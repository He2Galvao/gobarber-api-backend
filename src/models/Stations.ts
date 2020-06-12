import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('prj_base_geral')
class Stations {
  @PrimaryGeneratedColumn('ID')
  ID: number;

  @Column()
  DDD_TERM: string;

  @Column()
  REFERENCIA: Date;

  @Column()
  REGIAO: string;

  @Column()
  REGIONAL: string;

  @Column()
  UF: string;

  @Column()
  GRAM: string;

  @Column()
  GRA: string;

  @Column()
  EST_EQN: string;

  @Column()
  COD_LOC: string;

  @Column()
  COD_LOC_LOGRA: string;

  @Column()
  COD_LOG: string;

  @Column()
  TIPO_LOGRADOURO: string;

  @Column()
  LOGRADOURO: string;

  @Column()
  BAIRRO: string;

  @Column()
  MUNICIPIO: string;

  @Column()
  CEP: string;

  @Column()
  NUM_FACHADA: string;

  @Column()
  COMPLEMENTO: string;

  @Column()
  UM_P_DOIS_P: string;

  @Column()
  VELOX: string;

  @Column()
  VELOCIDADE_VELOX: string;

  @Column()
  ELEGIVEL: string;

  @Column()
  VIABILIDADE_NETWIN: string;

  @Column()
  TIPO_DE_VIABILIDADE: string;

  @Column()
  SIMULADOR: string;

  @Column()
  ESTACAO_ABASTECEDORA: string;

  @Column()
  NRC: string;

  @Column()
  SIGLA_LOC_LOGRA: string;

  @Column()
  CABO: string;

  @Column()
  UF_LOC_EST: string;

  @Column()
  ETIQUETA: string;

  @Column()
  LOC_TERMINAL: string;

  @Column()
  SIGLA_LOC_ESTACAO: string;

  @Column()
  EST_FAC: string;

  @Column()
  SS: string;

  @Column()
  CAIXA: string;

  @Column()
  PP: string;

  @Column()
  PS: string;

  @Column()
  NOME_DA_LOCALIDADE: string;

  @Column()
  ENDERECO_COBRANCA: string;

  @Column()
  PRODUTO: string;

  @Column()
  CATEGORIA: string;

  @Column()
  NOME: string;

  @Column()
  COD_REGIAO: string;

  @Column()
  SEGMENTO: string;

  @Column()
  CPF_CNPJ: string;

  @Column()
  COD_SURVEY: string;

  @Column()
  FILA: string;

  @Column()
  FAIXA_FILA: string;

  @Column()
  DATA_INSTALACAO: string;

  @Column()
  QTD_CPF_CNPJ_MESMO_ENDERECO: string;

  @Column()
  BLOQUEIO_FINANCEIRO_TERM: string;

  @Column()
  BLOQUEIO_FINANCEIRO_CPF: string;

  @Column()
  SIMULADOR_DELTA: string;

  @Column()
  SIMULADOR_OFERTA: string;

  @Column()
  NOME_DO_DSLAM: string;

  @Column()
  SCM_UF_LOC_EST: string;

  @Column()
  PRODUTO_ELEGIVEL: string;

  @Column()
  GRUPO: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Stations;
