/*
 * Merci facteur API
 * Merci facteur PRO vous permet d'envoyer des courriers depuis votre applicatif via son API.     Types de courriers disponibles :   - Lettre de une ou plusieurs pages.  - Carte postale avec ou sans enveloppe  - Carte pliée  - Carte géante  - Carte non pliée  - Photos sur papier brillant    Modes d'envois disponibles :   - Envoi normal (lettre verte)  - Lettre suivie  - Recommandé avec avis de réception      Au sujet des webhooks : [`https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md#webhooks`](https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md#webhooks)     Librairie PHP et exemples d'intégration : [`https://github.com/MerciFacteur/Merci-facteur-API`](https://github.com/MerciFacteur/Merci-facteur-API)    Infos générales sur l'API : [`https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md`](https://github.com/MerciFacteur/Merci-facteur-API/blob/master/README.md)    Plus d'informations sur [`https://www.merci-facteur.com/pro`](https://www.merci-facteur.com/pro)    N'hésitez pas à nous contacter via [`https://www.merci-facteur.com/pro/contact.php`](https://www.merci-facteur.com/pro/contact.php)
 *
 * OpenAPI spec version: 1.2.7
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.50
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The InlineResponse20020ListErrors model module.
 * @module model/InlineResponse20020ListErrors
 * @version 1.2.7
 */
export class InlineResponse20020ListErrors {
  /**
   * Constructs a new <code>InlineResponse20020ListErrors</code>.
   * Objet contenant la correspondance entre chaque code d&#x27;erreur et sa signification.
   * @alias module:model/InlineResponse20020ListErrors
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20020ListErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20020ListErrors} obj Optional instance to populate.
   * @return {module:model/InlineResponse20020ListErrors} The populated <code>InlineResponse20020ListErrors</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20020ListErrors();
      if (data.hasOwnProperty('ERROR_CODE_1'))
        obj.eRRORCODE1 = ApiClient.convertToType(data['ERROR_CODE_1'], 'String');
      if (data.hasOwnProperty('ERROR_CODE_2'))
        obj.eRRORCODE2 = ApiClient.convertToType(data['ERROR_CODE_2'], 'String');
      if (data.hasOwnProperty('ERROR_CODE_3'))
        obj.eRRORCODE3 = ApiClient.convertToType(data['ERROR_CODE_3'], 'String');
      if (data.hasOwnProperty('ETC'))
        obj.ETC = ApiClient.convertToType(data['ETC'], 'String');
    }
    return obj;
  }
}

/**
 * Sigification de ce code d'erreur
 * @member {String} eRRORCODE1
 */
InlineResponse20020ListErrors.prototype.eRRORCODE1 = undefined;

/**
 * Sigification de ce code d'erreur
 * @member {String} eRRORCODE2
 */
InlineResponse20020ListErrors.prototype.eRRORCODE2 = undefined;

/**
 * Sigification de ce code d'erreur
 * @member {String} eRRORCODE3
 */
InlineResponse20020ListErrors.prototype.eRRORCODE3 = undefined;

/**
 * etc.
 * @member {String} ETC
 */
InlineResponse20020ListErrors.prototype.ETC = undefined;

