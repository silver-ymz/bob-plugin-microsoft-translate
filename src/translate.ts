import * as Bob from '@bob-plug/core';
import { standardToNoStandard } from './lang';

interface QueryOption {
  to: Exclude<Bob.Language, 'auto'>;
  from: Exclude<Bob.Language, 'auto'>;
  cache: string;
}

var resultCache = new Bob.CacheResult('translate-result');

/**
 * @description 翻译
 * @param {string} text 需要翻译的文字内容
 * @param {object} options 翻译参数
 * @return {object} 一个符合 bob 识别的翻译结果对象
 */
async function _translate(text: string, options: QueryOption): Promise<Bob.TranslateResult> {
  const { from, to, cache = 'enable' } = options;
  const cacheKey = `${text}${from}${to}`;
  if (cache === 'enable') {
    const _cacheData = resultCache.get(cacheKey);
    if (_cacheData) return _cacheData;
  } else {
    resultCache.clear();
  }

  const result: Bob.TranslateResult = { from, to, toParagraphs: [] };

  const endpoint = Bob.api.getOption('endpoint');
  const path = '/translate?api-version=3.0';
  const fromLanguageParameter = '&from=' + standardToNoStandard(from);
  const targetLanguageParameter = '&to=' + standardToNoStandard(to);
  const constructedUrl = endpoint + path + fromLanguageParameter + targetLanguageParameter;
  const key = Bob.api.getOption('key');
  const location = Bob.api.getOption('location');
  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': key,
    'Ocp-Apim-Subscription-Region': location,
  };
  const [err, res] = await Bob.util.asyncTo<Bob.HttpResponse>(
    Bob.api.$http.post({
      url: constructedUrl,
      header: headers,
      body: [{ text: text }],
    }),
  );
  if (err) throw Bob.util.error('network', '接口网络错误', err);
  const resData = res?.data;
  Bob.api.$log.info(JSON.stringify(res));

  try {
    // 在此处实现翻译的具体处理逻辑
    result.toParagraphs = [resData[0].translations[0].text];
    // result.toDict = { parts: [], phonetics: [] };
  } catch (error) {
    throw Bob.util.error('api', '数据解析错误', error);
  }

  if (cache === 'enable') {
    resultCache.set(cacheKey, result);
  }
  return result;
}

export { _translate };
