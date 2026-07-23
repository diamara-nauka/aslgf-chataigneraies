import logoAlcina from '../assets/img/logo_alcina.png';
import smurf from '../assets/img/smurf.jpeg';

export interface Partner {
  id: string;
  name: string;
  logo: ImageMetadata;
  description: string;
  website: string;
}

export const partners: Partner[] = [
  {
    id: 'smurf',
    name: 'SMURF',
    description:
      'L’ASLGF des châtaigneraies du Pays Saint-Ponais a la chance de participer au programme européen SMURF 2 pour son second appel à projet. L’objectif est de promouvoir la SMCC auprès des propriétaires forestiers privés, notamment en encourageant le regroupement des propriétés forestières. La commission européenne développe un nouveau cadre pour la certification carbone, afin de développer les paiements pour services écosystémiques. L’ASLGF y participe via l’implémentation d’un projet carbone autour du châtaignier.',
    website: 'https://www.smurfproject.eu/',
    logo: smurf,
  },
  {
    id: 'alcina',
    name: 'Alcina',
    description:
      'Depuis 2006, Alcina intervient auprès de propriétaires forestiers, de collectivités territoriales ou d’industriels du Sud-Est de la France afin de « connaitre, gérer et valoriser » les espaces forestiers sur lesquels ils interviennent. A la fois cabinet de gestion de patrimoine forestier, expert forestier reconnu auprès du CNEFAF, et bureau d’étude, Alcina accompagne l’ASLGF des châtaigneraies du Pays Saint-Ponais dans la gestion de ses forêts.',
    website: 'https://www.alcina.fr/',
    logo: logoAlcina,
  },
];
