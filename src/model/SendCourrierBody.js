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
import {AdressSendCourrier} from './AdressSendCourrier';
import {SendCourrierAnonymize} from './SendCourrierAnonymize';
import {SendCourrierContent} from './SendCourrierContent';

/**
 * The SendCourrierBody model module.
 * @module model/SendCourrierBody
 * @version 1.2.7
 */
export class SendCourrierBody {
  /**
   * Constructs a new <code>SendCourrierBody</code>.
   * @alias module:model/SendCourrierBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SendCourrierBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendCourrierBody} obj Optional instance to populate.
   * @return {module:model/SendCourrierBody} The populated <code>SendCourrierBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SendCourrierBody();
      if (data.hasOwnProperty('idUser'))
        obj.idUser = ApiClient.convertToType(data['idUser'], 'Number');
      if (data.hasOwnProperty('modeEnvoi'))
        obj.modeEnvoi = ApiClient.convertToType(data['modeEnvoi'], 'String');
      if (data.hasOwnProperty('adress'))
        obj.adress = AdressSendCourrier.constructFromObject(data['adress']);
      if (data.hasOwnProperty('dateEnvoi'))
        obj.dateEnvoi = ApiClient.convertToType(data['dateEnvoi'], 'String');
      if (data.hasOwnProperty('designation'))
        obj.designation = ApiClient.convertToType(data['designation'], 'String');
      if (data.hasOwnProperty('anonymize'))
        obj.anonymize = SendCourrierAnonymize.constructFromObject(data['anonymize']);
      if (data.hasOwnProperty('content'))
        obj.content = SendCourrierContent.constructFromObject(data['content']);
    }
    return obj;
  }
}

/**
 * user ID de l'utilisateur qui envoi le courrier
 * @member {Number} idUser
 */
SendCourrierBody.prototype.idUser = undefined;

/**
 * Allowed values for the <code>modeEnvoi</code> property.
 * @enum {String}
 * @readonly
 */
SendCourrierBody.ModeEnvoiEnum = {
  /**
   * value: "normal"
   * @const
   */
  normal: "normal",

  /**
   * value: "suivi"
   * @const
   */
  suivi: "suivi",

  /**
   * value: "lrar"
   * @const
   */
  lrar: "lrar",

  /**
   * value: "lrare"
   * @const
   */
  lrare: "lrare",

  /**
   * value: "ere_otp_mail"
   * @const
   */
  ereOtpMail: "ere_otp_mail",

  /**
   * value: "ere_otp_sms"
   * @const
   */
  ereOtpSms: "ere_otp_sms"
};
/**
 * Mode d'envoi du courrier : suivi, lrar, lrare, ou normal pour les envois papier. ere_otp_mail ou ere_otp_sms pour les recommandés électroniques.
 * @member {module:model/SendCourrierBody.ModeEnvoiEnum} modeEnvoi
 */
SendCourrierBody.prototype.modeEnvoi = undefined;

/**
 * @member {module:model/AdressSendCourrier} adress
 */
SendCourrierBody.prototype.adress = undefined;

/**
 * Date d'envoi souhaitée du courrier. Si vide ou non spécifié, l'envoi sera fait le jour même (ou le jour ouvrable suivant). Doit être au format AAAA-MM-JJ et doit être une date non passée.
 * @member {String} dateEnvoi
 */
SendCourrierBody.prototype.dateEnvoi = undefined;

/**
 * Facultatif, 50 caractères maximum, la designation sera reprise sur votre interface Merci facteur pro dans le listing de vos courriers afin de faciliter vos recherches. Pour les envois recommandés élécroniques (ERE) la designation sera présente dans l'email envoyé à votre destinataire
 * @member {String} designation
 */
SendCourrierBody.prototype.designation = undefined;

/**
 * @member {module:model/SendCourrierAnonymize} anonymize
 */
SendCourrierBody.prototype.anonymize = undefined;

/**
 * @member {module:model/SendCourrierContent} content
 */
SendCourrierBody.prototype.content = undefined;

