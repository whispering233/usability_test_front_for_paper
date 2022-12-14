'use strict';
/**
 * Copyright (c) 2017 Baidu.com, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @file AipImageSearch.js
 * @author baidu aip
 */

const BaseClient = require('./client/baseClient');

const RequestInfo = require('./client/requestInfo');

const HttpClient = require('./http/httpClient');

const objectTools = require('./util/objectTools');

const METHOD_POST = 'POST';

const SAME_HQ_ADD_PATH = '/rest/2.0/realtime_search/same_hq/add';
const SAME_HQ_SEARCH_PATH = '/rest/2.0/realtime_search/same_hq/search';
const SAME_HQ_UPDATE_PATH = '/rest/2.0/realtime_search/same_hq/update';
const SAME_HQ_DELETE_PATH = '/rest/2.0/realtime_search/same_hq/delete';
const SIMILAR_ADD_PATH = '/rest/2.0/image-classify/v1/realtime_search/similar/add';
const SIMILAR_SEARCH_PATH = '/rest/2.0/image-classify/v1/realtime_search/similar/search';
const SIMILAR_UPDATE_PATH = '/rest/2.0/image-classify/v1/realtime_search/similar/update';
const SIMILAR_DELETE_PATH = '/rest/2.0/image-classify/v1/realtime_search/similar/delete';
const PRODUCT_ADD_PATH = '/rest/2.0/image-classify/v1/realtime_search/product/add';
const PRODUCT_SEARCH_PATH = '/rest/2.0/image-classify/v1/realtime_search/product/search';
const PRODUCT_UPDATE_PATH = '/rest/2.0/image-classify/v1/realtime_search/product/update';
const PRODUCT_DELETE_PATH = '/rest/2.0/image-classify/v1/realtime_search/product/delete';


/**
 * AipImageSearchç±»
 *
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
class AipImageSearch extends BaseClient {
    constructor(appId, ak, sk) {
        super(appId, ak, sk);
    }
    commonImpl(param) {
        let httpClient = new HttpClient();
        let apiUrl = param.targetPath;
        delete param.targetPath;
        let requestInfo = new RequestInfo(apiUrl,
            param, METHOD_POST);
        return this.doRequest(requestInfo, httpClient);
    }

    /**
     * ç¸åå¾æ£ç´¢âå¥åºæ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ£ç´¢æ¶åæ ·å¸¦å,æé¿256Bã
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqAdd(image, options) {
        let param = {
            image: image,
            targetPath: SAME_HQ_ADD_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âå¥åºæ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ£ç´¢æ¶åæ ·å¸¦å,æé¿256Bã
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqAddUrl(url, options) {
        let param = {
            url: url,
            targetPath: SAME_HQ_ADD_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âæ£ç´¢æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   tag_logic æ£ç´¢æ¶tagä¹é´çé»è¾ï¼ 0ï¼é»è¾andï¼1ï¼é»è¾or
     *   pn åé¡µåè½ï¼èµ·å§ä½ç½®ï¼ä¾ï¼0ãæªæå®åé¡µæ¶ï¼é»è®¤è¿åå300ä¸ªç»æï¼æ¥å£è¿åæ°éæå¤§éå¶1000æ¡ï¼ä¾å¦ï¼èµ·å§ä½ç½®ä¸º900ï¼æªåæ¡æ°500æ¡ï¼æ¥å£ä¹åªè¿åç¬¬900 - 1000æ¡çç»æï¼å±è®¡100æ¡
     *   rn åé¡µåè½ï¼æªåæ¡æ°ï¼ä¾ï¼250
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqSearch(image, options) {
        let param = {
            image: image,
            targetPath: SAME_HQ_SEARCH_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âæ£ç´¢æ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   tag_logic æ£ç´¢æ¶tagä¹é´çé»è¾ï¼ 0ï¼é»è¾andï¼1ï¼é»è¾or
     *   pn åé¡µåè½ï¼èµ·å§ä½ç½®ï¼ä¾ï¼0ãæªæå®åé¡µæ¶ï¼é»è®¤è¿åå300ä¸ªç»æï¼æ¥å£è¿åæ°éæå¤§éå¶1000æ¡ï¼ä¾å¦ï¼èµ·å§ä½ç½®ä¸º900ï¼æªåæ¡æ°500æ¡ï¼æ¥å£ä¹åªè¿åç¬¬900 - 1000æ¡çç»æï¼å±è®¡100æ¡
     *   rn åé¡µåè½ï¼æªåæ¡æ°ï¼ä¾ï¼250
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqSearchUrl(url, options) {
        let param = {
            url: url,
            targetPath: SAME_HQ_SEARCH_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âæ´æ°æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ´æ°çæè¦ä¿¡æ¯ï¼æé¿256Bãæ ·ä¾ï¼{"name":"å¨æ°ä¼¦", "id":"666"}
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqUpdate(image, options) {
        let param = {
            image: image,
            targetPath: SAME_HQ_UPDATE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âæ´æ°æ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ´æ°çæè¦ä¿¡æ¯ï¼æé¿256Bãæ ·ä¾ï¼{"name":"å¨æ°ä¼¦", "id":"666"}
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqUpdateUrl(url, options) {
        let param = {
            url: url,
            targetPath: SAME_HQ_UPDATE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âæ´æ°æ¥å£
     *
     * @param {string} contSign - å¾çç­¾å
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ´æ°çæè¦ä¿¡æ¯ï¼æé¿256Bãæ ·ä¾ï¼{"name":"å¨æ°ä¼¦", "id":"666"}
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqUpdateContSign(contSign, options) {
        let param = {
            cont_sign: contSign,
            targetPath: SAME_HQ_UPDATE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqDeleteByImage(image, options) {
        let param = {
            image: image,
            targetPath: SAME_HQ_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqDeleteByUrl(url, options) {
        let param = {
            url: url,
            targetPath: SAME_HQ_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸åå¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} contSign - å¾çç­¾å
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    sameHqDeleteBySign(contSign, options) {
        let param = {
            cont_sign: contSign,
            targetPath: SAME_HQ_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âå¥åºæ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ£ç´¢æ¶åæ ·å¸¦å,æé¿256Bã
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarAdd(image, options) {
        let param = {
            image: image,
            targetPath: SIMILAR_ADD_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âå¥åºæ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ£ç´¢æ¶åæ ·å¸¦å,æé¿256Bã
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarAddUrl(url, options) {
        let param = {
            url: url,
            targetPath: SIMILAR_ADD_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âæ£ç´¢æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   tag_logic æ£ç´¢æ¶tagä¹é´çé»è¾ï¼ 0ï¼é»è¾andï¼1ï¼é»è¾or
     *   pn åé¡µåè½ï¼èµ·å§ä½ç½®ï¼ä¾ï¼0ãæªæå®åé¡µæ¶ï¼é»è®¤è¿åå300ä¸ªç»æï¼æ¥å£è¿åæ°éæå¤§éå¶1000æ¡ï¼ä¾å¦ï¼èµ·å§ä½ç½®ä¸º900ï¼æªåæ¡æ°500æ¡ï¼æ¥å£ä¹åªè¿åç¬¬900 - 1000æ¡çç»æï¼å±è®¡100æ¡
     *   rn åé¡µåè½ï¼æªåæ¡æ°ï¼ä¾ï¼250
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarSearch(image, options) {
        let param = {
            image: image,
            targetPath: SIMILAR_SEARCH_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âæ£ç´¢æ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   tag_logic æ£ç´¢æ¶tagä¹é´çé»è¾ï¼ 0ï¼é»è¾andï¼1ï¼é»è¾or
     *   pn åé¡µåè½ï¼èµ·å§ä½ç½®ï¼ä¾ï¼0ãæªæå®åé¡µæ¶ï¼é»è®¤è¿åå300ä¸ªç»æï¼æ¥å£è¿åæ°éæå¤§éå¶1000æ¡ï¼ä¾å¦ï¼èµ·å§ä½ç½®ä¸º900ï¼æªåæ¡æ°500æ¡ï¼æ¥å£ä¹åªè¿åç¬¬900 - 1000æ¡çç»æï¼å±è®¡100æ¡
     *   rn åé¡µåè½ï¼æªåæ¡æ°ï¼ä¾ï¼250
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarSearchUrl(url, options) {
        let param = {
            url: url,
            targetPath: SIMILAR_SEARCH_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âæ´æ°æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ´æ°çæè¦ä¿¡æ¯ï¼æé¿256Bãæ ·ä¾ï¼{"name":"å¨æ°ä¼¦", "id":"666"}
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarUpdate(image, options) {
        let param = {
            image: image,
            targetPath: SIMILAR_UPDATE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âæ´æ°æ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ´æ°çæè¦ä¿¡æ¯ï¼æé¿256Bãæ ·ä¾ï¼{"name":"å¨æ°ä¼¦", "id":"666"}
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarUpdateUrl(url, options) {
        let param = {
            url: url,
            targetPath: SIMILAR_UPDATE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âæ´æ°æ¥å£
     *
     * @param {string} contSign - å¾çç­¾å
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ´æ°çæè¦ä¿¡æ¯ï¼æé¿256Bãæ ·ä¾ï¼{"name":"å¨æ°ä¼¦", "id":"666"}
     *   tags 1 - 65535èå´åçæ´æ°ï¼tagé´ä»¥éå·åéï¼æå¤2ä¸ªtagãæ ·ä¾ï¼"100,11" ï¼æ£ç´¢æ¶å¯åå®åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarUpdateContSign(contSign, options) {
        let param = {
            cont_sign: contSign,
            targetPath: SIMILAR_UPDATE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarDeleteByImage(image, options) {
        let param = {
            image: image,
            targetPath: SIMILAR_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarDeleteByUrl(url, options) {
        let param = {
            url: url,
            targetPath: SIMILAR_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ç¸ä¼¼å¾æ£ç´¢âå é¤æ¥å£
     *
     * @param {string} contSign - å¾çç­¾å
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    similarDeleteBySign(contSign, options) {
        let param = {
            cont_sign: contSign,
            targetPath: SIMILAR_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âå¥åºæ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ£ç´¢æ¶åæ ·å¸¦å,æé¿256Bã**è¯·æ³¨æï¼æ£ç´¢æ¥å£ä¸è¿ååå¾ï¼ä»åé¦å½åå¡«åçbriefä¿¡æ¯ï¼æä»¥è°ç¨è¯¥å¥åºæ¥å£æ¶ï¼briefä¿¡æ¯è¯·å°½éå¡«åå¯å³èè³æ¬å°å¾åºçå¾çidæèå¾çurlãå¾çåç§°ç­ä¿¡æ¯**
     *   class_id1 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   class_id2 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productAdd(image, options) {
        let param = {
            image: image,
            targetPath: PRODUCT_ADD_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âå¥åºæ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ£ç´¢æ¶åæ ·å¸¦å,æé¿256Bã**è¯·æ³¨æï¼æ£ç´¢æ¥å£ä¸è¿ååå¾ï¼ä»åé¦å½åå¡«åçbriefä¿¡æ¯ï¼æä»¥è°ç¨è¯¥å¥åºæ¥å£æ¶ï¼briefä¿¡æ¯è¯·å°½éå¡«åå¯å³èè³æ¬å°å¾åºçå¾çidæèå¾çurlãå¾çåç§°ç­ä¿¡æ¯**
     *   class_id1 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   class_id2 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productAddUrl(url, options) {
        let param = {
            url: url,
            targetPath: PRODUCT_ADD_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âæ£ç´¢æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   class_id1 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   class_id2 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   pn åé¡µåè½ï¼èµ·å§ä½ç½®ï¼ä¾ï¼0ãæªæå®åé¡µæ¶ï¼é»è®¤è¿åå300ä¸ªç»æï¼æ¥å£è¿åæ°éæå¤§éå¶1000æ¡ï¼ä¾å¦ï¼èµ·å§ä½ç½®ä¸º900ï¼æªåæ¡æ°500æ¡ï¼æ¥å£ä¹åªè¿åç¬¬900 - 1000æ¡çç»æï¼å±è®¡100æ¡
     *   rn åé¡µåè½ï¼æªåæ¡æ°ï¼ä¾ï¼250
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productSearch(image, options) {
        let param = {
            image: image,
            targetPath: PRODUCT_SEARCH_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âæ£ç´¢æ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   class_id1 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   class_id2 åååç±»ç»´åº¦1ï¼æ¯æ1-60èå´åçæ´æ°ãæ£ç´¢æ¶å¯åå®è¯¥åç±»ç»´åº¦è¿è¡æ£ç´¢
     *   pn åé¡µåè½ï¼èµ·å§ä½ç½®ï¼ä¾ï¼0ãæªæå®åé¡µæ¶ï¼é»è®¤è¿åå300ä¸ªç»æï¼æ¥å£è¿åæ°éæå¤§éå¶1000æ¡ï¼ä¾å¦ï¼èµ·å§ä½ç½®ä¸º900ï¼æªåæ¡æ°500æ¡ï¼æ¥å£ä¹åªè¿åç¬¬900 - 1000æ¡çç»æï¼å±è®¡100æ¡
     *   rn åé¡µåè½ï¼æªåæ¡æ°ï¼ä¾ï¼250
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productSearchUrl(url, options) {
        let param = {
            url: url,
            targetPath: PRODUCT_SEARCH_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âæ´æ°æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ´æ°çæè¦ä¿¡æ¯ï¼æé¿256Bãæ ·ä¾ï¼{"name":"å¨æ°ä¼¦", "id":"666"}
     *   class_id1 æ´æ°çåååç±»1ï¼æ¯æ1-60èå´åçæ´æ°ã
     *   class_id2 æ´æ°çåååç±»2ï¼æ¯æ1-60èå´åçæ´æ°ã
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productUpdate(image, options) {
        let param = {
            image: image,
            targetPath: PRODUCT_UPDATE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âæ´æ°æ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ´æ°çæè¦ä¿¡æ¯ï¼æé¿256Bãæ ·ä¾ï¼{"name":"å¨æ°ä¼¦", "id":"666"}
     *   class_id1 æ´æ°çåååç±»1ï¼æ¯æ1-60èå´åçæ´æ°ã
     *   class_id2 æ´æ°çåååç±»2ï¼æ¯æ1-60èå´åçæ´æ°ã
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productUpdateUrl(url, options) {
        let param = {
            url: url,
            targetPath: PRODUCT_UPDATE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âæ´æ°æ¥å£
     *
     * @param {string} contSign - å¾çç­¾å
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     *   brief æ´æ°çæè¦ä¿¡æ¯ï¼æé¿256Bãæ ·ä¾ï¼{"name":"å¨æ°ä¼¦", "id":"666"}
     *   class_id1 æ´æ°çåååç±»1ï¼æ¯æ1-60èå´åçæ´æ°ã
     *   class_id2 æ´æ°çåååç±»2ï¼æ¯æ1-60èå´åçæ´æ°ã
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productUpdateContSign(contSign, options) {
        let param = {
            cont_sign: contSign,
            targetPath: PRODUCT_UPDATE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âå é¤æ¥å£
     *
     * @param {string} image - å¾åæ°æ®ï¼base64ç¼ç ï¼è¦æ±base64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productDeleteByImage(image, options) {
        let param = {
            image: image,
            targetPath: PRODUCT_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âå é¤æ¥å£
     *
     * @param {string} url - å¾çå®æ´URLï¼URLé¿åº¦ä¸è¶è¿1024å­èï¼URLå¯¹åºçå¾çbase64ç¼ç åå¤§å°ä¸è¶è¿4Mï¼æç­è¾¹è³å°15pxï¼æé¿è¾¹æå¤§4096px,æ¯æjpg/png/bmpæ ¼å¼ï¼å½imageå­æ®µå­å¨æ¶urlå­æ®µå¤±æ
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productDeleteByUrl(url, options) {
        let param = {
            url: url,
            targetPath: PRODUCT_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }

    /**
     * ååæ£ç´¢âå é¤æ¥å£
     *
     * @param {string} contSign - å¾çç­¾å
     * @param {Object} options - å¯éåæ°å¯¹è±¡ï¼key: valueé½ä¸ºstringç±»å
     * @description options - optionsåè¡¨:
     * @return {Promise} - æ åPromiseå¯¹è±¡
     */
    productDeleteBySign(contSign, options) {
        let param = {
            cont_sign: contSign,
            targetPath: PRODUCT_DELETE_PATH
        };
        return this.commonImpl(objectTools.merge(param, options));
    }
}

module.exports = AipImageSearch;

