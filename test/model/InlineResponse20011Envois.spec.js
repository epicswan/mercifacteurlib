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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MerciFacteurApi);
  }
}(this, function(expect, MerciFacteurApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse20011Envois', function() {
      beforeEach(function() {
        instance = new MerciFacteurApi.InlineResponse20011Envois();
      });

      it('should create an instance of InlineResponse20011Envois', function() {
        // TODO: update the code to test InlineResponse20011Envois
        expect(instance).to.be.a(MerciFacteurApi.InlineResponse20011Envois);
      });

      it('should have the property idEnvoi (base name: "idEnvoi")', function() {
        // TODO: update the code to test the property idEnvoi
        expect(instance).to.have.property('idEnvoi');
        // expect(instance.idEnvoi).to.be(expectedValueLiteral);
      });

      it('should have the property statut (base name: "statut")', function() {
        // TODO: update the code to test the property statut
        expect(instance).to.have.property('statut');
        // expect(instance.statut).to.be(expectedValueLiteral);
      });

      it('should have the property nbPage (base name: "nbPage")', function() {
        // TODO: update the code to test the property nbPage
        expect(instance).to.have.property('nbPage');
        // expect(instance.nbPage).to.be(expectedValueLiteral);
      });

      it('should have the property nbDest (base name: "nbDest")', function() {
        // TODO: update the code to test the property nbDest
        expect(instance).to.have.property('nbDest');
        // expect(instance.nbDest).to.be(expectedValueLiteral);
      });

      it('should have the property modeEnvoi (base name: "modeEnvoi")', function() {
        // TODO: update the code to test the property modeEnvoi
        expect(instance).to.have.property('modeEnvoi');
        // expect(instance.modeEnvoi).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property idExp (base name: "idExp")', function() {
        // TODO: update the code to test the property idExp
        expect(instance).to.have.property('idExp');
        // expect(instance.idExp).to.be(expectedValueLiteral);
      });

      it('should have the property idDest (base name: "idDest")', function() {
        // TODO: update the code to test the property idDest
        expect(instance).to.have.property('idDest');
        // expect(instance.idDest).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

    });
  });

}));
