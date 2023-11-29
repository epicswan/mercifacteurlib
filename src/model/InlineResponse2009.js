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
import {InlineResponse2009Account} from './InlineResponse2009Account';
import {InlineResponse2009Price} from './InlineResponse2009Price';
import {InlineResponse2009Resume} from './InlineResponse2009Resume';

/**
 * The InlineResponse2009 model module.
 * @module model/InlineResponse2009
 * @version 1.2.7
 */
export class InlineResponse2009 {
  /**
   * Constructs a new <code>InlineResponse2009</code>.
   * @alias module:model/InlineResponse2009
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2009();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'String');
      if (data.hasOwnProperty('envoi_id'))
        obj.envoiId = ApiClient.convertToType(data['envoi_id'], ['Number']);
      if (data.hasOwnProperty('price'))
        obj.price = InlineResponse2009Price.constructFromObject(data['price']);
      if (data.hasOwnProperty('resume'))
        obj.resume = InlineResponse2009Resume.constructFromObject(data['resume']);
      if (data.hasOwnProperty('account'))
        obj.account = InlineResponse2009Account.constructFromObject(data['account']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
InlineResponse2009.prototype.success = undefined;

/**
 * le code d'erreur en cas d'erreur
 * @member {String} error
 */
InlineResponse2009.prototype.error = undefined;

/**
 * L'Id de cet envoi
 * @member {Array.<Number>} envoiId
 */
InlineResponse2009.prototype.envoiId = undefined;

/**
 * @member {module:model/InlineResponse2009Price} price
 */
InlineResponse2009.prototype.price = undefined;

/**
 * @member {module:model/InlineResponse2009Resume} resume
 */
InlineResponse2009.prototype.resume = undefined;

/**
 * @member {module:model/InlineResponse2009Account} account
 */
InlineResponse2009.prototype.account = undefined;

