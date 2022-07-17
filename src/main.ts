import * as Bob from '@bob-plug/core';
import { getSupportLanguages } from './lang';
import { _translate } from './translate';

export function supportLanguages(): Bob.supportLanguages {
  return getSupportLanguages();
}

export function translate(query: Bob.TranslateQuery, completion: Bob.Completion) {
  const { text = '', detectFrom, detectTo } = query;
  const params = { from: detectFrom, to: detectTo, cache: Bob.api.getOption('cache') };
  let res = _translate(text, params);

  res
    .then((result) => completion({ result }))
    .catch((error) => {
      Bob.api.$log.error(JSON.stringify(error));
      if (error?.type) return completion({ error });
      completion({ error: Bob.util.error('api', '插件出错', error) });
    });
}
