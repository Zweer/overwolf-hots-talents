
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const NAVIGATE_TO = 'NAVIGATE_TO';

export const PAGES = {
  MINIMIZED: 'MINIMIZED',
  TALENTS: 'TALENTS',
  FEEDBACK: 'FEEDBACK',
  ABOUT: 'ABOUT',
  TEAMCOMP: 'TEAMCOMP'
};

export const TALENTS_NAVIGATE_TO = 'TALENTS_NAVIGATE_TO';
export const TALENTS_START_FETCH = 'TALENTS_START_FETCH';
export const TALENTS_SUCCESSFUL_FETCH = 'TALENTS_SUCCESSFUL_FETCH';
export const TALENTS_CHOOSE_HERO = 'TALENTS_CHOOSE_HERO';
export const TALENTS_OPEN_TALENT_LEVEL = 'TALENTS_OPEN_TALENT_LEVEL';
export const TALENTS_CLOSE_TALENT_LEVEL = 'TALENTS_CLOSE_TALENT_LEVEL';

export const TALENTS_PAGES = {
  POPULARITY: 'POPULARITY',
  WINRATE: 'WINRATE',
  POPULAR_BUILDS: 'POPULAR_BUILDS',
  MAKE_YOUR_BUILDS: 'MAKE_YOUR_BUILDS'
};

export const TEAMCOMP_DATA_FETCH = 'TEAMCOMP_DATA_FETCH';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const COMP_ADD_HERO = 'COMP_ADD_HERO';
export const COMP_REMOVE_HERO = 'COMP_REMOVE_HERO';

export const SEND_ANALYTICS = 'SEND_ANALYTICS';

//export const ANALYTICS_URL = 'http://127.0.0.1:3800/event';
export const ANALYTICS_URL = 'http://owanalytics.noip.me/event';

export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';

export const HEROES = [
  { value: 'Abathur', label: 'Abathur'},
  { value: 'Anubarak', label: 'Anub\'arak'},
  { value: 'Artanis', label: 'Artanis'},
  { value: 'Arthas', label: 'Arthas'},
  { value: 'Azmodan', label: 'Azmodan'},
  { value: 'Brightwing', label: 'Brightwing'},
  { value: 'Chen', label: 'Chen'},
  { value: 'Cho', label: 'Cho'},
  { value: 'Dehaka', label: 'Dehaka'},
  { value: 'Diablo', label: 'Diablo'},
  { value: 'ETC', label: 'E.T.C.'},
  { value: 'Falstad', label: 'Falstad'},
  { value: 'Gall', label: 'Gall'},
  { value: 'Gazlowe', label: 'Gazlowe'},
  { value: 'Greymane', label: 'Greymane'},
  { value: 'Illidan', label: 'Illidan'},
  { value: 'Jaina', label: 'Jaina'},
  { value: 'Johanna', label: 'Johanna'},
  { value: 'Kaelthas', label: 'Kael\'thas'},
  { value: 'Kerrigan', label: 'Kerrigan'},
  { value: 'Kharazim', label: 'Kharazim'},
  { value: 'Leoric', label: 'Leoric'},
  { value: 'LiLi', label: 'Li Li'},
  { value: 'Li-Ming', label: 'Li-Ming'},
  { value: 'LtMorales', label: 'Lt. Morales'},
  { value: 'Lunara', label: 'Lunara'},
  { value: 'Malfurion', label: 'Malfurion'},
  { value: 'Muradin', label: 'Muradin'},
  { value: 'Murky', label: 'Murky'},
  { value: 'Nazeebo', label: 'Nazeebo'},
  { value: 'Nova', label: 'Nova'},
  { value: 'Raynor', label: 'Raynor'},
  { value: 'Rehgar', label: 'Rehgar'},
  { value: 'Rexxar', label: 'Rexxar'},
  { value: 'SgtHammer', label: 'Sgt. Hammer'},
  { value: 'Sonya', label: 'Sonya'},
  { value: 'Stitches', label: 'Stitches'},
  { value: 'Sylvanas', label: 'Sylvanas'},
  { value: 'Tassadar', label: 'Tassadar'},
  { value: 'TheButcher', label: 'The Butcher'},
  { value: 'TheLostVikings', label: 'The Lost Vikings'},
  { value: 'Thrall', label: 'Thrall'},
  { value: 'Tracer', label: 'Tracer'},
  { value: 'Tychus', label: 'Tychus'},
  { value: 'Tyrael', label: 'Tyrael'},
  { value: 'Tyrande', label: 'Tyrande'},
  { value: 'Uther', label: 'Uther'},
  { value: 'Valla', label: 'Valla'},
  { value: 'Xul', label: 'Xul'},
  { value: 'Zagara', label: 'Zagara'},
  { value: 'Zeratul', label: 'Zeratul'},
];