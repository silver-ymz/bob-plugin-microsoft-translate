import { Language } from '@bob-plug/core';

type ILang = [Language, string];

// https://ripperhe.gitee.io/bob/#/plugin/addtion/language
// Bob 语种标识和第三方语种标识符映射关系 [['bob语种, '第三方接口语种']]
var languageList: ILang[] = [
  ['auto', 'auto'],
  ['zh-Hans', 'zh-Hans'],
  ['zh-Hant', 'zh-Hant'],
  ['yue', 'yue' ],
  ['en', 'en' ],
  ['ja', 'ja' ],
  ['ko', 'ko'], 
  ['fr', 'fr'], 
  ['de', 'de'], 
  ['es', 'es'], 
  ['it', 'it'], 
  ['ru', 'ru'], 
  ['pt', 'pt'], 
  ['nl', 'nl'], 
  ['pl', 'pl'], 
  ['ar', 'ar'], 
  ['af', 'af'], 
  ['am', 'am'], 
  ['az', 'az'], 
  ['bg', 'bg'], 
  ['bn', 'bn'], 
  ['bo', 'bo'], 
  ['bs', 'bs'], 
  ['ca', 'ca'], 
  ['cs', 'cs'], 
  ['cy', 'cy'], 
  ['da', 'da'], 
  ['el', 'el'], 
  ['et', 'et'], 
  ['eu', 'eu'], 
  ['fa', 'fa'], 
  ['fi', 'fi'], 
  ['fj', 'fj'], 
  ['ga', 'ga'], 
  ['gl', 'gl'], 
  ['gu', 'gu'], 
  ['he', 'he'], 
  ['hi', 'hi'], 
  ['hr', 'hr'], 
  ['ht', 'ht'], 
  ['hu', 'hu'], 
  ['hy', 'hy'], 
  ['id', 'id'], 
  ['is', 'is'], 
  ['ka', 'ka'], 
  ['kk', 'kk'], 
  ['km', 'km'], 
  ['kn', 'kn'], 
  ['ku', 'ku'], 
  ['ky', 'ky'], 
  ['lo', 'lo'], 
  ['lt', 'lt'], 
  ['lv', 'lv'], 
  ['mg', 'mg'], 
  ['mi', 'mi'], 
  ['mk', 'mk'], 
  ['ml', 'ml'], 
  ['mn', 'mn-Cyrl'], 
  ['mr', 'mr'], 
  ['ms', 'ms'], 
  ['mt', 'mt'], 
  ['mww', 'mww'], 
  ['my', 'my'], 
  ['ne', 'ne'], 
  ['or', 'or'], 
  ['otq', 'otq'], 
  ['pa', 'pa'], 
  ['ps', 'ps'], 
  ['ro', 'ro'],  
  ['sk', 'sk'], 
  ['sl', 'sl'], 
  ['sn', 'sn'], 
  ['so', 'so'], 
  ['sq', 'sq'], 
  ['sr-Cyrl', 'sr-Cyrl'], 
  ['sr-Latn', 'sr-Latn'], 
  ['sv', 'sv'], 
  ['sw', 'sw'], 
  ['te', 'te'], 
  ['tg', 'tg'], 
  ['th', 'th'], 
  ['tk', 'tk'], 
  ['tl', 'tl'], 
  ['tlh', 'tlh-Latn'], 
  ['to', 'to'], 
  ['tr', 'tr'], 
  ['tt', 'tt'], 
  ['ty', 'ty'], 
  ['ug', 'ug'], 
  ['uk', 'uk'], 
  ['ur', 'ur'], 
  ['uz', 'uz'], 
  ['vi', 'vi'], 
  ['yua', 'yua'], 
  ['zu', 'zu'], 
];

// Bob 语种标识符
var standardLangMap = new Map(languageList);
// 第三方语种标识符
var noStandardLangMap = new Map(languageList.map(([standardLang, lang]) => [lang, standardLang]));

// Bob 语种标识符转服务商语种标识符
function standardToNoStandard(lang: Language) {
  return standardLangMap.get(lang) || 'auto';
}

// 服务商语种标识符转 Bob 语种标识符
function noStandardToStandard(lang: string) {
  return noStandardLangMap.get(lang) || 'auto';
}

// 获取支持的语种
function getSupportLanguages() {
  return languageList.map(([standardLang]) => standardLang);
}

export { getSupportLanguages, standardToNoStandard, noStandardToStandard };
