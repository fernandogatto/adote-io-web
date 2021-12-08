import React from 'react';

import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';

import {
    ArrowDownward,
} from '@mui/icons-material';

import Menu from '../../components/Menu';

import {
    ContainerAdoptionProcess,
    ContentAdoptionProcess,
} from './styles';

const AdoptionProcess = () => {
    return (
        <ContainerAdoptionProcess>
            <Menu />

            <Box className="container-page">
                <ContentAdoptionProcess>
                    <Box className="container-header-page">
                        <h1>Processo de adoção</h1>
                    </Box>

                    <Box mb={4}>
                        <Box className="container-title">
                            <h2>Documentação</h2>
                        </Box>

                        <Box className="container-description">
                            <Box className="container-title">
                                <h3>Documentos necessários</h3>
                            </Box>

                            <p>Procure o Fórum ou a Vara da Infância e da Juventude da sua cidade ou região, levando os seguintes documentos*:</p>
                            <p>1) Cópias autenticadas: da Certidão de nascimento ou casamento, ou declaração relativa ao período de união estável;</p>
                            <p>2) Cópias da Cédula de identidade e da Inscrição no Cadastro de Pessoas Físicas (CPF);</p>
                            <p>3) Comprovante de renda e de residência;</p>
                            <p>4) Atestados de sanidade física e mental;</p>
                            <p>5) Certidão negativa de distribuição cível;</p>
                            <p>6) Certidão de antecedentes criminais. </p>

                            <p><span>*Esses documentos estão previstos no Estatuto da Criança e do Adolescente, mas é possível que seu estado solicite outros documentos. Por isso, é importante entrar em contato com a unidade judiciária e conferir a documentação.</span></p>
                        </Box>

                        <Box className="container-description">
                            <Box className="container-title">
                                <h3>Análise de documentos</h3>
                            </Box>

                            <p>Os documentos apresentados serão autuados pelo cartório e serão remetidos ao Ministério Público para análise e prosseguimento do processo. O promotor de justiça poderá requerer documentações complementares.</p>
                        </Box>
                    </Box>

                    <Box mb={4}>
                        <Box className="container-title">
                            <h2>Sobre o processo de adoção</h2>
                        </Box>

                        <Box className="container-description">
                            <Box className="container-title">
                                <h3>Avaliação da equipe interprofissional</h3>
                            </Box>

                            <p>É uma das fases mais importantes e esperadas pelos postulantes à adoção, que serão avaliados por uma equipe técnica multidisciplinar do Poder Judiciário. Nessa fase, objetiva-se conhecer as motivações e expectativas dos candidatos à adoção; analisar a realidade sociofamiliar; avaliar, por meio de uma criteriosa análise, se o postulante à adoção pode vir a receber criança/adolescente na condição de filho; identificar qual lugar ela ocupará na dinâmica familiar, bem como orientar os postulantes sobre o processo adotivo.</p>
                        </Box>

                        <Box className="container-description">
                            <Box className="container-title">
                                <h3>Participação em programa de preparação para adoção</h3>
                            </Box>

                            <p>A participação no programa é requisito legal, previsto no Estatuto da Criança e do Adolescente (ECA), para quem busca habilitação no cadastro à adoção. O programa pretende oferecer aos postulantes o efetivo conhecimento sobre a adoção, tanto do ponto de vista jurídico quanto psicossocial; fornecer informações que possam ajudar os postulantes a decidirem com mais segurança sobre a adoção; preparar os pretendentes para superar possíveis dificuldades que possam haver durante a convivência inicial com a criança/adolescente; orientar e estimular à adoção interracial, de crianças ou de adolescentes com deficiência, com doenças crônicas ou com necessidades específicas de saúde, e de grupos de irmãos.</p>

                            <p><span>*Sempre que possível e recomendável, a etapa obrigatória da preparação incluirá o contato com crianças e adolescentes em acolhimento familiar ou institucional, a ser realizado sob orientação, supervisão e avaliação da equipe técnica.</span></p>
                        </Box>

                        <Box className="container-description">
                            <Box className="container-title">
                                <h3>Análise do requerimento pela autoridade judiciária</h3>
                            </Box>

                            <p>A partir do estudo psicossocial, da certificação de participação em programa de preparação para adoção e do parecer do Ministério Público, o juiz proferirá sua decisão, deferindo ou não o pedido de habilitação à adoção.</p>

                            <p>Caso seu nome não seja aprovado, busque saber os motivos. Estilo de vida incompatível com criação de uma criança ou razões equivocadas (para aplacar a solidão; para superar a perda de um ente querido; superar crise conjugal etc.) podem inviabilizar uma adoção. Você pode se adequar e começar o processo novamente.</p>

                            <p>A habilitação do postulante à adoção é válida por três anos, podendo ser renovada pelo mesmo período. É muito importante que o pretendente mantenha sua habilitação válida, para evitar inativação do cadastro no sistema. Assim, quando faltarem 120 dias para a expiração o prazo de validade, é recomendável que o habilitado procure a Vara de Infância e Juventude responsável pelo seu processo e solicite a renovação.</p>

                            <p>O prazo máximo para conclusão da habilitação à adoção será de 120 dias, prorrogável por igual período, mediante decisão fundamentada da autoridade judiciária.</p>
                        </Box>

                        <Box className="container-description">
                            <Box className="container-title">
                                <h3>Ingresso no Sistema Nacional de Adoção e Acolhimento</h3>
                            </Box>

                            <p>Com o deferimento do pedido de habilitação à adoção, os dados do postulante são inseridos no sistema nacional, observando-se a ordem cronológica da decisão judicial.</p>
                        </Box>

                        <Box className="container-description">
                            <Box className="container-title">
                                <h3>Buscando uma família para a criança/adolescente</h3>
                            </Box>

                            <p>Quando se busca uma família para uma criança/adolescente cujo perfil corresponda ao definido pelo postulante, este será contatado pelo Poder Judiciário, respeitando-se a ordem de classificação no cadastro. Será apresentado o histórico de vida da criança/adolescente ao postulante e, se houver interesse, será permitida aproximação com ela/ele.</p>

                            <p>Durante esse estágio de convivência monitorado pela Justiça e pela equipe técnica, é permitido visitar o abrigo onde ela/ele mora; dar pequenos passeios para que vocês se aproximem e se conheçam melhor.</p>

                            <p>É importante manter os contatos atualizados, pois é por eles que o Judiciário entrará em contato para informar que há crianças ou adolescentes aptos para adoção dentro do perfil do pretendente. O sistema também fará comunicações por e-mail, caso seja cadastrado.</p>
                        </Box>

                        <Box className="container-description">
                            <Box className="container-title">
                                <h3>O momento de construir novas relações</h3>
                            </Box>

                            <p>Caso a aproximação tenha sido bem-sucedida, o postulante iniciará o estágio de convivência. Nesse momento, a criança ou o adolescente passa a morar com a família, sendo acompanhados e orientados pela equipe técnica do Poder Judiciário. Esse período tem prazo máximo de 90 dias, prorrogável por igual período.</p>
                        </Box>

                        <Box className="container-description">
                            <Box className="container-title">
                                <h3>Uma nova família</h3>
                            </Box>

                            <p>Contado do dia seguinte à data do término do estágio de convivência, os pretendentes terão 15 dias para propor a ação de adoção. Caberá ao juiz verificar as condições de adaptação e vinculação socioafetiva da criança/adolescente e de toda a família. Sendo as condições favoráveis, o magistrado profere a sentença de adoção e determina a confecção do novo registro de nascimento, já com o sobrenome da nova família. Nesse momento, a criança/adolescente passa a ter todos os direitos de um filho.</p>

                            <p>O prazo máximo para conclusão da ação de adoção será de 120 dias, prorrogáveis uma única vez por igual período, mediante decisão fundamentada da autoridade judiciária.</p>
                        </Box>
                    </Box>

                    <Box>
                        <Box className="container-title">
                            <h2>Dúvidas frequentes</h2>
                        </Box>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question1-content"
                                id="question1-header"
                            >
                                <Typography>
                                    Quem pode adotar?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Toda pessoa com mais de 18 anos de idade, seja ela casada, solteira ou em união estável, pode adotar uma criança ou um adolescente. O adotante deve ser pelo menos 16 anos mais velho que a criança ou o adolescente que pretende adotar.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question2-content"
                                id="question2-header"
                            >
                                <Typography>
                                    Quem pode ser adotado?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Podem ser adotadas crianças e adolescentes com idade até 18 anos, cujos pais são falecidos ou concordaram com a adoção e que tiverem sido destituídos do poder familiar. Crianças e adolescentes aptos para adoção são atendidos pela Justiça da Infância e da Juventude e vivem em unidades de acolhimento até que sejam colocadas em família substituta (que além da adoção, pode ocorrer por meio da tutela ou guarda) ou completem a maioridade. Maiores de 18 anos também podem ser adotados. No entanto, a adoção de adultos é regida pelo Código Civil e julgada pelo Juízo Cível.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question3-content"
                                id="question3-header"
                            >
                                <Typography>
                                    Quais são os requisitos que tornam apto quem pretende adotar uma criança ou um adolescente?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Além de ter idade acima de 18 anos, o pretendente deve possuir idoneidade moral e motivação idônea para a adoção. A lei também prevê a frequência a curso preparatório para adoção, onde serão prestados esclarecimentos e efetuadas as avaliações correspondentes, que definirão se a pessoa está apta ou inapta a adotar.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question4-content"
                                id="question4-header"
                            >
                                <Typography>
                                    O processo de adoção custa caro?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Não custa nada. Tanto o processo de habilitação à adoção quanto a adoção propriamente dita são isentos de custas judiciais. Além disso, não é preciso contratar advogado e os requerimentos podem ser formulados diretamente em cartório pelos interessados.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question5-content"
                                id="question5-header"
                            >
                                <Typography>
                                    Solteiros podem adotar?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Sim. Não há qualquer restrição à adoção por pessoas solteiras, desde que preencham os requisitos exigidos pela lei.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question6-content"
                                id="question6-header"
                            >
                                <Typography>
                                    Há uma idade limite (máxima) para habilitar-se à adoção?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Não. Embora a lei tenha fixado uma idade mínima (18 anos), não estabeleceu qualquer idade máxima para que uma pessoa possa adotar. A capacidade do pretendente à adoção em assumir as consequências presentes e futuras da medida, no entanto, é analisada caso a caso, por ocasião do processo de habilitação.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question7-content"
                                id="question7-header"
                            >
                                <Typography>
                                    Há exigência de uma diferença mínima de idade entre adotante e adotado?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    A lei prevê uma diferença mínima de 16 anos de idade entre quem adota e o adotado. Embora seja possível a adoção entre pessoas adultas, por analogia ao disposto no Estatuto da Criança e do Adolescente, essa diferença se mantém, devendo o adotante ser, no mínimo 16 anos mais velho que o adotando.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question8-content"
                                id="question8-header"
                            >
                                <Typography>
                                    Há exigência de renda mínima para adoção?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Não. A adoção pode ocorrer independentemente da renda das pessoas interessadas em adotar uma criança e/ou um adolescente. Também não há qualquer “preferência” na adoção por pessoas com maior renda. Se necessário, inclusive, cabe ao Poder Público oferecer assistência ao pretendente, para que este possa concretizar a adoção.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question9-content"
                                id="question9-header"
                            >
                                <Typography>
                                    Há exigência de renda mínima para adoção?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Não. A adoção pode ocorrer independentemente da renda das pessoas interessadas em adotar uma criança e/ou um adolescente. Também não há qualquer “preferência” na adoção por pessoas com maior renda. Se necessário, inclusive, cabe ao Poder Público oferecer assistência ao pretendente, para que este possa concretizar a adoção.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question10-content"
                                id="question10-header"
                            >
                                <Typography>
                                    É admissível a adoção por pessoas ou casais homoafetivos?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Sim. A lei não faz qualquer restrição quanto à orientação sexual do adotante. Algumas decisões judiciais têm admitido a adoção por casais homossexuais, desde que demonstrado o preenchimento de todos os requisitos exigidos por lei para a adoção.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownward />}
                                aria-controls="question11-content"
                                id="question11-header"
                            >
                                <Typography>
                                    Quanto tempo leva o processo de adoção?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    Dependo do “perfil” eventualmente indicado para a criança e/ou o adolescente que se pretende adotar, o processo pode ser extremamente rápido. Os processos mais ágeis são aqueles em que não há restrições quanto à idade, o sexo e a cor da pele da criança e/ou do adolescente. Também são encaminhados com maior celeridade os processos cujos pretendentes à adoção aceitam grupos de irmãos.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </ContentAdoptionProcess>
            </Box>
        </ContainerAdoptionProcess>
    );
}

export default AdoptionProcess;
