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
    describe('InlineResponse2006Adress', function() {
      beforeEach(function() {
        instance = new MerciFacteurApi.InlineResponse2006Adress();
      });

      it('should create an instance of InlineResponse2006Adress', function() {
        // TODO: update the code to test InlineResponse2006Adress
        expect(instance).to.be.a(MerciFacteurApi.InlineResponse2006Adress);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property civilite (base name: "civilite")', function() {
        // TODO: update the code to test the property civilite
        expect(instance).to.have.property('civilite');
        // expect(instance.civilite).to.be(expectedValueLiteral);
      });

      it('should have the property nom (base name: "nom")', function() {
        // TODO: update the code to test the property nom
        expect(instance).to.have.property('nom');
        // expect(instance.nom).to.be(expectedValueLiteral);
      });

      it('should have the property prenom (base name: "prenom")', function() {
        // TODO: update the code to test the property prenom
        expect(instance).to.have.property('prenom');
        // expect(instance.prenom).to.be(expectedValueLiteral);
      });

      it('should have the property societe (base name: "societe")', function() {
        // TODO: update the code to test the property societe
        expect(instance).to.have.property('societe');
        // expect(instance.societe).to.be(expectedValueLiteral);
      });

      it('should have the property adresse1 (base name: "adresse1")', function() {
        // TODO: update the code to test the property adresse1
        expect(instance).to.have.property('adresse1');
        // expect(instance.adresse1).to.be(expectedValueLiteral);
      });

      it('should have the property adresse2 (base name: "adresse2")', function() {
        // TODO: update the code to test the property adresse2
        expect(instance).to.have.property('adresse2');
        // expect(instance.adresse2).to.be(expectedValueLiteral);
      });

      it('should have the property adresse3 (base name: "adresse3")', function() {
        // TODO: update the code to test the property adresse3
        expect(instance).to.have.property('adresse3');
        // expect(instance.adresse3).to.be(expectedValueLiteral);
      });

      it('should have the property cp (base name: "cp")', function() {
        // TODO: update the code to test the property cp
        expect(instance).to.have.property('cp');
        // expect(instance.cp).to.be(expectedValueLiteral);
      });

      it('should have the property ville (base name: "ville")', function() {
        // TODO: update the code to test the property ville
        expect(instance).to.have.property('ville');
        // expect(instance.ville).to.be(expectedValueLiteral);
      });

      it('should have the property pays (base name: "pays")', function() {
        // TODO: update the code to test the property pays
        expect(instance).to.have.property('pays');
        // expect(instance.pays).to.be(expectedValueLiteral);
      });

    });
  });

}));
