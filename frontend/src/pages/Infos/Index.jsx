import SInfos from "./style";

export default function Infos() {
  return (
    <SInfos>
      <h1>A propos</h1>
      <p>
        BOARB est une WebApp développée en React permettant de créer des
        tableaux personnels constitués de posts-its.
      </p>
      <p>
        {" "}
        L'idée est de créer des listes pense-bête de choses à faire, des
        tableaux d'inspiration... de manière très simple et très rapide.
      </p>
      <p>
        Ce site internet a été développé dans le cadre du CheckPoint 4 de la
        formation développeur Javascript de la Wild Code School de Lille en juin
        2022 par
        <a href="https://www.linkedin.com/in/juliane-casier-bb642832/">
          Juliane Casier
        </a>
        .
      </p>
    </SInfos>
  );
}
