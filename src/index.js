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
import {ApiClient} from './ApiClient';
import {AdressInfos} from './model/AdressInfos';
import {AdressInfosAdress} from './model/AdressInfosAdress';
import {AdressSendCourrier} from './model/AdressSendCourrier';
import {Base64FilesSendCourrier} from './model/Base64FilesSendCourrier';
import {FilesSendCourrier} from './model/FilesSendCourrier';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse20010} from './model/InlineResponse20010';
import {InlineResponse20010Affranchissement} from './model/InlineResponse20010Affranchissement';
import {InlineResponse20010AffranchissementPAYS} from './model/InlineResponse20010AffranchissementPAYS';
import {InlineResponse20010Content} from './model/InlineResponse20010Content';
import {InlineResponse20011} from './model/InlineResponse20011';
import {InlineResponse20011Amount} from './model/InlineResponse20011Amount';
import {InlineResponse20011Contenu} from './model/InlineResponse20011Contenu';
import {InlineResponse20011Envois} from './model/InlineResponse20011Envois';
import {InlineResponse20011Total} from './model/InlineResponse20011Total';
import {InlineResponse20012} from './model/InlineResponse20012';
import {InlineResponse20012Dest} from './model/InlineResponse20012Dest';
import {InlineResponse20012Detail} from './model/InlineResponse20012Detail';
import {InlineResponse20012Envoi} from './model/InlineResponse20012Envoi';
import {InlineResponse20012General} from './model/InlineResponse20012General';
import {InlineResponse20013} from './model/InlineResponse20013';
import {InlineResponse20013TemplateValidation} from './model/InlineResponse20013TemplateValidation';
import {InlineResponse20014} from './model/InlineResponse20014';
import {InlineResponse20015} from './model/InlineResponse20015';
import {InlineResponse20016} from './model/InlineResponse20016';
import {InlineResponse20016SuiviCourrier} from './model/InlineResponse20016SuiviCourrier';
import {InlineResponse20017} from './model/InlineResponse20017';
import {InlineResponse20018} from './model/InlineResponse20018';
import {InlineResponse20018Quotas} from './model/InlineResponse20018Quotas';
import {InlineResponse20018QuotasCredit} from './model/InlineResponse20018QuotasCredit';
import {InlineResponse20018QuotasPages} from './model/InlineResponse20018QuotasPages';
import {InlineResponse20018QuotasPlan} from './model/InlineResponse20018QuotasPlan';
import {InlineResponse20019} from './model/InlineResponse20019';
import {InlineResponse2002} from './model/InlineResponse2002';
import {InlineResponse20020} from './model/InlineResponse20020';
import {InlineResponse20020ListErrors} from './model/InlineResponse20020ListErrors';
import {InlineResponse2003} from './model/InlineResponse2003';
import {InlineResponse2004} from './model/InlineResponse2004';
import {InlineResponse2005} from './model/InlineResponse2005';
import {InlineResponse2006} from './model/InlineResponse2006';
import {InlineResponse2006Adress} from './model/InlineResponse2006Adress';
import {InlineResponse2007} from './model/InlineResponse2007';
import {InlineResponse2007Adress} from './model/InlineResponse2007Adress';
import {InlineResponse2007Adress0} from './model/InlineResponse2007Adress0';
import {InlineResponse2008} from './model/InlineResponse2008';
import {InlineResponse2009} from './model/InlineResponse2009';
import {InlineResponse2009Account} from './model/InlineResponse2009Account';
import {InlineResponse2009AccountPages} from './model/InlineResponse2009AccountPages';
import {InlineResponse2009Price} from './model/InlineResponse2009Price';
import {InlineResponse2009PriceDetail} from './model/InlineResponse2009PriceDetail';
import {InlineResponse2009PriceTotal} from './model/InlineResponse2009PriceTotal';
import {InlineResponse2009Resume} from './model/InlineResponse2009Resume';
import {InlineResponse400} from './model/InlineResponse400';
import {InlineResponse400Error} from './model/InlineResponse400Error';
import {SavInfos} from './model/SavInfos';
import {SendCourrierAnonymize} from './model/SendCourrierAnonymize';
import {SendCourrierBody} from './model/SendCourrierBody';
import {SendCourrierContent} from './model/SendCourrierContent';
import {SendCourrierContentCard} from './model/SendCourrierContentCard';
import {SendCourrierContentCardText} from './model/SendCourrierContentCardText';
import {SendCourrierContentCardVisuel} from './model/SendCourrierContentCardVisuel';
import {SendCourrierContentLetter} from './model/SendCourrierContentLetter';
import {SendCourrierContentPhoto} from './model/SendCourrierContentPhoto';
import {SendPublipostageBody} from './model/SendPublipostageBody';
import {SetUserBody} from './model/SetUserBody';
import {SetWebhookEndpointBody} from './model/SetWebhookEndpointBody';
import {SourcePublipostageBody} from './model/SourcePublipostageBody';
import {SourcePublipostageSource} from './model/SourcePublipostageSource';
import {TemplatePublipostageBody} from './model/TemplatePublipostageBody';
import {UpdateUserBody} from './model/UpdateUserBody';
import {UploadFileBody} from './model/UploadFileBody';
import {AdressApi} from './api/AdressApi';
import {CompteApi} from './api/CompteApi';
import {CourrierApi} from './api/CourrierApi';
import {ErrorsApi} from './api/ErrorsApi';
import {GetTokenApi} from './api/GetTokenApi';
import {PublipostageApi} from './api/PublipostageApi';
import {SavApi} from './api/SavApi';
import {UserApi} from './api/UserApi';

/**
* Merci_facteur_PRO_vous_permet_denvoyer_des_courriers_depuis_votre_applicatif_via_son_API__Types_de_courriers_disponibles____Lettre_de_une_ou_plusieurs_pages___Carte_postale_avec_ou_sans_enveloppe__Carte_plie__Carte_gante__Carte_non_plie__Photos_sur_papier_brillantModes_denvois_disponibles____Envoi_normal__lettre_verte__Lettre_suivie__Recommand_avec_avis_de_rception__Au_sujet_des_webhooks___httpsgithub_comMerciFacteurMerci_facteur_APIblobmasterREADME_mdwebhooks_httpsgithub_comMerciFacteurMerci_facteur_APIblobmasterREADME_mdwebhooks_Librairie_PHP_et_exemples_dintgration___httpsgithub_comMerciFacteurMerci_facteur_API_httpsgithub_comMerciFacteurMerci_facteur_APIInfos_gnrales_sur_lAPI___httpsgithub_comMerciFacteurMerci_facteur_APIblobmasterREADME_md_httpsgithub_comMerciFacteurMerci_facteur_APIblobmasterREADME_mdPlus_dinformations_sur__httpswww_merci_facteur_compro_httpswww_merci_facteur_comproNhsitez_pas__nous_contacter_via__httpswww_merci_facteur_comprocontact_php_httpswww_merci_facteur_comprocontact_php.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MerciFacteurApi = require('index'); // See note below*.
* var xxxSvc = new MerciFacteurApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MerciFacteurApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MerciFacteurApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MerciFacteurApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.2.7
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdressInfos model constructor.
     * @property {module:model/AdressInfos}
     */
    AdressInfos,

    /**
     * The AdressInfosAdress model constructor.
     * @property {module:model/AdressInfosAdress}
     */
    AdressInfosAdress,

    /**
     * The AdressSendCourrier model constructor.
     * @property {module:model/AdressSendCourrier}
     */
    AdressSendCourrier,

    /**
     * The Base64FilesSendCourrier model constructor.
     * @property {module:model/Base64FilesSendCourrier}
     */
    Base64FilesSendCourrier,

    /**
     * The FilesSendCourrier model constructor.
     * @property {module:model/FilesSendCourrier}
     */
    FilesSendCourrier,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20010Affranchissement model constructor.
     * @property {module:model/InlineResponse20010Affranchissement}
     */
    InlineResponse20010Affranchissement,

    /**
     * The InlineResponse20010AffranchissementPAYS model constructor.
     * @property {module:model/InlineResponse20010AffranchissementPAYS}
     */
    InlineResponse20010AffranchissementPAYS,

    /**
     * The InlineResponse20010Content model constructor.
     * @property {module:model/InlineResponse20010Content}
     */
    InlineResponse20010Content,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20011Amount model constructor.
     * @property {module:model/InlineResponse20011Amount}
     */
    InlineResponse20011Amount,

    /**
     * The InlineResponse20011Contenu model constructor.
     * @property {module:model/InlineResponse20011Contenu}
     */
    InlineResponse20011Contenu,

    /**
     * The InlineResponse20011Envois model constructor.
     * @property {module:model/InlineResponse20011Envois}
     */
    InlineResponse20011Envois,

    /**
     * The InlineResponse20011Total model constructor.
     * @property {module:model/InlineResponse20011Total}
     */
    InlineResponse20011Total,

    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012,

    /**
     * The InlineResponse20012Dest model constructor.
     * @property {module:model/InlineResponse20012Dest}
     */
    InlineResponse20012Dest,

    /**
     * The InlineResponse20012Detail model constructor.
     * @property {module:model/InlineResponse20012Detail}
     */
    InlineResponse20012Detail,

    /**
     * The InlineResponse20012Envoi model constructor.
     * @property {module:model/InlineResponse20012Envoi}
     */
    InlineResponse20012Envoi,

    /**
     * The InlineResponse20012General model constructor.
     * @property {module:model/InlineResponse20012General}
     */
    InlineResponse20012General,

    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013,

    /**
     * The InlineResponse20013TemplateValidation model constructor.
     * @property {module:model/InlineResponse20013TemplateValidation}
     */
    InlineResponse20013TemplateValidation,

    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014,

    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015,

    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016,

    /**
     * The InlineResponse20016SuiviCourrier model constructor.
     * @property {module:model/InlineResponse20016SuiviCourrier}
     */
    InlineResponse20016SuiviCourrier,

    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017,

    /**
     * The InlineResponse20018 model constructor.
     * @property {module:model/InlineResponse20018}
     */
    InlineResponse20018,

    /**
     * The InlineResponse20018Quotas model constructor.
     * @property {module:model/InlineResponse20018Quotas}
     */
    InlineResponse20018Quotas,

    /**
     * The InlineResponse20018QuotasCredit model constructor.
     * @property {module:model/InlineResponse20018QuotasCredit}
     */
    InlineResponse20018QuotasCredit,

    /**
     * The InlineResponse20018QuotasPages model constructor.
     * @property {module:model/InlineResponse20018QuotasPages}
     */
    InlineResponse20018QuotasPages,

    /**
     * The InlineResponse20018QuotasPlan model constructor.
     * @property {module:model/InlineResponse20018QuotasPlan}
     */
    InlineResponse20018QuotasPlan,

    /**
     * The InlineResponse20019 model constructor.
     * @property {module:model/InlineResponse20019}
     */
    InlineResponse20019,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse20020 model constructor.
     * @property {module:model/InlineResponse20020}
     */
    InlineResponse20020,

    /**
     * The InlineResponse20020ListErrors model constructor.
     * @property {module:model/InlineResponse20020ListErrors}
     */
    InlineResponse20020ListErrors,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2006Adress model constructor.
     * @property {module:model/InlineResponse2006Adress}
     */
    InlineResponse2006Adress,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2007Adress model constructor.
     * @property {module:model/InlineResponse2007Adress}
     */
    InlineResponse2007Adress,

    /**
     * The InlineResponse2007Adress0 model constructor.
     * @property {module:model/InlineResponse2007Adress0}
     */
    InlineResponse2007Adress0,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The InlineResponse2009Account model constructor.
     * @property {module:model/InlineResponse2009Account}
     */
    InlineResponse2009Account,

    /**
     * The InlineResponse2009AccountPages model constructor.
     * @property {module:model/InlineResponse2009AccountPages}
     */
    InlineResponse2009AccountPages,

    /**
     * The InlineResponse2009Price model constructor.
     * @property {module:model/InlineResponse2009Price}
     */
    InlineResponse2009Price,

    /**
     * The InlineResponse2009PriceDetail model constructor.
     * @property {module:model/InlineResponse2009PriceDetail}
     */
    InlineResponse2009PriceDetail,

    /**
     * The InlineResponse2009PriceTotal model constructor.
     * @property {module:model/InlineResponse2009PriceTotal}
     */
    InlineResponse2009PriceTotal,

    /**
     * The InlineResponse2009Resume model constructor.
     * @property {module:model/InlineResponse2009Resume}
     */
    InlineResponse2009Resume,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The InlineResponse400Error model constructor.
     * @property {module:model/InlineResponse400Error}
     */
    InlineResponse400Error,

    /**
     * The SavInfos model constructor.
     * @property {module:model/SavInfos}
     */
    SavInfos,

    /**
     * The SendCourrierAnonymize model constructor.
     * @property {module:model/SendCourrierAnonymize}
     */
    SendCourrierAnonymize,

    /**
     * The SendCourrierBody model constructor.
     * @property {module:model/SendCourrierBody}
     */
    SendCourrierBody,

    /**
     * The SendCourrierContent model constructor.
     * @property {module:model/SendCourrierContent}
     */
    SendCourrierContent,

    /**
     * The SendCourrierContentCard model constructor.
     * @property {module:model/SendCourrierContentCard}
     */
    SendCourrierContentCard,

    /**
     * The SendCourrierContentCardText model constructor.
     * @property {module:model/SendCourrierContentCardText}
     */
    SendCourrierContentCardText,

    /**
     * The SendCourrierContentCardVisuel model constructor.
     * @property {module:model/SendCourrierContentCardVisuel}
     */
    SendCourrierContentCardVisuel,

    /**
     * The SendCourrierContentLetter model constructor.
     * @property {module:model/SendCourrierContentLetter}
     */
    SendCourrierContentLetter,

    /**
     * The SendCourrierContentPhoto model constructor.
     * @property {module:model/SendCourrierContentPhoto}
     */
    SendCourrierContentPhoto,

    /**
     * The SendPublipostageBody model constructor.
     * @property {module:model/SendPublipostageBody}
     */
    SendPublipostageBody,

    /**
     * The SetUserBody model constructor.
     * @property {module:model/SetUserBody}
     */
    SetUserBody,

    /**
     * The SetWebhookEndpointBody model constructor.
     * @property {module:model/SetWebhookEndpointBody}
     */
    SetWebhookEndpointBody,

    /**
     * The SourcePublipostageBody model constructor.
     * @property {module:model/SourcePublipostageBody}
     */
    SourcePublipostageBody,

    /**
     * The SourcePublipostageSource model constructor.
     * @property {module:model/SourcePublipostageSource}
     */
    SourcePublipostageSource,

    /**
     * The TemplatePublipostageBody model constructor.
     * @property {module:model/TemplatePublipostageBody}
     */
    TemplatePublipostageBody,

    /**
     * The UpdateUserBody model constructor.
     * @property {module:model/UpdateUserBody}
     */
    UpdateUserBody,

    /**
     * The UploadFileBody model constructor.
     * @property {module:model/UploadFileBody}
     */
    UploadFileBody,

    /**
    * The AdressApi service constructor.
    * @property {module:api/AdressApi}
    */
    AdressApi,

    /**
    * The CompteApi service constructor.
    * @property {module:api/CompteApi}
    */
    CompteApi,

    /**
    * The CourrierApi service constructor.
    * @property {module:api/CourrierApi}
    */
    CourrierApi,

    /**
    * The ErrorsApi service constructor.
    * @property {module:api/ErrorsApi}
    */
    ErrorsApi,

    /**
    * The GetTokenApi service constructor.
    * @property {module:api/GetTokenApi}
    */
    GetTokenApi,

    /**
    * The PublipostageApi service constructor.
    * @property {module:api/PublipostageApi}
    */
    PublipostageApi,

    /**
    * The SavApi service constructor.
    * @property {module:api/SavApi}
    */
    SavApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
